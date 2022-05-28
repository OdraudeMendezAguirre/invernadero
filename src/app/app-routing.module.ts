import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontInvernaderoComponent } from './front-invernadero/front-invernadero.component';
import { InicioComponent } from './inicio/inicio.component';
import { InvernaderoComponent } from './invernadero/invernadero.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'Front',
    component: FrontInvernaderoComponent
  },
  {
    path: 'Invernadero',
    component: InvernaderoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
