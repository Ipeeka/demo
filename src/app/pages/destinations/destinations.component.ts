import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-destinations',
    templateUrl: './destinations.component.html',
    styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent {
    destinations = [
        {
            name: 'Bali, Indonesia',
            image: 'assets/images/bali.jpg', // Use assets folder for images
            description: 'Experience the beauty of Bali\'s beaches, vibrant culture, and lush landscapes.'
        },
        {
            name: 'Paris, France',
            image: 'assets/images/paris.jpg',
            description: 'Visit the City of Light and explore iconic landmarks, exquisite cuisine, and rich history.'
        },
        {
            name: 'Tokyo, Japan',
            image: 'assets/images/tokyo.jpg',
            description: 'Dive into the bustling streets of Tokyo, where tradition meets modernity in a spectacular way.'
        },
        {
            name: 'Cape Town, South Africa',
            image: 'assets/images/cape-town.jpg',
            description: 'Discover stunning landscapes, wildlife, and a vibrant cultural scene in Cape Town.'
        },
        {
            name: 'Rome, Italy',
            image: 'assets/images/rome.jpg',
            description: 'Step back in time in Rome, a city filled with ancient history, art, and mouth-watering cuisine.'
        }
    ];

    constructor(private router: Router) {}

    navigateToContact() {
        this.router.navigate(['/contact']); // Adjust route as necessary
    }
}
