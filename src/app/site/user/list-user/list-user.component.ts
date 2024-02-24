import { Component } from '@angular/core';
import { ListUserService } from './list-user.service';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {

  constructor(private service:ListUserService){

  }

  ngOnInit(): void {
    this.service.getUser("João");
  }

}
