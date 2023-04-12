import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  addclass() {
    document.getElementById('1')?.classList.add('active')
  }
  removeclass() {
    document.getElementById('1')?.classList.remove('active')
  }
  logout(){
    localStorage.removeItem('adminLogin')
    this.router.navigate([''])
  }
}
