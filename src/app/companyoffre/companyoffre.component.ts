import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { CompaniesService } from '../companies.service';
import { MangingService } from '../manging.service';
import { OffresService } from '../offres.service';

@Component({
  selector: 'app-companyoffre',
  templateUrl: './companyoffre.component.html',
  styleUrls: ['./companyoffre.component.css'],
})
export class CompanyoffreComponent implements OnInit {
  constructor(
    private activeroute: ActivatedRoute,
    private offre: CompaniesService,
    private job: OffresService,
    private managing: MangingService
  ) {}
  id = this.activeroute.snapshot.params['id'];
  company: any;
  jobs: any;

  ngOnInit(): void {
    this.getOffreById();
  }

  getCompany() {
    this.offre.getCompanybyID(this.id).subscribe((res: any) => {
      this.company = res['data'];
      console.log(this.company);
    });
  }

  getOffreById() {
    this.job.getoffreById(this.id).subscribe((res: any) => {
      this.jobs = res['data'];
      console.log('job', this.jobs);
    });
  }

  deleteComment(id: any) {
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
        this.job.deleteComment(id).subscribe((res: any) => {
          Swal.fire('Deleted!', 'Your Category has been deleted.', 'success');
        });
        this.getOffreById();
      }
    });
  }
  confirmCandidacy(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Confirm it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.managing.confirmcandidacy(id).subscribe((res: any) => {
          Swal.fire('Confirmed', 'Candidacy has been confirmed.', 'success');
        });
        this.getOffreById();
      }
    });
  }
  rejectCandidacy(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Reject it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.managing.rejectcandidacy(id).subscribe((res: any) => {
          Swal.fire('Rejected', 'Candidacy has been Rejected', 'success');
        });
        this.getOffreById();
      }
    });
  }
}
