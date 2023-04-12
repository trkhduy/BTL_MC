import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';
import { QuanlyService } from 'src/app/quanly.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listCart: any = []
  length: any
  constructor(private quanly: QuanlyService) { }
  check = true
  total: number = 0
  shipcost: number = 4.5
  ngOnInit(): void {
    this.getDataCart()
    this.quanly.lengthCart.subscribe((data) => {
      console.log(data)
    })
    console.log(this.length)

  }
  getDataCart() {
    this.quanly.getProCart().subscribe((data) => {
      this.listCart = data
      this.total = 0
      this.listCart.forEach((element: any) => {
        this.total += (element.price * element.quantity)
      });
      if (this.total == 0) {
        this.shipcost = 0
      }
    })
  }
  clickIcon() {
    if (this.check) {
      document.getElementById('icon1')?.classList.add('change-icon')
      document.getElementById('code-ip')?.classList.add('display-promo')
      this.check = false
    } else {
      document.getElementById('icon1')?.classList.remove('change-icon')
      document.getElementById('code-ip')?.classList.remove('display-promo')
      this.check = true
    }

    // alert('hihi')
  }
  mark(mark: any, id: any) {
    let quantily: any = document.getElementById(`quantity${id}`)
    if (mark == '-') {
      if (quantily.value > 1) {
        quantily.value = quantily.value - 1
        let datas = this.listCart.find((item: any) => {
          return item.id == id
        })

        datas.quantity = Number(quantily.value)
        this.quanly.putCart(datas).subscribe((data) => {
        })
        this.getDataCart()
      }
    } else {
      quantily.value = Number(quantily.value) + 1
      let datas = this.listCart.find((item: any) => {
        return item.id == id
      })
      console.log(datas);

      datas.quantity = Number(quantily.value)
      this.quanly.putCart(datas).subscribe((data) => {
        console.log(data);

      })
      this.getDataCart()
    }
  }
  removePro(id: number) {
    this.quanly.removeCart(id).subscribe((data) => {
      this.getDataCart()
    })
  }
}
