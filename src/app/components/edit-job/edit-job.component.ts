import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Router, ActivatedRoute, Params } from '@angular/router'; 

@Component({
  selector: 'app-new-job',
  templateUrl: '../new-job/new-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  
  public valid;
  public is_new;
  public job;
  public status; 
  public id;
  public minDate;  
  public froala_options: Object = {
    charCounterCount: true,
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
  };
  constructor(public jobsService:JobsService,
              public router:Router,
              public activatedRoute:ActivatedRoute) {
    this.is_new = false;  
    this.minDate = new Date();
    this.job = {
      id:7,
      user_id:2,
      materia:'',
      name:'',
      description:'',
      teacher:'',
      status:'Activa',
      dateEnd:''
    }  
  }

  ngOnInit(): void {
    this.getJob();
  }
  
  getJob(){
    this.activatedRoute.params.subscribe(
      params => {
        this.id = +params['id'];
        this.jobsService.getJob(this.id).subscribe(
          response => {            
            if(response.status == 'success'){              
              this.buildJob(response.job[0]);              
            }else{
              setTimeout(() => {
                this.router.navigate(['/']);
              }, 1000);              
            }
          },
          error => {
            console.log(<any>error);
          }
        );        
      }
    );
  }
  onSubmit(form){
    this.jobsService.update(this.job).subscribe(
      response => {
        if(response.status == 'success'){
          setTimeout(() => {
            this.router.navigate(['/detalle/tarea/' + this.job.id]);
          }, 2000);
        }      
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  buildJob(jobJson){    
    this.job.id = jobJson.id;    
    this.job.user_id = jobJson.user_id;
    this.job.user = jobJson.user;
    this.job.materia = jobJson.materia;
    this.job.description = jobJson.description;
    this.job.name = jobJson.name;
    this.job.status = jobJson.status;
    this.job.dateEnd = new Date(jobJson.dateEnd);
  }

}
