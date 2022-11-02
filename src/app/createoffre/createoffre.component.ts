import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffresService } from '../offres.service';
import { SearchingService } from '../searching.service';

@Component({
  selector: 'app-createoffre',
  templateUrl: './createoffre.component.html',
  styleUrls: ['./createoffre.component.css'],
})
export class CreateoffreComponent implements OnInit {
  places: any;
  contracts: any;
  specialities: any;

  form: FormGroup;
  userconnect = JSON.parse(localStorage.getItem('userconnect')!);

  constructor(
    private location: SearchingService,
    private formbuilder: FormBuilder,
    private CreateOffre: OffresService
  ) {}

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      jobtitle: ['', Validators.required],
      description: ['', Validators.required],
      roles: ['', Validators.required],
      responsibilities: ['', Validators.required],
      requirements: ['', Validators.required],
      salary: ['', Validators.required],
      timetype: ['', Validators.required],
      speciality: ['', Validators.required],
      company: ['', Validators.required],
      place: ['', Validators.required],
      contract: ['', Validators.required],
    });
    this.form.patchValue({
      company: this.userconnect._id,
    });

    this.getallplaces();
    this.allcontracts();
    this.getallspecialties();
  }

  getallplaces() {
    this.location.getAllplaces().subscribe((res: any) => {
      this.places = res['data'];
      console.log(this.places, 'list places');
    });
  }
  allcontracts() {
    this.location.getallcontracts().subscribe((res: any) => {
      this.contracts = res['data'];
      console.log('listcontracts', this.contracts);
    });
  }
  getallspecialties() {
    this.location.getallSpecialties().subscribe((res: any) => {
      this.specialities = res['data'];
      console.log(this.specialities, 'specialties');
    });
  }

  createoffre() {
    this.CreateOffre.createOffre(this.form.value).subscribe((res: any) => {
      console.log('offre created', res['data']);
    });
  }
}
