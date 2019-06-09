import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TutorialComponent} from './tutorial.component';
import { FormsModule,FormGroup}  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'user', component: AppComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
HttpClientModule,
 RouterModule.forRoot(routes)



  ],
   exports: [
      RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
