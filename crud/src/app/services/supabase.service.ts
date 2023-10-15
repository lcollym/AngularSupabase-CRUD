import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SupabaseService   {
  urlget = 'https://texnzhgobbvztboufitq.supabase.co/rest/v1/Employees?select=*'
  urlpost = "https://texnzhgobbvztboufitq.supabase.co/rest/v1/Employees"
  headers = new HttpHeaders({
    apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRleG56aGdvYmJ2enRib3VmaXRxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjM3NjUwNSwiZXhwIjoyMDExOTUyNTA1fQ.tuZdQtA8xrvFqV74yHedeUjjSrWago4P4qqNetdW7cM',
    Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRleG56aGdvYmJ2enRib3VmaXRxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjM3NjUwNSwiZXhwIjoyMDExOTUyNTA1fQ.tuZdQtA8xrvFqV74yHedeUjjSrWago4P4qqNetdW7cM',
      
    });
  constructor( private http:HttpClient ) {}

  get():Observable<any> {
    return this.http.get(this.urlget, {headers: this.headers});
  }
  
  post(body:any){
    console.log(this.headers);
    console.log(this.urlpost);
    return this.http.post(this.urlpost,body,{headers: this.headers});
  }





  



}


