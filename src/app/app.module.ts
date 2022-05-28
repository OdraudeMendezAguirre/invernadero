import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { InvernaderoComponent } from './invernadero/invernadero.component';
import { FrontInvernaderoComponent } from './front-invernadero/front-invernadero.component';
import { MongoService } from './mongo.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InvernaderoComponent,
    FrontInvernaderoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MongoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
