import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChurroltoRoutingModule } from './churrolto-routing.module';
import { ChurroltoDashboardComponent } from './churrolto-dashboard/churrolto-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    ChurroltoDashboardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ChurroltoRoutingModule
  ]
})
export class ChurroltoModule { }
