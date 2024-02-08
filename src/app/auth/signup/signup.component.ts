import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandlersService } from 'src/app/services/handlers/handlers.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [HandlersService]
})
export class SignupComponent {
  signupControlGroup = new FormGroup({
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

  signup = () => {
    // this.apiHandler.signUpUser({
    //   user_email: this.user_email.value || "",
    //   user_password: this.user_password.value || ""
    // })
    console.log(this.signupControlGroup.getRawValue())
    console.log(this.signupControlGroup.valid)
    this.signupControlGroup.reset()
  }

  ngOnDestroy() {
    this.signupControlGroup.reset()
  }
}
