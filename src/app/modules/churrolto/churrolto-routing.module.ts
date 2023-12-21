import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChurroltoDashboardComponent } from './churrolto-dashboard/churrolto-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path:'',component:ChurroltoDashboardComponent,
  children:
  [
    {path:'home',component:HomeComponent},
    {path:'header',component:HeaderComponent},
    {path:'footer', component:FooterComponent},
    {path:'', redirectTo:'/home',pathMatch:'full'}
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChurroltoRoutingModule { }
