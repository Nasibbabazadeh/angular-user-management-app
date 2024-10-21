import { Component, Output, EventEmitter, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
    selector: 'app-user-filter',
    standalone: true,
    imports: [FormsModule],
    template: `
        <input
            type="text"
            (input)="onFilterChange($event)"
            class="w-full h-full rounded-lg px-5 focus:outline-none"
            [(ngModel)]="filterValue"
            [placeholder]="placeholder"
        />
    `,
})
export class UserFilterComponent {
    @Input() placeholder: string = ''
    @Input() filterValue: string = ''
    @Output() filterChange = new EventEmitter<string>()

    onFilterChange(event: any): void {
        this.filterValue = event.target.value
        this.filterChange.emit(this.filterValue)
    }
}
