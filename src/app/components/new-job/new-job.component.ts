import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})
export class NewJobComponent implements OnInit {
  
  public valid;
  public is_new;
  public job;
  public status;
  public minDate;  
  public froala_options: Object = {
    charCounterCount: true,
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
  };
  constructor(public jobsService:JobsService,
              public router:Router) { 
    this.is_new = true;
    this.minDate = new Date(); 
    this.job = {
        id:7,
        user_id:2,
        materia:'',
        name:'',
        description:'',
        teacher:'',
        status:'Activa',        
        dateEnd: new Date()
    }
  }

  ngOnInit(): void {   
  }

  onSubmit(form){
    this.jobsService.create(this.job).subscribe(
      response => {
        if(response.message){          
          this.status = response.message;
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);          
        }       
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
