import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  id: string = '';
  userName: string = '';
  age: string = '';
  gender: string = '';

  private users: any = [
    {
      id: 1,
      userName: 'Ganapathi',
      age: 35,
      gender: 'Male',
    },
    {
      id: 2,
      userName: 'Kumar',
      age: 34,
      gender: 'Male',
    },
    {
      id: 3,
      userName: 'Kiran',
      age: 35,
      gender: 'Male',
    },
    {
      id: 4,
      userName: 'RamaRao',
      age: 33,
      gender: 'Male',
    },
  ];

  // userData = [{
  // id: this.id,
  // userName:this.userName,
  // age:this.age,
  // gender:this.gender,
  // }]
  // id: any;

  // this.userData= any;

  constructor() {}

  getUsers() {
    return of(this.users);
  }

  postData(userData: { id: any; userName: any; age: any; gender: any }) {
    this.users.push(userData);
    return of(userData);
  }
}
