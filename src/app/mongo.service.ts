import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Dato } from "./Entidades/Dato";

@Injectable({
    providedIn: 'root'
})
export class MongoService{
    lumapi="https://api-invernadero.rodrigogarcia39.repl.co/invernadero1/luminosidad";
    humapi="https://api-invernadero.rodrigogarcia39.repl.co/invernadero1/humedad";
    tempapi="https://api-invernadero.rodrigogarcia39.repl.co/invernadero1/temperatura";
    constructor(public http: HttpClient){}


    public lum():Observable<any>{
        return this.http.get(this.lumapi);
    }

    public temp():Observable<any>{
        return this.http.get(this.humapi);
    }
    
    public hum():Observable<any>{
        return this.http.get(this.tempapi);
    }
}