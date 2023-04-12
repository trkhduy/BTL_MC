import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { QuanlyService } from 'src/app/quanly.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  id: any
  listCate: any
  listData: any = []
  data: any = []
  // listData1: any
  // listData2: any
  keyword: any
  listCate1: any
  listCate2: any
  constructor(private router: ActivatedRoute, private quanly: QuanlyService) { }

  ngOnInit(): void {
    this.getProduct()
    this.quanly.getCate1().subscribe((data) => {
      this.listCate1 = data
    })
    this.quanly.getCate2().subscribe((data) => {
      this.listCate2 = data
    })
  }
  getProduct() {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.quanly.getCategory(this.id).subscribe((data) => {
        this.listCate = data
      })
      console.log(this.id)
      this.quanly.getPro(this.id).subscribe((data) => {
        this.listData = data
        console.log(this.listData)
        this.data = data
      })
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
    console.log(this.data);

    let result: any = this.filter_gender(this.data)
    result = this.filter_player(result)
    this.listData = result
  }
}
