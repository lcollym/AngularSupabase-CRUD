import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';
import Swal from 'sweetalert2';

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
    Email: ['@gmail.com',[Validators.required,Validators.email]],
    Job: ['',[Validators.required]],
    Phone: ['',[Validators.required,Validators.pattern('[0-9]+')]],
  });
 


} 

postUsers(){

  if(this.formUser.valid){
    this.http.post(this.formUser.value).subscribe(res => {console.log(res)})
    this.alertAlert()
    
    
    
  }else{
   
  }

 
}



Touch(){
  this.touched = true;
}



alertAlert(){
  Swal.fire({
    icon: 'success',
    title: 'Alert',
    text: 'User add',
    confirmButtonText: 'Okey',
  }).then(() => {
    window.location.reload();
  });

}
}




