import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-form-image',
  templateUrl: './form-image.component.html',
  styleUrls: ['./form-image.component.scss'],
})
export class FormImageComponent implements OnInit {
  @Output() formChange = new EventEmitter<imageForm>();

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.maxLength(500)]),
  });

  constructor() {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe({ next: () => this.submit() });
  }

  submit() {
    const value = this.form.valid ? this.form.value : null;
    this.formChange.emit(value);
  }
}
