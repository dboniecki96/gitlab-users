import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Filter, UserResponse} from './api.model';

const token = 'KU1vqLxhDvG7AJZ85yW6';
const API_URL = 'https://gitlab.com/api/v4';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  filters: Filter;

  constructor(private http: HttpClient) {
  }

  public getUsers(data?: Filter): Observable<HttpResponse<UserResponse[]>> {
    this.filters = {
      ...this.filters,
      ...data
    };

    return this.http.get<UserResponse[]>(`${API_URL}/users`, {
      observe: 'response',
      params: this.filters as { [key: string]: string },
      headers: {
        'PRIVATE-TOKEN': token
      }
    });
  }
}
