import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, UsersComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any;
  result: any;
  index: any;
  id: any = '';
  userName: any = '';
  age: any = '';
  gender: any = '';
  data: any;

  constructor(private uService: UserServiceService) {
    this.users = [];
    this.data = [];
  }
  ngOnInit() {
    this.getUserData();
    this.saveData();
  }

  getUserData() {
    this.uService.getUsers().subscribe((res: any) => {
      this.users = res;
      console.log(this.users);
    });
  }

  saveData() {
    const userData = {
      id: this.id,
      userName: this.userName,
      age: this.age,
      gender: this.gender,
    };
    this.uService.postData(userData).subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }
}
