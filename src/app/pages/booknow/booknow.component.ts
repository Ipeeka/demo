import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { timer as rxjsTimer, Subscription } from 'rxjs';

@Component({
  selector: 'app-booknow',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BookNowComponent {
  bookingDetails: any = {};
  showPaymentForm = false;
  showOtpForm = false;
  paymentMethod: string = 'card';
  otp: string = '';
  timer: number = 15;
  isLoading = false;
  isPaymentSuccessful = false;
  isResendAllowed = false;
  private countdownSubscription: Subscription | null = null;

  proceedToPayment() {
    this.showPaymentForm = true;
  }

  selectPaymentMethod(method: string) {
    this.paymentMethod = method;
  }

  continuePayment() {
    this.showOtpForm = true;
    this.startTimer();
  }

  startTimer() {
    this.timer = 15; // Set timer to 15 seconds
    this.isResendAllowed = false; // Initially, the resend button is not allowed

    this.countdownSubscription = rxjsTimer(0, 1000).subscribe(val => {
      this.timer = 15 - val; // Countdown logic

      if (this.timer <= 0) {
        this.stopTimer(); // Stop the timer when it reaches zero
        this.isResendAllowed = true; // Enable the resend option
      }
    });
  }

  stopTimer() {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
      this.countdownSubscription = null;
    }
  }

  confirmPayment() {
    // You can add your OTP validation logic here if needed
    if (this.otp) { // Check if the OTP is provided
      this.stopTimer();
      this.isLoading = true;

      // Simulate a successful payment process
      setTimeout(() => {
        this.isLoading = false;
        this.isPaymentSuccessful = true; // Set success state only after confirmation
      }, 2000);
    } else {
      // alert('Please enter a valid OTP.'); // Alert for invalid OTP
    }
  }

  resendOtp() {
    this.isResendAllowed = false; // Reset resend flag
    this.startTimer(); // Restart timer
    alert('OTP has been resent to your registered mobile number/email.'); // Alert message
    this.showOtpForm = true; // Ensure the OTP form remains visible
  }
}
