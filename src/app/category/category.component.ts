import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
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
    let response = this.httpClient.get<any>(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    response.subscribe((data)=>this.meals=data);

  }

  public showAll: any = false;
    
  triggerReadMore() {
      this.showAll = true;
  }
  
  triggerReadLess() {
    this.showAll = false;
}

}
