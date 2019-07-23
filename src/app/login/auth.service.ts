// // import { Router } from '@angular/router';
// // import * as firebase from 'firebase';
// // import { Injectable } from '@angular/core';

// // @Injectable()
// // export class AuthService {
// //   token: string;

// //   constructor(private router: Router) { }

// //   signupUser(email: string, password: string) {
// //     firebase.auth().createUserWithEmailAndPassword(email, password)
// //       .catch(
// //         error => console.log(error)
// //       )
// //   }

// //   signinUser(email: string, password: string) {
// //     firebase.auth().signInWithEmailAndPassword(email, password)
// //       .then(
// //         response => {
// //           this.router.navigate(['/']);
// //           firebase.auth().currentUser.getToken()
// //             .then(
// //               (token: string) => this.token = token
// //             )
// //         }
// //       )
// //       .catch(
// //         error => console.log(error)
// //       );
// //   }

// //   logout() {
// //     firebase.auth().signOut();
// //     this.token = null;
// //   }

// //   getToken() {
// //     firebase.auth().currentUser.getToken()
// //       .then(
// //         (token: string) => this.token = token
// //       );
// //     return this.token;
// //   }

// //   isAuthenticated() {
// //     return this.token != null;
// //   }
// // }
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';

// import { User } from './user';

// const USERS = [
//   new User(1, 'mahesh', 'm123', 'ADMIN'),
//   new User(2, 'krishna', 'k123', 'USER')
// ];
// let usersObservable = Observable.of(USERS);

// @Injectable()
// export class AuthService {
//   private redirectUrl: string = '/';
//   private loginUrl: string = '/login';
//   private isloggedIn: boolean = false;
//   private loggedInUser: User;
//   getAllUsers(): Observable<User[]> {
//     return usersObservable;
//   }
//   isUserAuthenticated(username: string, password: string): Observable<boolean> {
//     return this.getAllUsers()
//       .map(users => {
//         let user = users.find(user => (user.username === username) && (user.password === password));
//         if (user) {
//           this.isloggedIn = true;
//           this.loggedInUser = user;
//         } else {
//           this.isloggedIn = false;
//         }
//         return this.isloggedIn;
//       });
//   }
//   isUserLoggedIn(): boolean {
//     return this.isloggedIn;
//   }
//   getRedirectUrl(): string {
//     return this.redirectUrl;
//   }
//   setRedirectUrl(url: string): void {
//     this.redirectUrl = url;
//   }
//   getLoginUrl(): string {
//     return this.loginUrl;
//   }
//   getLoggedInUser(): User {
//     return this.loggedInUser;
//   }
//   logoutUser(): void {
//     this.isloggedIn = false;
//   }
// }
import { Injectable } from '@angular/core';
import { ILogin } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  }
}