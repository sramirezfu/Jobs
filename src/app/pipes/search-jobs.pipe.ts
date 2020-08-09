import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchJobs'
})
export class SearchJobsPipe implements PipeTransform {

  transform(value: any, text: any): any {
    if(!text){
      return value;
    }
    
    return value.filter(job => job.name.toUpperCase().includes(text.toUpperCase()));
  }

}
