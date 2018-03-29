import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AuthServiceProvider {

  isLoggedin: boolean;
  AuthToken;

  constructor(public http: Http) {

    this.isLoggedin = false;
    this.AuthToken = null;
  }

  storeUserCredentials(token) {

    window.localStorage.setItem('iam', token.data._id);
    this.useCredentials(token.data._id);

  }

  useCredentials(token) {
    this.isLoggedin = true;
    this.AuthToken = token;
  }

  loadUserCredentials() {
    var token = window.localStorage.getItem('iam');
    this.useCredentials(token);
  }

  destroyUserCredentials() {
    this.isLoggedin = false;
    this.AuthToken = null;
    window.localStorage.clear();
  }

  authenticate(user) {

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods',"PUT,POST,GET,DELETE");


    return new Promise(resolve => {
      this.http.get('http://shielded-journey-27948.herokuapp.com/api/user/login/'+user.username+"/"+user.password , { headers: headers }).subscribe(obj => {
        console.log(obj.status);
        if(obj.status === 200){

          this.storeUserCredentials(obj.json());
          resolve(true);
        }
        else
          resolve(false);
      });
    });
  }
  adduser(user) {
    var creds = "/" + user.name + "/" + user.password;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return new Promise(resolve => {
      this.http.post('http://localhost:3333/adduser', creds, {headers: headers}).subscribe(data => {
        if(data.json().success){
          resolve(true);
        }
        else
          resolve(false);
      });
    });
  }

  getinfo() {
    return new Promise(resolve => {
      var headers = new Headers();
      this.loadUserCredentials();
      console.log(this.AuthToken);
      headers.append('Authorization', 'Bearer ' +this.AuthToken);
      this.http.get('http://localhost:3333/getinfo', {headers: headers}).subscribe(data => {
        if(data.json().success)
          resolve(data.json());
        else
          resolve(false);
      });
    })
  }

  logout() {
    this.destroyUserCredentials();
  }
}
