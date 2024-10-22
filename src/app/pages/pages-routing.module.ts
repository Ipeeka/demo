import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Adjust the path if necessary
import { DestinationsComponent } from './destinations/destinations.component'; // Adjust the path if necessary
import { ServicesComponent } from './services/services.component'; // Adjust the path if necessary
import { BlogsComponent } from './blogs/blogs.component'; // Adjust the path if necessary
import { RatingsComponent } from './ratings/ratings.component'; // Adjust the path if necessary
import { BooknowComponent } from './booknow/booknow.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'destinations', component: DestinationsComponent },
  // { path: 'services', component: ServicesComponent },
  // { path: 'blogs', component: BlogsComponent },
  // { path: 'ratings', component: RatingsComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },// Default route
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
