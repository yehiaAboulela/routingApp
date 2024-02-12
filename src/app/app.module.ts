import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StarSplitterComponent } from './components/star-splitter/star-splitter.component';
import { StarSplitterDarkComponent } from './components/star-splitter-dark/star-splitter-dark.component';
import { PortfolioLayerComponent } from './components/portfolio-layer/portfolio-layer.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    StarSplitterComponent,
    StarSplitterDarkComponent,
    PortfolioLayerComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
