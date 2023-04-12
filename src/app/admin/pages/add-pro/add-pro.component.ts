import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuanlyService } from 'src/app/quanly.service';
import { AdService } from '../../servive/ad.service';

@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent implements OnInit {
  category1: any
  category2: any
  category3: any
  img: string = '';
  img2: string = '';
  img3: string = '';

  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    img: new FormControl(''),
    img2: new FormControl(''),
    img3: new FormControl(''),
    id_category: new FormControl('', [Validators.required]),
    id_gender: new FormControl('', [Validators.required]),
    id_player: new FormControl(''),
  })

  constructor(private quanly: QuanlyService, private router: Router, private adService: AdService) { 
    this.f.img.errors = false
    this.f.img2.errors = false
    this.f.img3.errors = false
  }

  ngOnInit(): void {
    this.adService.getCategory1().subscribe((data) => {
      this.category1 = data
    })
    this.adService.getCategory2().subscribe((data) => {
      this.category2 = data
    })
    this.adService.getCategory3().subscribe((data) => {
      this.category3 = data
    })
  }

  changeImage1(event: any) {
    const reader = new FileReader();  // định nghĩa reader để đọc
    const file = event.target.files;
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      this.img = reader.result as string;
      // console.log(reader.result);

    }
  }

  changeImage2(event: any) {
    const reader = new FileReader();  // định nghĩa reader để đọc
    const file = event.target.files;
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      this.img2 = reader.result as string;
    }
  }
  changeImage3(event: any) {
    const reader = new FileReader();  // định nghĩa reader để đọc
    const file = event.target.files;
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      this.img3 = reader.result as string;
    }
  }

  onSubmit() {
    this.formData.patchValue({   // đẩy dữ liệu ảnh vào trong formData
      img: this.img,   // gán giá trị của img trong formData bằng giá trị img bên ngoài form
      img2: this.img2,
      img3: this.img3
    });
    console.log(this.formData.value);

    if (this.img === '') {
      this.f.img.errors = true;
    }
    if (this.img2 === '') {
      this.f.img2.errors = true;
    }
    if (this.img3 === '') {
      this.f.img3.errors = true;
    }

    if (this.formData.valid) {
      this.adService.addProduct(this.formData.value).subscribe((data) => {
        if (data) {
          alert('thêm sản phẩm thành công');
          this.router.navigate(['/admin'])
        }
      })
    }

  }

  get f(): any {
    return this.formData.controls;
  }
}
