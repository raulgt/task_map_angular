import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserLoginDtoOutput, UserLoginLocalDto } from 'src/interfaces/user-authentication/UserLoginDtoOutput';
import { UserLoginDtoInput } from 'src/interfaces/user-authentication/UserLoginDtoInput';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { UserAuthInfoDtoOutput } from 'src/interfaces/user-authentication/UserAuthInfoDtoOutput';
import { unique_valid_user } from '../common-constants/valid-moc-users';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone,
    private ls: LocalStorageService
  ) {}


  loginUser2(credentials: UserLoginDtoInput): Observable<UserLoginLocalDto> {
     
    let res: UserLoginLocalDto;
    let valid_user = unique_valid_user;
    
    if(valid_user.email == credentials.email && valid_user.password == credentials.password){
      res = {
        unique_Id: "",
        token_type: "local",
        expires_in: 10
      }  
    }else{
      res = {
        unique_Id: "",
        token_type: "local",
        expires_in: 0
      }  
    }  

    return new Observable(obj => obj.next(res));
  }


  loginUser(credentials: UserLoginDtoInput): Observable<UserLoginDtoOutput> {
    return this.http
      .post<UserLoginDtoOutput>(`${base_url}/auth/login`, credentials, {})
      .pipe(
        map((res: UserLoginDtoOutput) => {
          if(res.access_token){
           this.saveLoginToken(res.access_token);
          }       
          return res;
        }),
        catchError(this.handleError<any>('loginUser'))
      );
  }

  userDetail2(): Observable<UserAuthInfoDtoOutput> { 
    
    let userDetails: UserAuthInfoDtoOutput = {
      id: 1,
      name: 'Carlos Abreu',
      email: 'carlosuerbagt@gmail.com',
      email_verified_at: '25/06/2023',
      created_at: '',
      updated_at: ''
    }

    return of(userDetails);
  }

  userDetail(): Observable<UserAuthInfoDtoOutput> {   
    return this.http.get<UserAuthInfoDtoOutput>(`${base_url}/auth/me`, {})
    .pipe(
      map((res: UserAuthInfoDtoOutput) => {    
        return res;
      }),
      catchError(this.handleError<any>('userDetail'))
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.ngZone.run(() => {
      this.router.navigateByUrl('/login');
    });
  }

  getToken(): object | null  {
    return this.ls.getItem('token');
  }

  tokenValidation(token: object | null ): boolean {         
     if (token && !this.tokenExpired(token.toString())) {      
      return true;
     }
     return false;
  }

  failTokenValidation(){
    return true;
  }

  private tokenExpired(token: string) {    
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  private saveLoginToken(token: string){
    this.ls.setItem('token', token);
  }

  private handleError<T>(operation = 'operation', result?: T) {      
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
