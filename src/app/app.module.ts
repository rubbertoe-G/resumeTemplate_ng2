import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeModule } from './sub-modules/home/home.module';
import { ResumeViewModule } from './sub-modules/resume-view/resume-view.module';
import { AppRoutingModule } from './app.routing'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CustomToolbarComponent } from './custom-toolbar/custom-toolbar.component';

//MATICONS///
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    CustomToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    HomeModule,
    ResumeViewModule,
    MaterialModule,

    //Routing Module
    AppRoutingModule,
    
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  
  providers: [
    //HashLocationStrategy, permite que al darle reload a la pagina se mantenga la data. Ademas, 
    // Si se quiere presentar una informacion del servidor, esta NO corromperá el rendering de la pagina.
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  } 
}
