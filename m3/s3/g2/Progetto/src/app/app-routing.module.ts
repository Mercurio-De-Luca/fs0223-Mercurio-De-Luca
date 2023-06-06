import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTemplateDrivenComponent } from './pages/form-template-driven/form-template-driven.component';
import { FormReativoComponent } from './pages/form-reativo/form-reativo.component';

const routes: Routes = [
  {
    path: '',
    component: FormTemplateDrivenComponent
  },
  {
    path: 'form-reattivo',
    component: FormReativoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
