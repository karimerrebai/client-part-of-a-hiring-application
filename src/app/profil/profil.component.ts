import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../authentication.service';
import { CompaniesService } from '../companies.service';
import { MangingService } from '../manging.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  userconnect = JSON.parse(localStorage.getItem('userconnect')!);
  company: any;
  candid: any;
  constructor(
    private profile: CompaniesService,
    private Candidate: AuthenticationService,
    private managingservice: MangingService
  ) {}
  candidate: any;

  ngOnInit(): void {
    this.getCandidate();
    this.getCompany();
  }
  getCompany() {
    this.profile.getCompanybyID(this.userconnect._id).subscribe((res: any) => {
      this.company = res['data'];
    });
  }
  getCandidate() {
    this.Candidate.candidateByid(this.userconnect._id).subscribe((res: any) => {
      this.candidate = res['data'];
      console.log('candidate', this.candidate);
    });
  }
  deleteCandidacy(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.managingservice.deletecandidacy(id).subscribe((res: any) => {
          Swal.fire('Deleted!', 'Your Category has been deleted.', 'success');
        });
        this.getCandidate()
      }
    });
  }
}
