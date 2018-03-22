import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeWrapperComponent } from './home-wrapper/home-wrapper.component';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PresentationComponent } from './presentation/presentation.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HomeRoutingModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule
  ],

  providers:[],

  declarations: [
    HomeWrapperComponent,
    PresentationComponent, 
    AboutMeComponent, 
    GeneralInfoComponent
  ],

  exports: [
    HomeWrapperComponent,
    PresentationComponent, 
    AboutMeComponent, 
    GeneralInfoComponent,
    
  ]

})
export class HomeModule { }
