import { CommonModule } from '@angular/common'
import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { TPost } from '../../../models/post.model'
import { ErrorService } from '../../../services/Error/error.service'
import { PostService } from '../../../services/Posts/post.service'
import { CapitalizePipe } from '../../../shared/pipes/capitalize.pipe'
import { Spinner } from '../../spinner/spinner.component'
import { UserFilterComponent } from '../../user/user-filter/user-filter.component'
import { UserModalComponent } from '../post-modal/post-modal.component'

@Component({
    selector: 'user-posts-list',
    standalone: true,
    templateUrl: './user-posts-list.component.html',
    imports: [
        CommonModule,
        UserModalComponent,
        Spinner,
        UserFilterComponent,
        CapitalizePipe,
    ],
})
export class PostListComponent implements OnInit {
    addForm: FormGroup = new FormGroup({})
    loading = true
    isModalOpen: boolean = false
    modalMode: 'add' | 'edit' = 'add'
    selectedPost: TPost | null = null
    posts: TPost[] = []
    userId: string = ''
    currentPage: number = 1
    itemsPerPage: number = 2
    filteredPost: any[] = []
    filterValue: string = ''
    postCount: number = 0
    postPlaceholder: string = 'Search by post title...'
    constructor(
        private _postService: PostService,
        private _err: ErrorService,
        private _toastr: ToastrService,
        private _activeRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this._activeRoute.params.subscribe((params) => {
            this.userId = params['id']
            this.loadUserPosts()
            this.getPostsCount()
        })
    }
    getPostsCount(): void {
        this._postService
            .getAllPosts(this.userId)
            .subscribe((posts) => (this.postCount = posts.length))
    }
    onFilterValueChanged(newValue: string) {
        this.filterValue = newValue.toLowerCase()
        this.filteredPost = this.posts.filter((post) =>
            post.title.toLowerCase().includes(this.filterValue)
        )
    }
    loadUserPosts(): void {
        this._postService
            .getUserPosts(this.userId, this.currentPage, this.itemsPerPage)
            .subscribe({
                next: (posts: TPost[]) => {
                    this.loading = false
                    this.posts = posts
                },
                error: (error) => {
                    this.loading = false
                    console.error('Error fetching posts:', error)
                },
            })
    }
    deletePostById(postId: string): void {
        this._postService.deletePostById(this.userId, postId).subscribe({
            next: (response) => {
                response && this._toastr.success('Post deleted successfully')
                this.loadUserPosts()
            },
            error: (error: HttpErrorResponse) => {
                this._err.handleError(error)
            },
        })
    }

    onPageChange(page: number): void {
        this.currentPage = page
        this.loadUserPosts()
    }
    openUserModal(): void {
        this.modalMode = 'add'
        this.selectedPost = null
        this.isModalOpen = true
    }
    handleFormSubmit(user: TPost): void {
        if (this.modalMode === 'add') {
            this._postService.addPost(this.userId, user).subscribe({
                next: () => {
                    this._toastr.success('Post added successfully!')
                    this.refreshPosts()
                },
                error: (error: HttpErrorResponse) => {
                    this._err.handleError(error)
                },
            })
        } else if (this.modalMode === 'edit' && this.selectedPost) {
            this._postService
                .updatePost(this.userId, this.selectedPost.id, user)
                .subscribe({
                    next: () => {
                        this._toastr.success('Post updated successfully!')
                        this.refreshPosts()
                    },
                    error: (error: HttpErrorResponse) => {
                        this._err.handleError(error)
                    },
                })
        }
        this.isModalOpen = false
    }

    closeModal(): void {
        this.isModalOpen = false
    }

    refreshPosts(): void {
        this.getPostsCount()
        this._postService
            .getUserPosts(this.userId, this.currentPage, this.itemsPerPage)
            .subscribe((post: TPost[]) => {
                this.posts = post
            })
    }
    openEditModal(user: TPost): void {
        this.modalMode = 'edit'
        this.selectedPost = user
        this.isModalOpen = true
    }
}
