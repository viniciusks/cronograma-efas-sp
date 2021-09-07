import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit {

  public infos: any;

  constructor() { }

  ngOnInit(): void {
    this.infos = [
      {
        schedule: '13h45 às 14h00',
        task: 'Alegria Cristã',
        where: 'Auditório',
        link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09'
      },
      {
        schedule: '14h00 às 14h20',
        task: 'Abertura e Boas Vindas',
        where: 'Auditório',
        link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09'
      },
      {
        schedule: '14h20 às 14h30',
        task: 'Tratamento Espiritual',
        where: 'Auditório',
        link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09'
      },
      {
        schedule: '14h30 às 16h00',
        task: 'Tema Específico',
        where: 'Salas Simultâneas',
        link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09'
      },
      {
        schedule: '16h10 às 16h40',
        task: 'Tema Específico (CRIANÇA)',
        where: 'Auditório',
        link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09'
      },
      {
        schedule: '17h00 às 17h30',
        task: 'Alegria Cristã',
        where: 'Auditório',
        link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09'
      },
      {
        schedule: '17h30 às 18h30',
        task: 'Tema Central',
        where: 'Auditório',
        link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09'
      },
      {
        schedule: '18h30 às 19h10',
        task: 'Tema Central (CRIANÇA)',
        where: 'Auditório',
        link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09'
      },
      {
        schedule: '19h10 às 20h10',
        task: 'Tema Atual',
        where: 'Salas Simultâneas',
        link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09'
      }
    ]
  }

}
