import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router){

  }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    console.log(this.loginForm.value)
    this.http.post('https://localhost:7265/api/account/signin', this.loginForm.value).subscribe((data: any) => {
      console.log(data);
      console.log('res',data)
      localStorage.setItem('token',data.token);
       this.route.navigateByUrl('/dashboard');
    })
  }
}
