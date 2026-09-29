import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculo-page',
  templateUrl: './curriculo-page.html',
  styleUrls: ['./curriculo-page.css']
})
export class CurriculoPage {

  public navbarItems = [
    { label: 'Sobre', href: '#about-me' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Contato', href: '#contact' },
  ];

  public hero = {
    greeting: 'Olá, meu nome é',
    name: 'João Vitor',
    role: 'Desenvolvedor Full Stack',
    bio: 'Construo experiências digitais de ponta a ponta, unindo back-end e front-end para criar soluções eficientes, escaláveis e funcionais. Estou sempre em busca de novos desafios que me tirem da zona de conforto e me permitam evoluir continuamente.',
  };

  public codeSnippet = {
    varName: 'dev',
    nome: 'João Vitor',
    cafe: true,
    codigo: '\u221E',
  };

  public aboutParagraphs = [
    'Sou um desenvolvedor proativo e curioso, sempre disposto a aprender novas tecnologias. Tenho experiência no desenvolvimento de aplicações web e APIs REST, buscando equilibrar performance, usabilidade e qualidade de código.',
    'Minha jornada começou quando decidi seguir meu caminho na área de tecnologia. Desde então, não parei de aprender, evoluir e buscar novos desafios que contribuam para o meu crescimento profissional.',
    'Em um cenário em que a inteligência artificial está cada vez mais presente no desenvolvimento de software, busco aprender a utilizá-la da melhor maneira, aproveitando seu potencial para aumentar minha produtividade e aprimorar minhas soluções, sem deixar de lado a experiência, o conhecimento técnico e o raciocínio construídos ao longo da minha carreira.',
  ];

  public aboutHighlights = [
    { icon: '\uD83D\uDCCD', text: 'Cascavel, Brasil' },
    { icon: '\uD83C\uDF93', text: 'Analista e Desenvolvedor de Softwares — Univel' },
    { icon: '\uD83D\uDCBC', text: 'Full Stack Developer' },
    { icon: '\uD83C\uDF10', text: 'Português' },
  ];

  public skillCategories = [
    {
      title: 'Frontend',
      items: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    },
    {
      title: 'Backend',
      items: ['Java', 'Python', 'MySQL', 'PostgreSQL', 'REST APIs', 'Spring Boot'],
    },
    {
      title: 'DevOps',
      items: ['AWS', 'Docker', 'Git', 'Cursor'],
    },
    {
      title: 'Outros',
      items: ['Suporte Técnico', 'Testes', 'Typebot'],
    },
  ];

  public experiences = [
    {
      period: '2025 — Presente',
      role: 'Desenvolvedor Full Stack',
      company: 'Icondev',
      description: 'Desenvolvimento de funcionalidades no back-end, criando APIs REST e implementando métodos para comunicação e manipulação de dados no banco de dados. Integração com o front-end, conectando as APIs às aplicações e implementando um visual intuitivo para apresentação e interação com o usuário.',
      tags: ['Cursor', 'Java', 'AWS', 'MySQL', 'Docker', 'Python', 'REST APIs'],
    },
    {
      period: '2021 — 2025',
      role: 'Desenvolvedor Front-end',
      company: 'Icondev',
      description: 'Desenvolvimento e manutenção de aplicações web utilizando Angular, TypeScript e APIs REST.',
      tags: ['Angular', 'Node', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'Git'],
    },
    {
      period: '2020 — 2021',
      role: 'Analista de Suporte',
      company: 'Icondev',
      description: 'Suporte técnico aos usuários, na utilização do software SIN e SIN+ para gestão de condomínios.',
      tags: ['Movidesk', 'Suporte Técnico', 'GoTo'],
    },
    {
      period: '2018 — 2020',
      role: 'Estágiário',
      company: 'Justiça Federal do Paraná',
      description: 'Suporte técnico aos usuários, manutenção de computadores e redes.',
      tags: ['Suporte Técnico', 'Manutenção de Computadores', 'Redes'],
    },
  ];

  public menuOpen = false;

  constructor() {}

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  public closeMenu(): void {
    this.menuOpen = false;
  }

  public openLink(value: string) {
    switch (value) {
      case 'github':
        window.open('https://github.com/joao-v-oliveira', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/joão-vitor-1341bb165', '_blank');
        break;
      case 'email':
        window.location.href = 'mailto:joaovitor.mil2000@gmail.com';
        break;
      case 'whatsapp':
        window.open('https://wa.me/5545984050039', '_blank');
        break;
    }
  }
}
