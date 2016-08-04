import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>Aprendiendo {{tecnologia}}</h1>'
})
export class AppComponent { 
  tecnologia:string="Angular 2"
}