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
            schedule: '14h00 às 14h15',
            task: 'Alegria Cristã, Abertura e Boas Vindas',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '14h15 às 14h25',
            task: 'Tratamento Espiritual',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '14h25 às 14h30',
            task: 'Deslocamento para os cursos',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '14h30 às 16h00',
            task: 'Tema Específico',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '15h45',
            task: 'Abertura Sala da Criança (CRIANÇA)',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '16h00 às 16h10',
            task: 'Alegria Cristã (CRIANÇA)',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '16h10 às 17h00',
            task: 'Tema Específico (CRIANÇA)',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '17h00 às 17h30',
            task: 'Alegria Cristã',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '17h30 às 18h30',
            task: 'Tema Central',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '18h30 às 19h10',
            task: 'Tema Central (CRIANÇA)',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '19h10 às 20h10',
            task: 'Tema Atual',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
        ],
      },
      {
        day: 'Domingo',
        insertHr: false,
        activities: [
          {
            schedule: '08h15 às 08h30',
            task: 'Alegria Cristã',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '08h30 às 08h45',
            task: 'Prece e Preparação',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '08h45 às 09h45',
            task: 'PRÁTICA Lar de Idosos (MOCIDADE E CRIANÇA)',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '09h45 às 09h50',
            task: 'AVALIAÇÃO Lar de Idosos (MOCIDADE E CRIANÇA)',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '10h00 às 10h10',
            task: 'Prece e explicação - Prática Adulto',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '10h10 às 11h00',
            task: 'PREPARAÇÃO - Práticas',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '11h00 às 12h00',
            task: 'Práticas Adulto',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '12h00 às 12h15',
            task: 'Avaliação das práticas',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
          {
            schedule: '12h15 às 12h30',
            task: 'Encerramento',
            where: 'Link Zoom',
            link: 'https://linktr.ee/EFAS_SP2021',
          },
        ],
      },
    ];
  }
}
