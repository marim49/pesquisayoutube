import { Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
 




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
  youtube: any  = 'https://www.youtube.com/embed/';
  videourl: any;
  id: any;
  

pesquisar(){
  return this.busca.get(this.url+"search?q="+this.pesquisa+"&key="+this.API_KEY+ "&part=snippet")
  .toPromise()
  .then(resposta=>{
    let res = resposta.json().items;
    for(let item of res)
    {
      item.linkSeguro = this.video(item.id.videoId);
    } 
    this.lista_videos = res;
    /* lista_videos.id.videoId */
    /* this.videourl = this.dom.bypassSecurityTrustResourceUrl(this.youtube.concat(this.lista_videos.id.videoId)); */
   
  })
          }
 

teste (){
  console.log(this.pesquisar())
  
}

public video(id):SafeResourceUrl{
  return this.videourl = this.dom.bypassSecurityTrustResourceUrl(this.youtube.concat(id)); 
  
}


constructor(public busca: Http,private dom: DomSanitizer){
 /* this.videourl = this.dom.bypassSecurityTrustResourceUrl(this.youtube); */
 this.teste();
 
 

}

  title = 'app';
}

