import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let str = value;
    let res = str.split(",");
    let final = res[res.length];
    console.log(res[res.length]);
    return final;
// return "teste";
  }

}
