import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
} from '@angular/forms';

type context = {
  $implicit: string;
  counter: number;
  isValid: boolean;
};

@Component({
  selector: 'app-form-image',
  templateUrl: './form-image.component.html',
  styleUrls: ['./form-image.component.scss'],
})
export class FormImageComponent implements OnInit {
  @Output() formChange = new EventEmitter<imageForm>();

  titleContext!: context;
  titleMaxSize = 50;
  titleMessage = `Your image should have no more than ${this.titleMaxSize}`;

  descContext!: context;
  descMaxSize = 500;
  descMessage = `Your image should have no more than ${this.descMaxSize}`;

  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(this.titleMaxSize),
    ]),
    description: new FormControl('', [Validators.maxLength(this.descMaxSize)]),
  });

  constructor() {
    this.makeContext();
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe({ next: this.changes.bind(this) });
  }

  changes() {
    this.makeContext();
    this.submit();
  }

  makeContext() {
    const title = this.form.get('title');
    const description = this.form.get('description');

    this.titleContext = {
      $implicit: this.titleMessage,
      counter: this.titleMaxSize - (title?.value as string).length,
      isValid: title?.pristine || title?.status == 'VALID',
    };
    this.descContext = {
      $implicit: this.descMessage,
      counter: this.descMaxSize - (description?.value as string).length,
      isValid: description?.pristine || description?.status == 'VALID',
    };
  }

  submit() {
    const value = this.form.valid ? this.form.value : null;
    this.formChange.emit(value);
  }
}
