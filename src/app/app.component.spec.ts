import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {Calculator} from './/calculator'
describe('Calculator', () => {

  it('greater then', () => {
    let clc=new Calculator()
   var result= clc.getArea(10,20)
    expect(result).toBeGreaterThan(100)

  });
  it('equal then', () => {
    let clc=new Calculator()
   var result= clc.getArea(10,20)
    expect(result).toEqual(200)

  });
  it('less then', () => {
    let clc=new Calculator()
   var result= clc.getArea(10,20)
    expect(result).toBeLessThan(500)

  });
});
