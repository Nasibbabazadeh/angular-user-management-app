import { Component } from '@angular/core'
import { PostListComponent } from '../../components/post/user-posts-list/user-posts-list.component'

@Component({
    selector: 'app-user-posts',
    standalone: true,
    imports: [PostListComponent],
    templateUrl: './user-posts.component.html',
})
export class UserPostsComponent {}
