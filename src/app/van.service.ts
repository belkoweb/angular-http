import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Van } from './van';
@Injectable({
  providedIn: 'root'
})
export class VanService {

 constructor(private http: HttpClient) {}

  public getVansWithObservable(): Observable<Van[]> {
    // the api is used to fetch all the existing cars
    return this.http.get<Van[]>("http://localhost:8080/vans/");
  }

  public rent(van): Observable<any> {
    van.rented = true;
    console.warn("Request to: " + "http://localhost:8080/vans/"+van.plateNumber+"?louer=true");
    return this.http.put("http://localhost:8080/vans/"+van.plateNumber+"?louer=true", null);
  }
}
