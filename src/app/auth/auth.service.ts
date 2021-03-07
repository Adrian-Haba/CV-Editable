import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router ) {}

  async login(email: string, password: string){
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
  }

  async register(email: string, password: string){
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
  }
  async logout(): Promise<void> {
      await this.afAuth.signOut();
      this.router.navigate(['/login']);
    }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
