import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculo-page',
  templateUrl: './curriculo-page.html',
  styleUrls: ['./curriculo-page.css']
})
export class CurriculoPage { 

  public navbarItems = [
    {label: "Sobre", href: "#about-me"},
    {label: "Habilidades", href: "#skills"},
    {label: "Experiência", href: "#experience"},
    {label: "Contato", href: "#contact"},
  ]
}
