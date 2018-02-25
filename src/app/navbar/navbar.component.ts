import { Component, OnInit,NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

pesquisa: string;
  
pesquisar(){
  console.log(this.pesquisa + "esta é a variavel")
}

  constructor() {

   }

  ngOnInit() {
  }

}
