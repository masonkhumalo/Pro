import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TheteamComponent } from './components/pages/theteam/theteam.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"team",component:TheteamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
