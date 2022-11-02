import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OffresService {
  constructor(private http: HttpClient) {}

  getalloffres() {
    return this.http.get(`${environment.baseUrl}offre/allOffres`);
  }
  getoffreById(id: any) {
    return this.http.get(`${environment.baseUrl}offre/offreById/${id}`);
  }

  createCandidacy(candidacy: any) {
    return this.http.post(`${environment.baseUrl}candidacy/create`, candidacy);
  }
  addComment(comment: any) {
    return this.http.post(`${environment.baseUrl}comment/create`, comment);
  }
  createOffre(offre:any){
    return this.http.post(`${environment.baseUrl}offre/createOffre`,offre)

  }
  deleteComment(id:any){
return this.http.delete(`${environment.baseUrl}comment/delete/${id}`)

  }
}
