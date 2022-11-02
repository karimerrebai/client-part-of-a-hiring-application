import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  userconnect = JSON.parse(localStorage.getItem('userconnect')!);

  logout() {
    localStorage.clear();
    window.location.href = 'http://localhost:4200';
    //this.router.navigateByUrl('/home');
    //reset localstorage:suppression userconnect , token , state
  }
}
