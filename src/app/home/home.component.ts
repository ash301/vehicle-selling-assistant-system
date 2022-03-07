import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';
import { Car } from '../car.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  cars:Car[] = [];
  searchText: string;
  selectedBody: any;
  carBody: any[];
  names:any[];
  price:any[];
  color:any[];
  year:any[];
  model:any[];
  constructor(private router: Router,private filterService: FilterService) { }
  
  ngOnInit() {

    this.cars = [
      {id:1, model:"assas",body:"SUV","color":"Red",year:"2022",price:"40000$",img:"assets/red_suv.webp"},
      {id:2, model:"assas1",body:"Sedan","color":"Yellow",year:"2021",price:"45000$",img:"assets/yellow_sedan.jpg"},
      {id:3, model:"assas1",body:"SUV","color":"Black",year:"2020",price:"40000$",img:"assets/black_suv.jpg"},
      {id:4, model:"assas",body:"Sedan","color":"Blue",year:"2022",price:"50000$",img:"assets/blue_sedan.jpg"},
      {id:5, model:"assas2",body:"Coupe","color":"Pink",year:"2020",price:"50000$",img:"assets/pink_coupe.jpg"},
      {id:6, model:"assas2",body:"SUV","color":"Red",year:"2021",price:"40000$",img:"assets/red_suv.webp"}
    ]

    this.model=[
      {model:"assas"},
      {model:"assas1"},
      {model:"assas2"},
    ]

    this.carBody=[
      {body:"SUV"},
      {body:"Sedan"},
      {body:"Coupe"}
    ]

    this.price=[
      {price:"40000$"},
      {price:"45000$"},
      {price:"50000$"},
    ]

    this.color=[
      {color:"Red"},
      {color:"Yellow"},
      {color:"Black"},
      {color:"Blue"},
      {color:"Pink"}
    ]

    this.year=[
      {year:"2020"},
      {year:"2021"},
      {year:"2022"},
    ]
  } 

  viewCarDetails(car:Car){
    // alert(car.body + car.color + car.model + car.price + car.year);
    this.router.navigate(["vehicle-info"],{queryParams:{id:car.id}});
  }

  changeBody(event:any){
    this.searchText = event.value.body;
  }

  changeModel(event:any){
    this.searchText = event.value.model;
  }

  changePrice(event:any){
    this.searchText = event.value.price;
  }

  changeColor(event:any){
    this.searchText = event.value.color;
  }

  changeYear(event:any){
    this.searchText = event.value.year;
  }

}
