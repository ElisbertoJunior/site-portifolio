import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BannerComponent } from './components/banner/banner.component';

import { TechnologiesComponent } from './components/technologies/technologies.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SecondaryTitleComponent } from './components/secondary-title/secondary-title.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    BannerComponent,
    TechnologiesComponent,
    AboutMeComponent,
    FooterComponent,
    MainButtonComponent,
    ProjectsComponent,
    SecondaryTitleComponent,
    ProjectCardComponent,
    ContactComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
