import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { ApplicationConfig } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { provideClientHydration } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { provideToastr } from 'ngx-toastr'
import { routes } from './app.routes'
import { CommonInterceptor } from './interceptors/common.interceptor'

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideClientHydration(),
        provideHttpClient(withInterceptors([CommonInterceptor])),
        provideToastr(),
        ReactiveFormsModule,
        BrowserAnimationsModule,
    ],
}
