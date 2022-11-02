import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchingService {
  constructor(private http: HttpClient) {}

  getAllplaces() {
    return this.http.get(`${environment.baseUrl}place/getAllPlaces`);
  }
  getallspecialities() {
    return this.http.get(`${environment.baseUrl}speciality/getAllspecialities`);
  }
  getallcontracts() {
    return this.http.get(`${environment.baseUrl}skills/getallSkills`);
  }
  getallSpecialties() {
    return this.http.get(`${environment.baseUrl}speciality/getAllspecialities`);
  }
}
