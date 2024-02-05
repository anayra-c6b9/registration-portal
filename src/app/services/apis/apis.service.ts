import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserDetails } from 'src/interfaces';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor( private _http: HttpClient) { }

  registerUser = async (user_details : UserDetails): Promise<string> => {
    const {user_email, user_password} = user_details
    const userRegisterData$ = this._http.post<string>(environment.API_POST_REGISTER_USER, {
      email: user_email,
      password: user_password
    })
    return await lastValueFrom<string>(userRegisterData$)
  }

  validateUser = async (user_details : UserDetails): Promise<string> => {
    const {user_email, user_password} = user_details
    const userValidation$ = this._http.post<string>(environment.API_POST_CONFIRM_USER, {
      email: user_email,
      password: user_password
    })
    return await lastValueFrom<string>(userValidation$)
  }
}
