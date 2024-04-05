import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DetalhesLocalidadeComponent } from './components/detalhes-localidade/detalhes-localidade.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'detalhes-localidade/:id', component: DetalhesLocalidadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
