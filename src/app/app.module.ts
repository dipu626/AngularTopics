import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ngx-bootstrap
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgifElseThenComponent } from './ngif-else-then/ngif-else-then.component';



@NgModule({
  declarations: [
    AppComponent,
    NgifElseThenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    ButtonsModule.forRoot(),
    CarouselModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
