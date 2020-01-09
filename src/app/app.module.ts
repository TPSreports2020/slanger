import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowseComponent } from './browse/browse.component';
import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';
import { ErrorPageComponent } from './shared/error-page.component';
import { SearchComponent } from './browse/search/search.component';
import { AlertComponent } from './shared/alert/alert.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { PostFormComponent } from './post-form/post-form.component';
import { SavedComponent } from './saved/saved.component';
import { AccountComponent } from './account/account.component';
import { ShowListingInfoComponent } from './show-listing-info/show-listing-info.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, AppRoutingModule, ReactiveFormsModule, FontAwesomeModule ],
  declarations: [ AppComponent, HeaderComponent, BrowseComponent, AuthComponent, ErrorPageComponent, SearchComponent, AlertComponent, SpinnerComponent, PostFormComponent, SavedComponent, AccountComponent, ShowListingInfoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
