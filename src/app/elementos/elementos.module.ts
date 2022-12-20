import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadoComponent } from './dado/dado.component';
import {ElementosModule} from './elementos/'


@NgModule({
  declarations: [
    DadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DadoComponent],
  declarations:[DadoComponent]
})
export class ElementosModule { }
