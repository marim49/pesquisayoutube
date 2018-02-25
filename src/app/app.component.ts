import { Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
 


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
pesquisar(){
  return this.busca.get(this.url+"search?q="+this.pesquisa+"&key="+this.API_KEY+ "&part=snippet")
  .toPromise()
  .then(resposta=>{
    this.lista_videos = resposta.json().items;
  })
  
  
          }

teste (){
  console.log(this.pesquisar())
  
}

constructor(public busca: Http){
 this.teste();
  

}


  title = 'app';
}

