import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { AggiungiAutoComponent } from './aggiungi-auto/aggiungi-auto.component';
import { FormsModule } from '@angular/forms';
import { ModificaAutoComponent } from './modifica-auto/modifica-auto.component';


@NgModule({
  declarations: [
    PostComponent,
    AggiungiAutoComponent,
    ModificaAutoComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule
  ]
})
export class PostModule { }
