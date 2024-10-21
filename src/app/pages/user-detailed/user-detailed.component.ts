import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { UsersService } from '../../services/Users/users.service'
import { TUser } from '../../models/user.model'
import { ErrorService } from '../../services/Error/error.service'
import { Spinner } from '../../components/spinner/spinner.component'

@Component({
    selector: 'app-user-detailed',
    standalone: true,
    templateUrl: './user-detailed.component.html',
    imports: [RouterLink, Spinner],
})
export class UserDetailedComponent implements OnInit {
    userId: number | null = null
    user: TUser | null = null
    error: boolean = false
    loading: boolean = false

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
            this.loading = true
            this._userService.getUserById(this.userId).subscribe({
                next: (user: TUser) => {
                    this.user = user
                    this.loading = false
                },
                error: (error) => {
                    this.loading = false
                    this.error = true
                    this._error.handleError(error)
                },
            })
        }
    }
}
