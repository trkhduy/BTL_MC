import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Cart } from 'src/app/class/cart';
import { QuanlyService } from 'src/app/quanly.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    autoplay: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  list_pro: any
  quantily: any
  index: any
  product: any
  // item: Cart = {
  // }

  dataCart = new Cart()
  constructor(private quanly: QuanlyService, private router: ActivatedRoute, private cart: Cart) {
    // this.item = cart
  }


  ngOnInit(): void {

    let id = this.router.snapshot.params['id']
    this.quanly.getDetail(id).subscribe((data) => {
      this.product = data
      // console.log(this.product)


    })
    this.quanly.getAll().subscribe((data) => {
      this.list_pro = data
    })
  }
  detail(id: number) {
    this.quanly.getDetail(id).subscribe((data) => {
      this.product = data
    })
  }
  addCart() {
    let temp: any = document.getElementById('quantily')
    this.quantily = Number(temp.value)
    this.dataCart.id_product = this.product.id
    this.dataCart.id_category = this.product.id_category
    this.dataCart.name = this.product.name
    this.dataCart.img = this.product.img
    this.dataCart.price = this.product.price
    this.dataCart.quantity = this.quantily
    console.log(this.dataCart)
    this.quanly.getCart().subscribe(data => {
      this.index = data.find((data: any) => {
        return data.id_product == this.dataCart.id_product
      })
      // console.log(this.index);

      if (this.index) {
        this.index.quantity += this.quantily
        this.quanly.putCart(this.index).subscribe(data => {
        })
        this.simpleAlert()
        // alert('aaaaa')
      } else {
        this.quanly.postCart(this.dataCart).subscribe((data) => {
          if (data) {
            this.simpleAlert()
          }
        })
      }
    })
  }
  mark(mark: any) {
    let quantily: any = document.getElementById('quantily')
    if (mark == '-') {
      if (quantily.value > 1) {
        quantily.value = quantily.value - 1
      }
    } else {
      quantily.value = Number(quantily.value) + 1
    }
  }
  simpleAlert() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Successfully added to cart',
      showConfirmButton: false,
      timer: 1500
    })
  }


}

