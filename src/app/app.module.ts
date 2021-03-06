import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ManageCountPageComponent } from './manage-count-page/manage-count-page.component';
import { ChuckJokesComponent } from './chuck-jokes/chuck-jokes.component';


const routesArray: Routes = [
  // defines the routes in our page (URL -> component)
  // route URL in Angular have NO STARTING SLASH

  // router.get("/", ...) in Express
  { path: "", component: LandingPageComponent },

  // router.get("/contacts", ...) in Express
  { path: "contacts", component: ContactListComponent },

  // router.get("/contact/:blahId", ...) in Express
  { path: "contact/:blahId", component: ContactDetailsComponent },

  // router.get("/counter", ...) in Express
  { path: "counter", component: ManageCountPageComponent },

  // router.get("/chuck", ...) in Express
  { path: "chuck", component: ChuckJokesComponent },

  // Handle all other URLs (MUST BE LAST)
  { path: "**", component: NotFoundPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NotFoundPageComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ManageCountPageComponent,
    ChuckJokesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routesArray),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
