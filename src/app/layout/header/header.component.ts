import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLinkActive, RouterLink, CommonModule],
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    isMenuOpen: boolean = false
}
