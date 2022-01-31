import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rcf',
  templateUrl: './rcf.component.html',
  styleUrls: ['./rcf.component.css'],
})
export class RcfComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormGroup({
      address_1: new FormControl(''),
      address_2: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    // TODO:Use EventEmitter with form value
    console.warn(this.customerForm.value);
  }
}
