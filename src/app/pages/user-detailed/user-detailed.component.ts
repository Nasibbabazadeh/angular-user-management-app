import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { UsersService } from '../../services/Users/users.service'
import { TUser } from '../../models/user.model'
import { ErrorService } from '../../services/Error/error.service'

@Component({
    selector: 'app-user-detailed',
    standalone: true,
    templateUrl: './user-detailed.component.html',
    imports: [RouterLink],
})
export class UserDetailedComponent implements OnInit {
    userId: number | null = null
    user: TUser | null = null

    constructor(
        private _activated: ActivatedRoute,
        private _userService: UsersService,
        private _error: ErrorService
    ) {}

    ngOnInit(): void {
        this._activated.params.subscribe((params) => {
            this.userId = +params['id']
            this.loadUserById()
        })
    }

    loadUserById(): void {
        if (this.userId !== null) {
            this._userService.getUserById(this.userId).subscribe({
                next: (user: TUser) => {
                    this.user = user
                    console.log(user)
                },
                error: (error) => {
                    this._error.handleError(error)
                },
            })
        }
    }
}
