import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import Swal from 'sweetalert2';
import { OffresService } from '../offres.service';

@Component({
  selector: 'app-detailoffre',
  templateUrl: './detailoffre.component.html',
  styleUrls: ['./detailoffre.component.css'],
})
export class DetailoffreComponent implements OnInit {
  offre: any;
  form: FormGroup;
  constructor(
    private activeroute: ActivatedRoute,
    private offres: OffresService,
    private formbuilder: FormBuilder,
    private job: OffresService
  ) {}
  userconnect = JSON.parse(localStorage.getItem('userconnect')!);

  id = this.activeroute.snapshot.params['id'];

  ngOnInit(): void {
    this.getoffre();
    this.form = this.formbuilder.group({
      text: ['', Validators.required],
      candidate: ['', Validators.required],
      offre: ['', Validators.required],
    });
    this.form.patchValue({
      offre: this.id,
      candidate: this.userconnect._id,
    });
  }

  getoffre() {
    this.offres.getoffreById(this.id).subscribe((res: any) => {
      this.offre = res['data'];
      console.log('offre', this.offre);
    });
  }

  addCOmment() {
    this.offres.addComment(this.form.value).subscribe((res: any) => {
      console.log('helel', this.form.value);
      // console.log(res['data'], 'your comment');
      this.getoffre();
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
        this.getoffre();
      }
    });
  }
}
