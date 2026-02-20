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

  constructor() {
    
  }

  public openLink(value: string) {
    switch(value) {
      case 'github':
        window.open("https://github.com/joao-v-oliveira", '_blank');
        break;
      case 'linkedin':
        window.open("https://www.linkedin.com/in/joão-vitor-1341bb165", '_blank');
        break;
      case 'email':
        window.location.href = "mailto:joaovitor.mil2000@gmail.com";
        break;
      case 'whatsapp':
        window.open("https://wa.me/5545984050039", '_blank');
        break;
    }
  }
}
