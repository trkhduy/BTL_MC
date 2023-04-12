import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),

  }
  )
  constructor(private accService: AccountService, private route: Router) { }

  ngOnInit(): void {

  }
  get f(): any {
    return this.formLogin.controls
  }
  onSubmit() {

    this.checkAcc(this.formLogin.value)


  }
  checkAcc(data: any): void {
    this.accService.getAcc().subscribe((datas) => {
      var check = datas.find((item: any) => item.email == data.email && item.password == data.password && item.role === "admin")
      if (check) {
        localStorage.setItem('adminLogin', JSON.stringify(check))
        this.route.navigate(['/admin'])
      }
    })

  }
}
