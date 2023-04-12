import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any
  formlogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  constructor(private AccSv: AccountService, private route: Router) { }

  ngOnInit(): void {
  }
  get f(): any {
    return this.formlogin.controls
  }
  onSubmit() {

    this.AccSv.login(this.formlogin.value).subscribe((data) => {
      if (data[0]) {
        console.log(data)
        localStorage.setItem('acc', JSON.stringify(data[0]))
        this.route.navigate([''])
      } else {
        this.error = 'Please give correct values. We need them to create your perfect fit.'
      }
    })


  }


}
