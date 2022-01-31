import { Component, OnInit } from '@angular/core';

export class User {
  public email: string | undefined;
  public password: string | undefined;
}

@Component({
  selector: 'app-temp-validation',
  templateUrl: './temp-validation.component.html',
  styleUrls: ['./temp-validation.component.css'],
})
export class TempValidationComponent implements OnInit {
  model = new User();
  constructor() {}

  ngOnInit(): void {}

  logUser(userInfo: any) {
    console.log(userInfo);
  }
}
