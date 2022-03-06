import { Component, OnInit } from '@angular/core';
import { ShortapiService } from './shortapi.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent  {
    urls:any=[]
    oldUrls:any=[]
    message=''
  constructor(private search:ShortapiService) { }


   onSubmit(e:any){
     e.preventDefault();
     this.oldUrls.push(e.target[0].value)
   this.search.short(e.target[0].value).subscribe((response:any)=>{
     let url=response.result.short_link
     this.urls.push(url)
   })
   }
   onFocus(){
    this.message='please add a link'
  }
  onBlur(){
    this.message=''
  }
  copy(i:any,e:any){
     let value=this.urls[i];
     navigator.clipboard.writeText(value);
     e.target.style.backgroundColor='hsl(257, 27%, 26%)'
     e.target.textContent='copied!'
  }

}
