import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MangingService {
  token = localStorage.getItem('token')!;
  headersoption = new HttpHeaders({
    Authorization: 'Bearer ' + this.token,
  });

  constructor(private http: HttpClient) {}

  confirmcandidacy(id: any) {
    return this.http.get(`${environment.baseUrl}confirmCandidacy/${id}`);
  }
  rejectcandidacy(id: any) {
    return this.http.get(`${environment.baseUrl}rejectCandidacy/${id}`);
  }
  getcandidacybyid(id: any) {
    return this.http.get(`${environment.baseUrl}candidacy/getById/${id}`);
  }
  deletecandidacy(id: any) {
    return this.http.delete(`${environment.baseUrl}candidacy/delete/${id}`);
  }

  updateprofile(profile: any) {
    return this.http.put(`${environment.baseUrl}updateProfile`, profile, {
      headers: this.headersoption,
    });
  }
}
