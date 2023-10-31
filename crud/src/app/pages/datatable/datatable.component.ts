import { Component,OnInit} from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  data: any
  filter: any;
  constructor(private http:SupabaseService){this.filter = '';}

  ngOnInit(){
    this.getDataUsers();
   
  }



  // methods
  async getDataUsers(){
    await this.http.get().subscribe(res => {
      console.log(res)
      this.data = res;
    })
  }

  deleteUsers(id:number){
    if(this.http.delete(id).subscribe()){
      this.alertAlert()

      this.getDataUsers();
    }
    
    
  }

  alertAlert(){
    Swal.fire({
      icon: 'warning',
      title: 'Alert',
      text: 'Delete User?',
      confirmButtonText: 'Okey',
    }).then(() => {
      window.location.reload();
    });
    
  }
  
}
