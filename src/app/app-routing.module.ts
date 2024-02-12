import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'portfolio', component: PortfolioComponent, title: 'portfolio' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
  { path: '**', component: NotFoundComponent, title: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
