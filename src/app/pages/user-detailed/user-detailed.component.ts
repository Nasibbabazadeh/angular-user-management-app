import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-user-detailed',
    standalone: true,
    templateUrl: './user-detailed.component.html',
})
export class UserDetailedComponent {
    userId: number | null = null

    constructor(private _activated: ActivatedRoute) {
        this._activated.params.subscribe((params) => {
            this.userId = +params['id']
        })
    }
}
