import { ThisReceiver } from '@angular/compiler';
import { Component,  Inject,  OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ConfirmDialogData{
  message: string,
  record: string
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})

export class ConfirmDialogComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {  }

  ngOnInit(): void {
  }

}
