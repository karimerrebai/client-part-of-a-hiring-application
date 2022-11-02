import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangingService } from '../manging.service';

@Component({
  selector: 'app-detailcandidacy',
  templateUrl: './detailcandidacy.component.html',
  styleUrls: ['./detailcandidacy.component.css'],
})
export class DetailcandidacyComponent implements OnInit {
  candid: any;

  constructor(
    private candidacy: MangingService,
    private activeroute: ActivatedRoute
  ) {}
  id = this.activeroute.snapshot.params['id'];

  ngOnInit(): void {
    this.getcandidacyById();
  }

  getcandidacyById() {
    this.candidacy.getcandidacybyid(this.id).subscribe((res: any) => {
      this.candid = res['data'];
      console.log('candidacy by id', this.candid);
    });
  }
}
