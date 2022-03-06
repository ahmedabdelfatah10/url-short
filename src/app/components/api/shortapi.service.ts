import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ShortapiService {
 

  constructor(
    private http:HttpClient
  ) { }

  short(term:string){
 return  this.http.get( 'https://api.shrtco.de/v2/shorten',{
   params:{
     url:term
   }
 })
  }
 
}
