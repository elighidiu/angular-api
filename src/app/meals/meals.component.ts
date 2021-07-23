import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { Meal } from './meals';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getMeals();
  }
  
  currentVal="";

  getVal(event:any): void{
    console.log('getVal', event.target.value);
    this.currentVal=event.target.value;
    this.getMeals();
  }

  getMeals(){
    let response = this.httpClient.get<any>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.currentVal}`);
    response.subscribe((data)=>this.meals=data);

  }

 
}
