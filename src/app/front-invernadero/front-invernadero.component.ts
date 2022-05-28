import { Component, OnInit } from '@angular/core';
import { Dato } from '../Entidades/Dato';
import { MongoService } from '../mongo.service';

@Component({
  selector: 'app-front-invernadero',
  templateUrl: './front-invernadero.component.html',
  styleUrls: ['./front-invernadero.component.css']
})
export class FrontInvernaderoComponent implements OnInit {
  datosLuminosidad: Dato[] = [];
  datosTemperatura: Dato[] = [];
  datosHumedad: Dato[] = [];
  venti:String="Apagado";
  lamp:String="Apagado";
  roci:String="Apagado";
  uh:Dato=new Dato();
  ul:Dato=new Dato();
  ut:Dato=new Dato();
  constructor(public servicio:MongoService) {}

  ngOnInit(): void {
    this.servicio.lum().subscribe(resp=>{
      this.datosLuminosidad=resp;
      this.ul=this.datosLuminosidad[this.datosLuminosidad.length];
    }, error=>{console.error(error)})

    this.servicio.temp().subscribe(resp=>{
      this.datosTemperatura=resp;
      this.ut=this.datosTemperatura[this.datosTemperatura.length];
    }, error=>{console.error(error)})

    this.servicio.hum().subscribe(resp=>{
      this.datosHumedad=resp;
      this.uh=this.datosHumedad[this.datosHumedad.length];
    }, error=>{console.error(error)})

  }

  estadoR:Boolean=false;
  estadoV:Boolean=false;
  estadoL:Boolean=false;

  rociador(){
    if(this.estadoR){
      this.roci="Encendido";
    }else{
      this.roci="Apagado";
    }
  }

  lampara(){
    if(this.estadoL){
      this.lamp="Encendido";
    }else{
      this.lamp="Apagado";
    }
  }

  ventilador(){
    if(this.estadoV){
      this.venti="Encendido";
    }else{
      this.venti="Apagado";
    }
  }
  
}
