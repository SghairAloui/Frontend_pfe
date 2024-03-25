import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL = "http://localhost:9090/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }

  register(email:string,name:string,password:string): Observable<any> {
    return this.http.post(BASE_URL + 'signup', {
      email,
      name,
      password

    }, httpOptions)
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post<any>(BASE_URL + 'login', loginRequest)
  }

  success(): Observable<any> {
    return this.http.get(BASE_URL + 'success', {
      headers: this.createAuhtorizationHeader()
    })
  }

  private createAuhtorizationHeader() {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set(
        "Authorization", "Bearer " + jwtToken
      )
     // return new HttpHeaders().set(
       
      
    } else {
      console.log("JWT token not found in local storage");
    }
    return new HttpHeaders();
  }
}
