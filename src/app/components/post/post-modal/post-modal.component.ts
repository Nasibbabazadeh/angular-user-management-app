import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { TPost } from '../../../models/post.model'

@Component({
    selector: 'app-post-modal',
    templateUrl: './post-modal.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
})
export class UserModalComponent implements OnInit {
    @Input() mode: 'add' | 'edit' = 'add'
    @Input() postData: TPost | null = null
    @Output() formSubmit = new EventEmitter<TPost>()
    @Output() closeModal = new EventEmitter<void>()

    postForm: any

    constructor(private _fb: FormBuilder) {}

    ngOnInit(): void {
        this.postForm = this._fb.group({
            title: [
                this.postData ? this.postData.title : '',
                Validators.required,
            ],
            description: [
                this.postData ? this.postData.description : '',
                Validators.required,
            ],
            tag: [
                this.postData ? this.postData.tag : '',
                [Validators.required],
            ],
        })
    }

    onSubmit(): void {
        if (this.postForm.valid) {
            this.formSubmit.emit(this.postForm.value)
        }
    }
    onClose(): void {
        this.closeModal.emit()
    }
}
