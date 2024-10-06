import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, HttpClientModule , FormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'chandrakanth_mane_project';
  isSidebarCollapsed = true;
  icon: string = 'fa-solid fa-bars';
 
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.icon = !this.isSidebarCollapsed ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  }

  hideSidebarOnMobile() {
    if (window.innerWidth <= 768) {
      this.isSidebarCollapsed = true;
      this.icon = 'fa-solid fa-bars';
    }
  }

  // Optional: To adjust sidebar visibility on screen resize
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 768) {
      this.isSidebarCollapsed = false; // Show sidebar on larger screens
    }else{
      this.isSidebarCollapsed = true;
    }
  }
  
}
