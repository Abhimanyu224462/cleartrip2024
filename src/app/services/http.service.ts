import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient, private httpClient1:HttpClient) { }

  baseUrl:string ="http://localhost:3000/"

  headers:HttpHeaders = new HttpHeaders({
    'content-type':'application/json'
  })

  getDataFromServer(endpoint:any,obj:any):Observable<any>{
  const url = this.baseUrl + endpoint
  let httpParams = new HttpParams()
                  .set("city",obj.city)
                  .set("rooms",obj.rooms)
                  .set("checkin",obj.checkin)
                  .set("checkout",obj.checkout)

    return this.httpClient.get(url,{headers:this.headers,params:httpParams})
  }

  getDataFromServerBookings(endpoint:any):Observable<any>{
    const url = this.baseUrl + endpoint
    return this.httpClient.get(url,{headers:this.headers})
  }

  getDataFromServerBookingsParams(endpoint:any,id:any):Observable<any>{
    const url = this.baseUrl + endpoint
    let httpParams = new HttpParams()
                    .set("id",id)
    return this.httpClient.get(url,{headers:this.headers, params:httpParams})
  }

}
