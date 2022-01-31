import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interceptors-demo',
  templateUrl: './interceptors-demo.component.html',
  styleUrls: ['./interceptors-demo.component.css'],
})
export class InterceptorsDemoComponent implements OnInit {
  constructor(private readonly _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((postsResult) => {
        // TODO:process the data
      });
    this._http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((todosData) => {
        // TODO:process the data
      });
    this._http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((usersData) => {
        // TODO:process the data
      });
  }
}
