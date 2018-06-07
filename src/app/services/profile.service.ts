import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../user'
import {Repos} from '../repos'
import {environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private apiUrl: string = environment.apiUrl;

  private clientid = '2ddb51df13183ba55b6d';
  private clientsecret= '2462f0401923eb74b1d737bfbbcd24ea8454430f';

  constructor(private http:HttpClient) {
    console.log("Service is now ready!");
    this.username= 'Michael-mbogo';
  }

    getUser() {
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + this.apiUrl "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)

    }

    getRepo() {
     return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + this.apiUrl "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)

    }

   updateUser(username:string){
     this.username = username;
    }


}
