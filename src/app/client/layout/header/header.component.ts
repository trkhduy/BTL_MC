import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanlyService } from 'src/app/quanly.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listCate: any
  user: any
  length: any
  constructor(private quanly: QuanlyService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.quanly.getCate().subscribe((data) => {
      this.listCate = data

    })
    this.quanly.getAll().subscribe(() => {
    })
    let data: any = localStorage.getItem('acc')
    this.user = JSON.parse(data)

    this.Length()

  }
  Length() {
    this.quanly.lengthCart.subscribe(data => {
      this.length = data
    })

  }
  logout() {
    localStorage.removeItem('acc')
    let data: any = localStorage.getItem('acc')
    this.user = JSON.parse(data)
  }
  onNav() {
    document.getElementById('Nav')?.classList.add('nav-768-on')
  }
  offNav() {
    document.getElementById('Nav')?.classList.remove('nav-768-on')
  }
}
