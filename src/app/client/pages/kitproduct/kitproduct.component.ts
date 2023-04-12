import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { QuanlyService } from 'src/app/quanly.service';

@Component({
  selector: 'app-kitproduct',
  templateUrl: './kitproduct.component.html',
  styleUrls: ['./kitproduct.component.css']
})
export class KITproductComponent implements OnInit {
  listPro: any
  data: any = []
  listData: any
  id: any
  keyword: any
  listCate1: any
  listCate2: any
  constructor(private quanly: QuanlyService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.quanly.getAll().subscribe((data) => {
      this.listPro = data
      this.data = data
      console.log(this.data);
    })
    this.quanly.getCate1().subscribe((data) => {
      this.listCate1 = data
    })
    this.quanly.getCate2().subscribe((data) => {
      this.listCate2 = data
    })
  }
  getProduct() {
    // this.router.paramMap.subscribe((params: ParamMap) => {
    //   this.id = params.get('id');
    //   console.log(this.id)
    //   this.quanly.getPro(this.id).subscribe((data) => {
    //     this.listPro = data
    //     console.log(this.listData)
    //   })
    // })
    this.quanly.getAll().subscribe((data) => {
      this.listPro = data

    })
  }
  filter_gender(data: any) {
    let id: any = document.getElementById('filter1')
    if (id.value) {

      console.log(id.value);
      data = data.filter((item: any) => {
        console.log(item.id_category);

        return item.id_gender == Number(id.value)
      })
      console.log(data);

    }
    return data
  }
  filter_player(data: any) {
    let id: any = document.getElementById('filter2')
    if (id.value) {
      data = data.filter((item: any) => {
        return item.id_player == id.value
      })
    }
    return data
  }
  filter() {
    // console.log(this.data);

    let result: any = this.filter_gender(this.data)
    result = this.filter_player(result)
    console.log(result)
    this.listPro = result
  }
}

