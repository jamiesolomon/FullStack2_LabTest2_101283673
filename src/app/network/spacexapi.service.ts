import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const endpoint = 'https://api.spacexdata.com/v3/launches'


@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private http: HttpClient) { }

  getSpaceXData(){
    return this.http.get(endpoint)
  }
}
