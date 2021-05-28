import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {ApiService} from "./api.service";

import { environment } from '../../../environments/environment';
import { Etudiant } from '../classes/etudiant';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const BASE_URL="http://127.0.0.1:8000";
const apiUrl = 'http://127.0.0.1:8000/api/records/departement';
const user_email = 'http://127.0.0.1:8000/api/records/user/';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends ApiService {
    
    
    private currentUserSubject: BehaviorSubject<Etudiant>;
    public currentUser: Observable<Etudiant>;
  user: any;
  
    constructor(protected httpClient: HttpClient,
      private Token: TokenService,) {
      super(httpClient);
      this.currentUserSubject = new BehaviorSubject<Etudiant>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
    }
  
    public get currentUserValue(): Etudiant {
      return this.currentUserSubject.value;
    }

    getUserByEmail(token, email: string): Observable<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
      });
      console.log(token.token);
      const test ='mohamedyaakoubiweb@gmail.com';
      return this.httpClient.get(`${user_email}`, { headers: headers });
      // return this.http.get(`${this.baseUrl}/${id}`);
    }
  
  
    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }
  
    login(username: string, password: string): Observable<Etudiant> {
      return this.httpClient.post<any>('http://127.0.0.1:8000/api/login_check', {email: username, password: password})
        .pipe(
          map(user => {
            // login successful if there's a jwt token in the response
            console.log(user);
            if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
            }
            return user;
          }),
          catchError(error => {
            //this.router.navigate(['newpage']);
            console.log(error);
            return of(false);
          })
        );
    }

    register(user): Observable<any> {
      console.log(user);
      return this.httpClient.post<any>('http://127.0.0.1:8000/api/login_check', {email: user.email, password: user.password})
        .pipe(
          map(user => {
            // login successful if there's a jwt token in the response
            console.log(user);
            if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
            }
            return user;
          }),
          catchError(error => {
            //this.router.navigate(['newpage']);
            console.log(error);
            return of(false);
          })
        );
      /*
      return this.httpClient.post<any>('http://localhost:8000/api/user/new', user, httpOptions)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          console.log(user);
          
          return user;
        }),
        catchError(error => {
          //this.router.navigate(['newpage']);
          console.log(error);
          return of(false);
        })
      );
      */
      

    }

    handleResponse(data) {
      this.Token.handle(data);
      console.log(data.user);
      localStorage.setItem('user', JSON.stringify(data));
    }
  }