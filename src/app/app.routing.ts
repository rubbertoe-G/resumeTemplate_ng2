import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeWrapperComponent } from './sub-modules/home/home-wrapper/home-wrapper.component';

const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

