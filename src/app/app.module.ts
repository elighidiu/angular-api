import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealsComponent } from './meals/meals.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReadMorePipePipe } from './read-more-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    ReadMorePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }


