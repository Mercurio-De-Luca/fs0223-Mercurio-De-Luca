import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTemplateDrivenComponent } from './pages/form-template-driven/form-template-driven.component';
import { FormReativoComponent } from './pages/form-reativo/form-reativo.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateDrivenComponent,
    FormReativoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
