import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formregister = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
    address: new FormControl('', [Validators.required]),
    // birthday: new FormControl('', [Validators.required,])
  })
  constructor(private AccSv: AccountService, private route: Router) { }

  ngOnInit(): void {
  }
  get f(): any {
    return this.formregister.controls
  }
  onSubmit() {
    if (this.formregister.invalid) {
      alert('Please enter valid information')
      return
    } else {
      this.AccSv.createAcc(this.formregister.value).subscribe((data) => {
        if (data) {
          this.route.navigate(['/login'])
        }
      })
    }


  }
}
