import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { QuanlyService } from 'src/app/quanly.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  data1:any
  data2:any
  data3:any
  constructor(private quanly:QuanlyService,private route:Router) { }

  ngOnInit(): void {
    this.quanly.getProduct1().subscribe((data)=>{
      this.data1 = data
    })
    this.quanly.getProduct2().subscribe((data)=>{
      this.data2 = data
    })
    this.quanly.getProduct3().subscribe((data)=>{
      this.data3 = data
    })
  }

}
