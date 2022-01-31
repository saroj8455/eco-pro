import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CommonHttpInterceptors implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // TODO:impl goes here
    // Add Auth Token
    // In production you would get the token value from an auth service
    const hardcodedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    const reqWithToken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${hardcodedToken}`,
      },
    });
    return next.handle(reqWithToken);
  }
}
