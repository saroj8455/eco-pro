import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ProductComponent } from './components/product/product.component';
import { ToolbarComponent } from './components/dash/toolbar/toolbar.component';
import { HeilightCardComponent } from './components/dash/heilight-card/heilight-card.component';
import { ResourcesComponent } from './components/dash/resources/resources.component';
import { NextStepsComponent } from './components/dash/next-steps/next-steps.component';
import { FooterComponent } from './components/footer/footer.component';
import { RoutingDemoComponent } from './components/demo/routing-demo/routing-demo.component';
import { TempValidationComponent } from './components/validation/temp-validation/temp-validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorsDemoComponent } from './components/interceptors-demo/interceptors-demo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonHttpInterceptors } from './utils/common-http-interceptors';
import { AuthGuard } from './gd/auth.guard';
import { RcfComponent } from './components/validation/rcf/rcf.component';
import { CommentsComponent } from './components/validation/comments/comments.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ProductComponent,
    ToolbarComponent,
    HeilightCardComponent,
    ResourcesComponent,
    NextStepsComponent,
    FooterComponent,
    RoutingDemoComponent,
    TempValidationComponent,
    InterceptorsDemoComponent,
    RcfComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonHttpInterceptors,
      multi: true,
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
