import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  constructor( private http:HttpClient ) { }

  url = 'https://texnzhgobbvztboufitq.supabase.co/rest/v1/Employees?select=*';
  headers = new HttpHeaders({
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRleG56aGdvYmJ2enRib3VmaXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNzY1MDUsImV4cCI6MjAxMTk1MjUwNX0.nijTHbnc9Xe41IEDerD_POlnMWTyGao0MC7IPSCQLzk',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRleG56aGdvYmJ2enRib3VmaXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNzY1MDUsImV4cCI6MjAxMTk1MjUwNX0.nijTHbnc9Xe41IEDerD_POlnMWTyGao0MC7IPSCQLzk',
    'Content-Type': 'application/json',
  });


  
get():Observable<any> {
  return this.http.get<any>(this.url, { headers: this.headers });
}

post(user: any) {
  return this.http.post(
    'https://texnzhgobbvztboufitq.supabase.co/rest/v1/Employees',user,
    { headers: this.headers }
  );
}


}


