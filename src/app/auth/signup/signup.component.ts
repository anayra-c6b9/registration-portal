import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandlersService } from 'src/app/services/handlers/handlers.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [HandlersService]
})
export class SignupComponent {
  user_details = {
    user_email: "",
    user_password: "" 
  }

  constructor(private apiHandler: HandlersService) {}

  signup = () => {
    this.apiHandler.signUpUser(this.user_details)
  }

  ngOnDestroy() {
    this.user_details.user_email = ""
    this.user_details.user_password = ""
  }
}
