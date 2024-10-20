import { Component } from '@angular/core'
import { RouterLinkActive } from '@angular/router'

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterLinkActive],
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    currentYear = new Date().getFullYear()
}
