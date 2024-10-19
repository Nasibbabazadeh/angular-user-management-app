import { Injectable } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs'
import { ToastrService } from 'ngx-toastr'

@Injectable({
    providedIn: 'root',
})
export class ErrorService {
    constructor(private _toastr: ToastrService) {}

    handleError(error: HttpErrorResponse) {
        let errorMessage = ''
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Client-side error: ${error.error.message}`
            this._toastr.error(errorMessage)
        } else {
            errorMessage = `Server-side error: ${error.status} - ${error.message}`
            this._toastr.error(errorMessage)
        }
        console.error(errorMessage)
        return throwError(() => new Error(errorMessage))
    }
}
