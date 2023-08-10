import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TheteamComponent } from './components/pages/theteam/theteam.component';
import { OurServicesComponent } from './components/pages/our-services/our-services.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"team",component:TheteamComponent},
  {path:"service",component:OurServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
