import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

interface Review {
  username: string;
  rating: number;
  text: string;
  date: string;
}

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],
})
export class RatingsComponent {
  averageRating = 4.5;
  totalReviews = 1250;
  reviews: Review[] = [
    {
      username: 'Alice',
      rating: 5,
      text: 'Amazing experience! Will definitely book again.',
      date: '2024-10-01',
    },
    {
      username: 'Bob',
      rating: 4,
      text: 'Great trip, but the hotel could be better.',
      date: '2024-09-15',
    },
  ];

  newReview: Review = { username: '', rating: 0, text: '', date: '' };

  submitReview() {
    this.newReview.date = new Date().toISOString().split('T')[0];
    this.reviews.push({ ...this.newReview });
    this.newReview = { username: '', rating: 0, text: '', date: '' }; // Reset form
  }
}
