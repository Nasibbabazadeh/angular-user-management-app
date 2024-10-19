import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
    selector: 'app-user-filter',
    standalone: true,
    templateUrl: './user-filter.component.html',
    imports: [CommonModule, FormsModule],
})
export class UserFilterComponent {
    filterValue: string = ''

    @Output() filterChanged = new EventEmitter<string>()

    onFilterChange() {
        this.filterChanged.emit(this.filterValue)
    }
}
