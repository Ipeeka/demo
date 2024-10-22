import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, FormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  message: string = ''; 

onSubmit() {
    if (this.password === this.confirmPassword) {
      if (this.isValidPassword(this.password)) {
        const userData = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        localStorage.setItem(this.email, JSON.stringify(userData));
        console.log('Sign-up successful:', userData);
        this.message = 'Registration successful!';
        // Optionally, redirect to login or home page
      } else {
        this.message = 'Password must contain at least one letter, one number, and one special character.';
      }
    } else {
      this.message = 'Passwords do not match.';
    }
  }

  isValidPassword(password: string): boolean {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  }
}
