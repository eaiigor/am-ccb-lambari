import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DetalhesLocalidadeComponent } from './components/detalhes-localidade/detalhes-localidade.component';
import { ReunioesMusicaisComponent } from './components/reunioes-musicais/reunioes-musicais.component';
import { EnsaioLocalComponent } from './components/ensaio-local/ensaio-local.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    DetalhesLocalidadeComponent,
    ReunioesMusicaisComponent,
    EnsaioLocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
