import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { OffresService } from '../offres.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css'],
})
export class ApplyComponent implements OnInit {
  fileToUppload: Array<File> = [];
  form: FormGroup;

  constructor(
    private offres: OffresService,
    private formbuilder: FormBuilder,
    private activeroute: ActivatedRoute,
    private route: Router
  ) {}
  id = this.activeroute.snapshot.params['id'];
  userconnect = JSON.parse(localStorage.getItem('userconnect')!);

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      coverLetter: ['', Validators.required],
      cv: ['', Validators.required],
      offre: ['', Validators.required],
      candidate: ['', Validators.required],
    });

    this.form.patchValue({
      offre: this.id,
      candidate: this.userconnect._id,
    });
  }

  handelFile(files: any) {
    this.fileToUppload = <Array<File>>files.target.files;
    console.log(this.fileToUppload);
  }

  createCandidacy() {
    let formData = new FormData();
    formData.append('candidate', this.form.value.candidate);
    formData.append('offre', this.form.value.offre);
    formData.append('coverLetter', this.form.value.coverLetter);
    formData.append('cv', this.fileToUppload[0]);
    this.offres.createCandidacy(formData).subscribe((res: any) => {
      console.log(res['data'], 'candidacy');
      Swal.fire('Candidacy Sent !');
      this.route.navigateByUrl('/');
    });
  }
}
