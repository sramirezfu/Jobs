import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public identity;
  public user;
  public status;

  constructor(public userService:UserService,
              public router:Router,
              public activatedRoute:ActivatedRoute) 
              { 
                this.user = {
                  email:'',
                  password:''
                }
              }

  ngOnInit(): void {
    this.logout();
  }

  onSubmit(form){
    this.userService.login(this.user).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = response.status;
          this.identity = response.user;
          localStorage.setItem('identity', JSON.stringify(this.identity));
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000);          
        }else{
          this.status = response.status;
        }        
      }, 
      error => {
        console.log(<any>error);
      }
    );
  }

  logout(){
    this.activatedRoute.params.subscribe(
      params => {
        let logout = +params['sure'];
        if(logout === 1){
          localStorage.removeItem('identity');
          this.identity = null;
          this.router.navigate(['/']);
        }       
      }
    );
  }

}
