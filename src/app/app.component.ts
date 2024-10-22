import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./frontview/header/header.component";
import { SidebarComponent } from "./frontview/sidebar/sidebar.component";
import { MainContentComponent } from "./frontview/main-content/main-content.component";
import { RatingsComponent } from './pages/ratings/ratings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, HeaderComponent, SidebarComponent,  MainContentComponent,RatingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  
}
