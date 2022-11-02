import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';



import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../authentication.service';
import { OffresService } from '../offres.service';
import { SearchingService } from '../searching.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css'],
})
export class LayoutsComponent implements OnInit {
  submitted = false;
  form: FormGroup;
  constructor(
    private offres: OffresService,
    private auth: AuthenticationService,
    private formbuilder: FormBuilder,
    private route: Router,
    private places: SearchingService
  ) {}
  listoffres: any;
  listplaces: any;
  listspecialies: any;
  search: any;

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.getalloffres();
    this.getAllPlaces();
    this.getAllspecialities();
  }
  userconnect = JSON.parse(localStorage.getItem('userconnect')!);

  getalloffres() {
    this.offres.getalloffres().subscribe((res: any) => {
      this.listoffres = res['data'].filter((el: any) => el.isConfirmed == true);

      console.log('list offres', this.listoffres);
    });
  }
  login(): void {
    this.submitted = true;
    this.auth.login(this.form.value).subscribe(
      (res: any) => {
        console.log('login', res);
        if (res.message === 'logged') {
          localStorage.setItem('userconnect', JSON.stringify(res.user)); //user:resultat dans backend//creation un objet item
          localStorage.setItem('token', res.token);
          localStorage.setItem('refreshtoken', res.refreshtoken);
          //localStorage.setItem('role', res.role);

          localStorage.setItem('state', '0');
          window.location.href = 'http://localhost:4200';
        } /*else if (res.data.__t === 'Company') {
          this.route.navigateByUrl('/createoffre');
        }*/
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'user not found',
          text: 'email invalid',
          footer: 'password invalid',
        });
        console.log(err);
      }
    );
  }

  getAllPlaces() {
    this.places.getAllplaces().subscribe((res: any) => {
      this.listplaces = res['data'];
      console.log('places', this.listplaces);
    });
  }
  getAllspecialities() {
    this.places.getallspecialities().subscribe((res: any) => {
      this.listspecialies = res['data'];
      console.log('specialities', this.listspecialies);
    });
  }
}
