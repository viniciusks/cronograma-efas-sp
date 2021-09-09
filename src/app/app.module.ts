import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuditorioComponent } from './components/auditorio/auditorio.component';
import { LinksComponent } from './components/links/links.component';
import { CronogramaComponent } from './components/cronograma/cronograma.component';

@NgModule({
  declarations: [
    AppComponent,
    AuditorioComponent,
    LinksComponent,
    CronogramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
