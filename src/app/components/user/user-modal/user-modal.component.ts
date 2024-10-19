import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { TUser } from '../../../models/user.model'

@Component({
    selector: 'app-user-modal',
    templateUrl: './user-modal.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
})
export class UserModalComponent implements OnInit {
    @Input() mode: 'add' | 'edit' = 'add'
    @Input() userData: TUser | null = null
    @Output() formSubmit = new EventEmitter<TUser>()
    @Output() closeModal = new EventEmitter<void>()

    userForm: any

    constructor(private _fb: FormBuilder) {}

    ngOnInit(): void {
        this.userForm = this._fb.group({
            name: [
                this.userData ? this.userData.name : '',
                Validators.required,
            ],
            surname: [
                this.userData ? this.userData.surname : '',
                Validators.required,
            ],
            email: [
                this.userData ? this.userData.email : '',
                [Validators.required, Validators.email],
            ],
            profession: [
                this.userData ? this.userData.profession : '',
                Validators.required,
            ],
        })
    }

    onSubmit(): void {
        if (this.userForm.valid) {
            this.formSubmit.emit(this.userForm.value)
        }
    }
    onClose(): void {
        this.closeModal.emit()
    }
}
