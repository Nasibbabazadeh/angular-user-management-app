import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, Observable } from 'rxjs'
import { ErrorService } from '../Error/error.service'

@Injectable({
    providedIn: 'root',
})
export class GenericHttpService {
    baseUrl: string = 'https://67123a4c4eca2acdb5f7aca5.mockapi.io'

    constructor(private _http: HttpClient, private error: ErrorService) {}

    getMethod<T>(endpoint: string): Observable<T> {
        return this._http
            .get<T>(`${this.baseUrl}/${endpoint}`)
            .pipe(
                catchError((error: HttpErrorResponse) =>
                    this.error.handleError(error)
                )
            )
    }
    deleteMethod<T>(endpoint: string): Observable<T> {
        return this._http
            .delete<T>(`${this.baseUrl}/${endpoint}`)
            .pipe(
                catchError((error: HttpErrorResponse) =>
                    this.error.handleError(error)
                )
            )
    }
    postMethod<T>(endpoint: string, body: any): Observable<T> {
        return this._http
            .post<T>(`${this.baseUrl}/${endpoint}`, body)
            .pipe(
                catchError((error: HttpErrorResponse) =>
                    this.error.handleError(error)
                )
            )
    }
    putMethod<T>(endpoint: string, body: any): Observable<T> {
        return this._http
            .put<T>(`${this.baseUrl}/${endpoint}`, body)
            .pipe(
                catchError((error: HttpErrorResponse) =>
                    this.error.handleError(error)
                )
            )
    }
    filterElementByName<T>(name: string, endpoint: string): Observable<T> {
        const url = `${this.baseUrl}/${endpoint}/name=${name}`
        return this._http
            .get<T>(url)
            .pipe(
                catchError((error: HttpErrorResponse) =>
                    this.error.handleError(error)
                )
            )
    }
}
