import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoriaPipe } from './pipes/categoria.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoriaPipe,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    CategoriaPipe,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
