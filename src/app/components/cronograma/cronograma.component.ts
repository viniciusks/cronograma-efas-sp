import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css'],
})
export class CronogramaComponent implements OnInit {
  public infos: any;

  constructor() {}

  ngOnInit(): void {
    this.infos = [
      {
        day: 'Sábado',
        insertHr: true,
        activities: [
          {
            schedule: '13h45 às 14h00',
            task: 'Alegria Cristã',
            where: 'Auditório',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
          {
            schedule: '14h00 às 14h20',
            task: 'Abertura e Boas Vindas',
            where: 'Auditório',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
          {
            schedule: '14h20 às 14h30',
            task: 'Tratamento Espiritual',
            where: 'Auditório',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
          {
            schedule: '14h30 às 16h00',
            task: 'Tema Específico',
            where: 'Salas Simultâneas',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
          {
            schedule: '16h10 às 17h00',
            task: 'Tema Específico (CRIANÇA)',
            where: 'Auditório',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
          {
            schedule: '17h00 às 17h30',
            task: 'Alegria Cristã',
            where: 'Auditório',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
          {
            schedule: '17h30 às 18h30',
            task: 'Tema Central',
            where: 'Auditório',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
          {
            schedule: '18h30 às 19h10',
            task: 'Tema Central (CRIANÇA)',
            where: 'Auditório',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
          {
            schedule: '19h10 às 20h10',
            task: 'Tema Atual',
            where: 'Salas Simultâneas',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
        ],
      },
      {
        day: 'Domingo',
        insertHr: false,
        activities: [
          {
            schedule: '08h30 às 08h45',
            task: 'Prece e Preparação',
            where: 'Auditório',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
          {
            schedule: '08h45 às 09h45',
            task: 'PRÁTICA Lar de Idosos',
            where: 'Auditório',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
          {
            schedule: '10h00 às 10h10',
            task: 'Prece e explicação - Prática Adulto',
            where: 'Auditório',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
          {
            schedule: '10h10 às 11h00',
            task: 'PREPARAÇÃO - Práticas',
            where: 'Salas Simultâneas',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
          {
            schedule: '11h00 às 12h00',
            task: 'Práticas Adulto',
            where: 'Auditório',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
          {
            schedule: '12h00 às 12h15',
            task: 'Avaliação das práticas',
            where: 'Auditório',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
          {
            schedule: '12h15 às 12h30',
            task: 'Encerramento',
            where: 'Auditório',
            link: 'https://zoom.us/j/99151151015?pwd=SE9LWnBxckcrWm5DL0pjWGx2U0V3UT09',
          },
        ],
      },
    ];
  }
}
