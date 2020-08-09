import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public jobs;
  public identity;
  public estado
  public numberJobs;
  public filterProduct;
  
  constructor(public jobsService:JobsService,
              public userService:UserService) 
              {
                this.identity = this.userService.getIdentity();
                this.filterProduct = '';
              }

  ngOnInit(): void {
    this.getJobs();    
  }

  getJobs(){
    this.jobsService.getJobs().subscribe(
      response => {
        if(response.status == 'success'){
          setTimeout(() => {
            this.numberJobs = 0;
            this.jobs = response.jobs;               
            for(let job of this.jobs){
              this.numberJobs++;            
            }                  
          }, 1000);                                                                  
        }       
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
  
  openActions(id){   
    
    let classActive = document.querySelector('.activeActions');    
    if(classActive){      
      classActive.classList.remove('activeActions');
    }else{
      let idAttr = document.getElementById("actions-contents-" + id);
      idAttr.classList.add("activeActions");      
    }

  }
  
  deletePost(id){
    this.jobsService.delete(id).subscribe(
      response => {
        if(response.status == 'success'){
          this.getJobs();
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
