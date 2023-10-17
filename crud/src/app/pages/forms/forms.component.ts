import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule , FormGroup, Validators} from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';
import { DatatableComponent } from '../datatable/datatable.component';
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
    FirstName: ['juan',[Validators.required]],
    LastName: ['castro',Validators.required],
    Email: ['castroso@gmail.com',[Validators.required,Validators.email]],
    Job: ['bartender',Validators.required],
    Phone: ['8296854445',[Validators.required,Validators.minLength(10)]],
  });
 


} 

postUsers(){

  if(this.formUser.valid){
    this.http.post(this.formUser.value).subscribe(res => {console.log(res)})
    alert("new user add")
    
   
    location.reload()

    // console.log("func")
    // console.log(this.formUser.value)
  }else{
    alert("form no valid")
  }

 
}





}




