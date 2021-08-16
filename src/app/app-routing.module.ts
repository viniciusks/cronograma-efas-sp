import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditorioComponent } from './components/auditorio/auditorio.component';
import { CronogramaComponent } from './components/cronograma/cronograma.component';
import { LinksComponent } from './components/links/links.component';

const routes: Routes = [
  { path: '', component: CronogramaComponent },
  { path: 'auditorio', component: AuditorioComponent },
  { path: 'links', component: LinksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
