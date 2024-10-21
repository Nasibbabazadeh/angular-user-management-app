import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
    selector: 'app-spinner',
    standalone: true,
    templateUrl: './spinner.component.html',
    imports: [CommonModule],
    styleUrl: './spinner.component.css',
})
export class Spinner {}
