import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DetalhesLocalidadeComponent } from './components/detalhes-localidade/detalhes-localidade.component';
import { ReunioesMusicaisComponent } from './components/reunioes-musicais/reunioes-musicais.component';
import { EnsaioLocalComponent } from './components/ensaio-local/ensaio-local.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'reunioes-musicais', component: ReunioesMusicaisComponent },
  { path: 'ensaio-local', component: EnsaioLocalComponent },
  { path: 'detalhes-localidade/:id', component: DetalhesLocalidadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
