import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
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
    FirstName: ['',[Validators.required]],
    LastName: ['',Validators.required],
    Email: ['',[Validators.required,Validators.email]],
    Job: ['',[Validators.required]],
    Phone: ['',[Validators.required,Validators.pattern('[0-9]+'),Validators.minLength(10)]],
  });
 


} 

postUsers(){

  if(this.formUser.valid){
    this.http.post(this.formUser.value).subscribe(res => {console.log(res)})
    this.alertUserAdd()
    console.log("func")
    console.log(this.formUser.value)
    
    
  }else{
    alert("form no valid")
  }

 
}

alertUserAdd(){
  alert("add user")
  location.reload();

}


Touch(){
  this.touched = true;
}

}




