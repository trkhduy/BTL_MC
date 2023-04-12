import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuanlyService } from 'src/app/quanly.service';
import Swal from 'sweetalert2';
import { AdService } from '../../servive/ad.service';
@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {

  category1: any
  category2: any
  category3: any
  img: string = '';
  img2: string = '';
  img3: string = '';
  _id: any;

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

  constructor(private adService: AdService, private router: Router, private routers: ActivatedRoute, private quanly: QuanlyService) {
    this.adService.getCategory1().subscribe((data) => {
      this.category1 = data
    })
    this.adService.getCategory2().subscribe((data) => {
      this.category2 = data
    })
    this.adService.getCategory3().subscribe((data) => {
      this.category3 = data
    })

    this.f.img.errors = false
    this.f.img2.errors = false
    this.f.img3.errors = false
  }

  ngOnInit(): void {
    this._id = this.routers.snapshot.params['id']
    console.log(this._id)
    this.quanly.getDetail(this._id).subscribe((data) => {
      this.formData.patchValue(data)

      this.img = this.formData.value.img // thêm data vào image1
      this.img2 = this.formData.value.img2
      this.img3 = this.formData.value.img3
    })
    // console.log(this._id);

  }

  changeImage1(event: any) {
    const reader = new FileReader();
    const file = event.target.files;
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      this.img = reader.result as string;
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
      this.adService.editProduct(this._id, this.formData.value).subscribe((data) => {
        if (data) {
          this.editSuccessful();
          this.router.navigate(['/admin/list-pro'])
        }
        console.log(data);
      })
    }

  }
  editSuccessful() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
  get f(): any {
    return this.formData.controls;
  }

}

