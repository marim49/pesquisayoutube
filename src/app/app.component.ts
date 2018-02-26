import { Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { DomSanitizer} from '@angular/platform-browser';
 




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  pesquisa: string;
  lista_videos: any = new Array <any> ();
  url = "https://www.googleapis.com/youtube/v3/";
  API_KEY = "AIzaSyDL_9RACZ1ob7ocA4C-EDOf-kareRz9eBE";
  youtube = 'http://www.youtube.com/embed/';
  videourl: any;
  


pesquisar(){
  return this.busca.get(this.url+"search?q="+this.pesquisa+"&key="+this.API_KEY+ "&part=snippet")
  .toPromise()
  .then(resposta=>{
    this.lista_videos = resposta.json().items; 
    /* this.videourl = this.dom.bypassSecurityTrustResourceUrl(this.youtube +  this.lista_videos.id.videoId);
    */

     
   })

  
   
          }
 

teste (){
  console.log(this.pesquisar())
  
}

constructor(public busca: Http,private dom: DomSanitizer){
  
 this.teste();


}


  title = 'app';
}

