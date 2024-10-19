import { Component } from '@angular/core'
import { RouterLinkActive } from '@angular/router'

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLinkActive],
    templateUrl: './header.component.html',
})
export class HeaderComponent {}
