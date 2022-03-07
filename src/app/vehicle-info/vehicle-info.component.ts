import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car.model';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss']
})
export class VehicleInfoComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }
  id : any;
  cars:Car[] = [];
  car:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.cars = [
      {id:1, model:"assas",body:"SUV",color:"Red",year:"2022",price:"40000$",img:"assets/red_suv.webp"},
      {id:2, model:"assas1",body:"Sedan",color:"Yellow",year:"2021",price:"45000$",img:"assets/yellow_sedan.jpg"},
      {id:3, model:"assas1",body:"SUV",color:"Black",year:"2020",price:"40000$",img:"assets/black_suv.jpg"},
      {id:4, model:"assas",body:"Sedan",color:"Blue",year:"2022",price:"50000$",img:"assets/blue_sedan.jpg"},
      {id:5, model:"assas2",body:"Coupe",color:"Pink",year:"2020",price:"50000$",img:"assets/pink_coupe.jpg"},
      {id:6, model:"assas2",body:"SUV",color:"Red",year:"2021",price:"40000$",img:"assets/red_suv.webp"}
    ]
    this.car = new Car();
    this.cars.forEach(element => {
      if(element.id == this.id){
        this.car.id = element.id;
        this.car.model = element.model;
        this.car.body = element.body;
        this.car.year = element.year;
        this.car.price = element.price;
        this.car.img = element.img;
        this.car.color = element.color;
      }
    });
  }

  goToHomePage()
  {
    this.router.navigateByUrl('home');
  }

}
