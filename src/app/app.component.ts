import {Component} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Filter, UserResponse} from './api.model';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users$: Observable<HttpResponse<UserResponse[]>>;

  constructor(private apiService: ApiService) {
    this.getUsers();
  }

  public getUsers(data?: Filter): void {
    this.users$ = this.apiService.getUsers(data);
  }
}
