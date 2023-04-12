import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdService } from '../../servive/ad.service';

@Component({
  selector: 'app-list-pro',
  templateUrl: './list-pro.component.html',
  styleUrls: ['./list-pro.component.css']
})
export class ListProComponent implements OnInit {
  listPro: any
  constructor(private adminService: AdService) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct() {
    this.adminService.getPro().subscribe((data) => {
      this.listPro = data
    })
  }
  remove(id: any) {
    this.adminService.remove(id).subscribe((data) => {
      this.getProduct()
      this.removeSuccessful()
    })
  }
  removeSuccessful() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
