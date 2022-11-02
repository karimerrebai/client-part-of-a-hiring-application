import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(`${environment.baseUrl}registerCandidate`, user);
  }

  login(user: any) {
    return this.http.post(`${environment.baseUrl}login`, user);
  }
  logout(logout: any) {
    return this.http.post(`${environment.baseUrl}logout`, logout);
  }

  candidateByid(id: any) {
    return this.http.get(`${environment.baseUrl}candidateById/${id}`);
  }
}
