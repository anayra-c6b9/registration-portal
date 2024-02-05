import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandlersService } from 'src/app/services/handlers/handlers.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HandlersService]
})
export class LoginComponent {
  user_details = {
    user_email: "",
    user_password: "" 
  }

  constructor(private apiHandler: HandlersService) {}

  login = () => {
    this.apiHandler.loginUser(this.user_details)
  }

  ngOnDestroy() {
    this.user_details.user_email = ""
    this.user_details.user_password = ""
  }

}
