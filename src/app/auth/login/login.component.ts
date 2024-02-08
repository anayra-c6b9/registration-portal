import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandlersService } from 'src/app/services/handlers/handlers.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HandlersService]
})
export class LoginComponent {
  loginControlGroup = new FormGroup({
    user_email: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
      Validators.email,
    ]),
    user_password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    ])
  })

  constructor(private apiHandler: HandlersService) {}

  login = () => {
    // this.apiHandler.loginUser({
    //   user_email: this.user_email.value || "",
    //   user_password: this.user_password.value || ""
    // })

    console.log(this.loginControlGroup.value)
  }

  ngOnDestroy() {
    this.loginControlGroup.reset()
  }

}
