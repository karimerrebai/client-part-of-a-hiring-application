import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  fileToUpload: Array<File> = []; // push file in a array
  submitted = false;

  constructor(
    private auth: AuthenticationService,
    private formbuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      fullname: ['', Validators.required],
      adress: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files; //target:event en ts <-> event on html
    console.log(this.fileToUpload);
  }
  onSubmit(): void {
    this.submitted = true;
    let formdata = new FormData();
    formdata.append('email', this.form.value.email);
    formdata.append('password', this.form.value.password);
    formdata.append('fullname', this.form.value.fullname);
    formdata.append('city', this.form.value.city);
    formdata.append('phone', this.form.value.phone);
    formdata.append('adress', this.form.value.adress);

    formdata.append('photo', this.fileToUpload[0]);
    //display form values on success
    this.auth.register(formdata).subscribe((res: any) => {
      console.log(res['data']);
      Swal.fire('register successfully!');
      this.route.navigateByUrl('/');
    });
  }
}
