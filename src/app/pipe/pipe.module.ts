import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroUsuarioPipe } from './filtro-usuario.pipe';

@NgModule({
  declarations: [FiltroUsuarioPipe],
  exports:[FiltroUsuarioPipe]
})
export class PipeModule { }
