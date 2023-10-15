import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule , FormGroup, Validators} from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {
  
formUser!: FormGroup;
touched = false;
constructor(private fb:FormBuilder, private http:SupabaseService){
 
}

ngOnInit(){
  this.formUser = this.fb.group({
    FirstName: ['ricardo',[Validators.required]],
    LastName: ['rivera',Validators.required],
    Email: ['ricardorivera@gmail.com',[Validators.required,Validators.email]],
    Job: ['uber',Validators.required],
    Phone: ['8096854445',[Validators.required,Validators.minLength(10)]],
  });
  

}

getUsers(){
  this.http.get().subscribe()
  
}
postUsers(){

  if(this.formUser.valid){
    this.http.post(this.formUser.value).subscribe(res => {console.log(res)})
    console.log("func")
    console.log(this.formUser.value)
  }else{
    console.log("no valid")
  }
this.getUsers()
 
}




}


