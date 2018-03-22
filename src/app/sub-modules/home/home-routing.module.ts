import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeWrapperComponent } from './home-wrapper/home-wrapper.component';

const routes: Routes = [
  {path:'home', component:HomeWrapperComponent},
  {path:'home/contact-info', component:HomeWrapperComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
