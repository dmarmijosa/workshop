import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiRoot: string ='https://run.mocky.io/v3/26045374-863c-469d-85c4-51ea1135ce8a';
  constructor(private http: HttpClient) {}
  getApi (){
    
  }


  private handleError(res:HttpErrorResponse){
    return observableThrowError(res.error || 'Server Error');
  }
}
