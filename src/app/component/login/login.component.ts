import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  signupUsers: any[] = [];

  loginObj: any = {
    email: "",
    Password: "",
  };

  constructor(private httpClient: HttpClient, private route: Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem("signUpUsers");
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }
  onLogin() {
    this.httpClient
      .post("https://localhost:7265/api/account/signin", this.loginObj)
      .subscribe((res: any) => {
        console.log("res", res);
        localStorage.setItem("token", res.token);
        this.route.navigateByUrl("/dashboard");
      });
  }
}
