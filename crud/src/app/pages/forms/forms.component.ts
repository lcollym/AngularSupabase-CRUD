import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {
  
constructor(private fb:FormBuilder, private http:SupabaseService){}

formUser = this.fb.group({
  'FirstName':  ['',Validators.required],
  'LastName': ['',Validators.required],
  'Email': ['',[Validators.required,Validators.email]],
  'Job': ['',Validators.required],
  'Phone': ['',Validators.required],
});


ngOnInit(){

}

getUsers(){
  
}

}
