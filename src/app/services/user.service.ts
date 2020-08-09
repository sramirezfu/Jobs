import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()

export class UserService {
    
    public info;
    public identity;
    constructor(){

    }

    login(data):Observable<any>{
        
        let user = {
            id:1,
            email:'santiago.ramirez@hotmail.com',
            password:1234567,
            name:'Santiago',
            surname:'Ramirez',
            image:'IMG_3184.jpg'
        };
        if(data.email == user.email && data.password == user.password){
            this.info = {
                code:200,
                status:'success',
                user:user}
            ;
        }else{
            this.info = {
                code:400,
                status:'error',
                message:'Login incorrecto'};
            ;
        }
        
        return of(this.info);
        
    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));

        if(identity){
            this.identity = identity;
        }else{
            this.identity = null;
        }

        return this.identity;
    }
}