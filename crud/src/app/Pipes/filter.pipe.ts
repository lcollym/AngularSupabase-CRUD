import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any[]): any {
    const resultPost = [];
  
    for (const post of value) {
      if (post.FirstName.indexOf(arg) > -1 ||
          post.LastName.indexOf(arg) > -1 ||
          post.Email.indexOf(arg) > -1) {
  
        resultPost.push(post);
      }
    }
  
    return resultPost;
  };
  

}
