import { NgModule, Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(value: string): string {

    let str = value;
    let res = str.split(",");
    console.log(res[res.length]);
    return res[res.length];
    // return "teste";
  }

}
