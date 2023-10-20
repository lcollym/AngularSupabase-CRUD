import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService   {
  urlget = 'https://texnzhgobbvztboufitq.supabase.co/rest/v1/Employees?select=*';
  urlpost = 'https://texnzhgobbvztboufitq.supabase.co/rest/v1/Employees';
  urldelete = 'https://texnzhgobbvztboufitq.supabase.co/rest/v1/Employees?some_column=eq.someValue';
  headers = new HttpHeaders({
    apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRleG56aGdvYmJ2enRib3VmaXRxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjM3NjUwNSwiZXhwIjoyMDExOTUyNTA1fQ.tuZdQtA8xrvFqV74yHedeUjjSrWago4P4qqNetdW7cM',
    Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRleG56aGdvYmJ2enRib3VmaXRxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjM3NjUwNSwiZXhwIjoyMDExOTUyNTA1fQ.tuZdQtA8xrvFqV74yHedeUjjSrWago4P4qqNetdW7cM',
   
    
    });
  constructor( private http:HttpClient ) {}

  get():Observable<any> {
    return this.http.get(this.urlget,{headers: this.headers});
  }
  
  post(body:any):Observable<any>{
    console.log(this.headers);
    console.log(this.urlpost);
    return this.http.post(this.urlpost,body,{headers: this.headers});
  }

  delete(id: number):Observable<any> {
    const headers = new HttpHeaders({
      apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRleG56aGdvYmJ2enRib3VmaXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNzY1MDUsImV4cCI6MjAxMTk1MjUwNX0.nijTHbnc9Xe41IEDerD_POlnMWTyGao0MC7IPSCQLzk',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRleG56aGdvYmJ2enRib3VmaXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNzY1MDUsImV4cCI6MjAxMTk1MjUwNX0.nijTHbnc9Xe41IEDerD_POlnMWTyGao0MC7IPSCQLzk',
      'Access-Control-Allow-Origin': '*',
    });
  
    return this.http.delete(`https://texnzhgobbvztboufitq.supabase.co/rest/v1/Employees?id=eq.${id}`, { headers });
  }


}


