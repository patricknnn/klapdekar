import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { IconCardComponent } from './components/icon-card/icon-card.component';
import { HeaderSmallComponent } from './components/header-small/header-small.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './components/forms/forms.component';
import { VideogalleryComponent } from './components/videogallery/videogallery.component';
import { AddvideoComponent } from './components/addvideo/addvideo.component';
import { SafePipe } from 'src/safe-pipe.pipe';
import { MastheadComponent } from './components/masthead/masthead.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HeaderComponent,
    IconCardComponent,
    HeaderSmallComponent,
    FooterComponent,
    FormsComponent,
    VideogalleryComponent,
    AddvideoComponent,
    SafePipe,
    MastheadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimplebarAngularModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
