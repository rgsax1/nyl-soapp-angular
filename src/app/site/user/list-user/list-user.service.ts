import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListUserService {

  constructor() { }

  getUser(userName:string){
    console.log(userName)

  }
}
