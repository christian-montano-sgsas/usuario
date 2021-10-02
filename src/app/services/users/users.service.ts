import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { 

  }

  obtenerUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  obtenerUsuarioEspecifico(id){
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }

  obtenerPublicaciones(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
  }
}
