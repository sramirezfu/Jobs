import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Injectable()

export class JobsService {
        
    public jobsList;
    public info;

    constructor(){
    
        this.jobsList = new Array<any>();
        this.jobsList = [
            {
                id:1,
                user_id:1,                
                materia:'Programacion',
                name:'Programacion en Angular',
                description:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.',
                user:'Santiago Ramirez',
                status:'Activa',                
                dateEnd:'Thu Aug 13 2020 00:00:00 GMT-0500 (hora estándar de Colombia)',
            },
            {
                id:2,
                user_id:1,                
                materia:'Programacion 2',
                name:'Programacion en React',
                description:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.',
                user:'Santiago Ramirez',
                status:'Activa',
                dateEnd:'Thu Aug 13 2020 00:00:00 GMT-0500 (hora estándar de Colombia)'
            },
            {
                id:3,
                user_id:1,                
                materia:'Programacion',
                name:'Programacion en PHP',
                description:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.',
                user:'Santiago Ramirez',
                status:'Activa',
                dateEnd:'Thu Aug 13 2020 00:00:00 GMT-0500 (hora estándar de Colombia)',
            },
            {
                id:4,
                user_id:1,                
                materia:'Programacion',
                name:'Programacion en java',
                description:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.',
                user:'Santiago Ramirez',
                status:'Finalizada',
                dateEnd:'Thu Aug 13 2020 00:00:00 GMT-0500 (hora estándar de Colombia)'
            },
            {
                id:5,
                user_id:2,                
                materia:'Programacion',
                name:'Programacion en Angular',
                description:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.',
                user:'Andres Ramirez',
                status:'Activa',
                dateEnd:'Thu Aug 13 2020 00:00:00 GMT-0500 (hora estándar de Colombia)'
            },
            {
                id:6,
                user_id:1,                
                materia:'Programacion',
                name:'Programacion en Angular',
                description:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever.',
                user:'Santiago Ramirez',
                status:'Finalizada',
                dateEnd:'Thu Aug 13 2020 00:00:00 GMT-0500 (hora estándar de Colombia)'
            }
        ]   
    }

    update(object):Observable<any>{

        let updateItem = this.jobsList.find(this.findIndexToUpdate, object.id);
        let index = this.jobsList.indexOf(updateItem);    
        this.jobsList[index] = object;
        this.info = {
            code:200,
            status:'success',
            jobs:this.jobsList
        };        

        return of(this.info);
    }

    findIndexToUpdate(object) { 
        return object.id === this;
    }

    getJobs():Observable<any>{
                
        if(this.jobsList){
            this.info = {
                code:200,
                status:'success',
                jobs:this.jobsList}
            ; 
        }else{
            this.info = {
                code:400,
                status:'error',
                message:'No existen Jobs'
            };        
        }                                 
    
        return of(this.info);
    }
    
    getJob(id):Observable<any>{

        let jobs = [];
        for(let job of this.jobsList){
            if(job.id == id){
                jobs.push(job);
            }            
        }          
        if(jobs.length != 0){
            this.info = {
                code:200,
                status:'success',
                job:jobs
            };            
        }else{
            this.info = {
                code:400,
                status:'error',
                message:'No existe el Job'
            };        
        }  
            
        return of(this.info);
    }
    delete(id):Observable<any>{

        let jobs = [];
        for(let job of this.jobsList){
            if(job.id != id){
                jobs.push(job);
            }            
        }        
        this.jobsList = jobs;
        if(this.jobsList){
            this.info = {
                code:200,
                status:'success',
                jobs:this.jobsList}
            ; 
        }else{
            this.info = {
                code:400,
                status:'error',
                message:'No existen Jobs'
            };        
        }  

        return of(this.info);
    }

    create(object):Observable<any>{
    
        this.jobsList.push(object);

        return of({status:200,message:'success',jobs:this.jobsList});
    }    
    
}