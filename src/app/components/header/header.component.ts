import { Component, OnInit, DoCheck} from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  
  public identity;
  public day;

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.getDate();    
  }

  ngDoCheck(){
    this.getIdentity();
  }
  
  getIdentity(){
    this.identity = this.userService.getIdentity();
  }

  getDate(){
    const event = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    this.day = event.toLocaleDateString(undefined, options);    
  }

}
