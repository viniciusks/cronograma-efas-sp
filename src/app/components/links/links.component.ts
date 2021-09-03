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
        link: "https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09"
      },
      {
        title: "Temas Atuais",
        link: "https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09"
      },
      {
        title: "Tema Central",
        link: "https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09"
      }
    ]
  }

}
