import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { AggiungiAutoComponent } from './aggiungi-auto/aggiungi-auto.component';
import { ModificaAutoComponent } from './modifica-auto/modifica-auto.component';

const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'aggAuto', component: AggiungiAutoComponent},
  { path: 'modificaAuto/:id', component: ModificaAutoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
