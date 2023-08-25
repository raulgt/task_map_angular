import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss']
})
export class LogoutModalComponent implements OnInit {

  constructor(private dialog: MatDialogRef<LogoutModalComponent>) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialog.close({response: 'nop'});
  }

  acept(){
    this.dialog.close({response: 'yes'});
  }
}
