import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../authentication.service';
import { MangingService } from '../manging.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
})
export class EditprofileComponent implements OnInit {
  userconnect = JSON.parse(localStorage.getItem('userconnect')!);
  candidate: any;
  form: FormGroup;
  constructor(
    private Candidate: AuthenticationService,
    private mangin: MangingService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCandidate();
  }
  getCandidate() {
    this.Candidate.candidateByid(this.userconnect._id).subscribe((res: any) => {
      this.candidate = res['data'];
      console.log('candidate', this.candidate);
    });
  }

  editprofile() {
    this.mangin.updateprofile(this.form.value).subscribe((res: any) => {
      localStorage.setItem('userconnect', JSON.stringify(res.data));
      Swal.fire('updated');
    });
  }
}
