import { Injectable } from '@angular/core';
import { ApisService } from '../apis/apis.service';
import { UserDetails } from 'src/interfaces';
import { Router } from '@angular/router';

@Injectable()
export class HandlersService {

  constructor(private apiService: ApisService, private router: Router) { }

  signUpUser = (user_data: UserDetails) => {
    this.apiService.registerUser(user_data).then((res: any)=>{
      console.log("user registered")
      this.router.navigate(["/auth/login"])
    })
  }

  loginUser = (user_data: UserDetails) => {
    this.apiService.validateUser(user_data).then((res: any) => {
      console.log(res)
      this.router.navigate(["/home"])
    })
    .catch((err: any) => {
      console.log(err)
    })
  }
}
