import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  public infos: any;

  constructor() { }

  ngOnInit(): void {
    this.infos = [
      {
        title: "Temas Específicos",
        link: "https://linktr.ee/EFAS_SP2021"
      },
      {
        title: "Temas Atuais",
        link: "https://linktr.ee/EFAS_SP2021"
      },
      {
        title: "Tema Central",
        link: "https://linktr.ee/EFAS_SP2021"
      }
    ]
  }

}
