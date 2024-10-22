import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component'; // Adjust path if needed
import { AuthRoutingModule } from './auth-routing.module'; // Ensure this is imported
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule,LoginComponent,SignUpComponent,ForgotPasswordComponent,RouterLink], // Include the routing module
})
export class AuthModule {}
