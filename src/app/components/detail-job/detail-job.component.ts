import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Router, ActivatedRoute, Params } from '@angular/router'; 
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-detail-job',
  templateUrl: './detail-job.component.html',
  styleUrls: ['./detail-job.component.css']
})
export class DetailJobComponent implements OnInit {

  public job;
  public id;
  public identity;

  constructor(public jobsService:JobsService,
              public router:Router,
              public activatedRoute:ActivatedRoute,
              public userService:UserService)
              {
                this.identity = this.userService.getIdentity();
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
              setTimeout(() => {
                this.job = response.job[0];              
              }, 1000);                          
            }else{
              setTimeout(() => {
                this.router.navigate(['/']);
              });              
            }
          },
          error => {
            console.log(<any>error);
          }
        );        
      }
    );
  }
  deletePost(id){
    this.jobsService.delete(id).subscribe(
      response => {
        if(response.status == 'success'){
          this.router.navigate(['/']);
        }        
      },
      error => {
        console.log(<any>error);
      }
    )       
  }
  calculateHours(data){

    let minutes = 1000 * 60;
    let hours = minutes * 60;
    let date1 = new Date();
    let date2 = new Date(data);

    let days = Math.round((date2.getTime() - date1.getTime()) / hours);
    
    return days;
  }
}
