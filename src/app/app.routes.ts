import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BookNowComponent,  } from './pages/booknow/booknow.component';
import { ServicesComponent } from './pages/services/services.component';
import { RatingsComponent } from './pages/ratings/ratings.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'destinations', component: DestinationsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'booknow', component: BookNowComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'ratings', component: RatingsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), // Lazy load auth module
  },
  { path: '**', redirectTo: '' }, // Catch-all for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
