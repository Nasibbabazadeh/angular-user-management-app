import { Component } from '@angular/core'
import { UserListComponent } from '../../components/user/user-list/user-list.component'
@Component({
    selector: 'app-users',
    standalone: true,
    imports: [UserListComponent],
    templateUrl: './users.component.html',
})
export class UsersComponent {
    constructor() {}
}
