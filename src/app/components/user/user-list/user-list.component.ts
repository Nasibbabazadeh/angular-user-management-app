import { CommonModule } from '@angular/common'
import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination'
import { ToastrModule, ToastrService } from 'ngx-toastr'
import { TUser } from '../../../models/user.model'
import { ErrorService } from '../../../services/Error/error.service'
import { UsersService } from '../../../services/Users/users.service'
import { UserModalComponent } from '../user-modal/user-modal.component'
import { RouterLink } from '@angular/router'
@Component({
    selector: 'app-user-list',
    standalone: true,
    imports: [
        FormsModule,
        NgxPaginationModule,
        ToastrModule,
        CommonModule,
        UserModalComponent,
        RouterLink,
    ],
    templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
    addForm: FormGroup = new FormGroup({})
    users: TUser[] = []
    loading = false
    currentPage: number = 1
    itemsPerPage: number = 10
    isModalOpen: boolean = false
    modalMode: 'add' | 'edit' = 'add'
    selectedUser: TUser | null = null
    constructor(
        private _userService: UsersService,
        private _err: ErrorService,
        private _toastr: ToastrService
    ) {}

    ngOnInit(): void {
        this.loadUsers()
    }

    loadUsers(): void {
        this._userService.getAllUsers().subscribe({
            next: (users: TUser[]) => {
                this.loading = true
                this.users = users
            },
            error: (error: HttpErrorResponse) => {
                this._err.handleError(error)
                this.loading = false
            },
        })
    }
    deleteUserById(id: number): void {
        this._userService.deleteUserById(id).subscribe({
            next: (response) => {
                response && this._toastr.success('User deleted successfully')
                this.loadUsers()
            },
            error: (error: HttpErrorResponse) => {
                this._err.handleError(error)
            },
        })
    }

    handlePageChange(event: number): void {
        this.currentPage = event
    }
    openUserModal(): void {
        this.modalMode = 'add'
        this.selectedUser = null
        this.isModalOpen = true
    }
    handleFormSubmit(user: TUser): void {
        if (this.modalMode === 'add') {
            this._userService.addNewUser(user).subscribe({
                next: () => {
                    this._toastr.success('User added successfully!')
                    this.refreshUsers()
                },
                error: (error: HttpErrorResponse) => {
                    this._err.handleError(error)
                },
            })
        } else if (this.modalMode === 'edit' && this.selectedUser) {
            this._userService
                .updateUserById(this.selectedUser.id, user)
                .subscribe({
                    next: () => {
                        this._toastr.success('User updated successfully!')
                        this.refreshUsers()
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

    refreshUsers(): void {
        this._userService.getAllUsers().subscribe((users: TUser[]) => {
            this.users = users
        })
    }
    openEditModal(user: TUser): void {
        this.modalMode = 'edit'
        this.selectedUser = user
        this.isModalOpen = true
    }
}
