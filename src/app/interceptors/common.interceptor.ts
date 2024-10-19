import {
    HttpErrorResponse,
    HttpInterceptorFn,
    HttpRequest,
} from '@angular/common/http'
import { catchError, throwError } from 'rxjs'

// Function-based interceptor using HttpInterceptorFn
export const CommonInterceptor: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next
) => {
    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error instanceof HttpErrorResponse) {
                switch (error.status) {
                    case 401:
                        console.log('401 Unauthorized')
                        break
                    case 402:
                        console.log('402 Payment Required')
                        break
                    case 403:
                        console.log('403 Forbidden')
                        break
                    case 404:
                        console.log('404 Not Found')
                        break
                    case 500:
                        console.log('500 Internal Server Error')
                        break
                    default:
                        console.log(`Unexpected status code: ${error.status}`)
                }
            }

            return throwError(() => new Error('Error processing the request'))
        })
    )
}
