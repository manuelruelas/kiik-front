import { Component, OnInit } from '@angular/core';
import { MatDialog,DialogPosition } from '@angular/material/dialog';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  showLoginModal() {
    
    let dialogRef = this.dialog.open(LoginComponent,{
      width:"500px"
    });

    dialogRef.afterClosed();

  }

  showSignupModal(){
    let dialogRef = this.dialog.open(SignupComponent,{
      width:"500px"
    });
    
  }
}