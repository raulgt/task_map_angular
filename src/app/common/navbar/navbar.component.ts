import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { LogoutModalComponent } from '../modals/logout-modal/logout-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() user: string;



  constructor(private loginService: LoginServiceService, private modal: MatDialog) { }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
  }

  openLogOutModal() {
    const dialogRef = this.modal.open(LogoutModalComponent, {
      disableClose: false,
      width: "518px",
      height: "250px",
      panelClass:'custom-dialog-container'
    });
    document.documentElement.classList.remove("cdk-global-scrollblock");
    dialogRef.afterClosed().subscribe((data) => { 
      console.log('Log-Out: ', data)
      if (data.response === 'yes') {
        this.logout();
      }
    });
  }

}
