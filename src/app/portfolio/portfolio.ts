import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html'
})
export class Portfolio {
  projects = [
    {
      name: 'Portfolio Website',
      description: 'Angular standalone portfolio website'
    },
    {
      name: 'Todo App',
      description: 'Angular based todo application'
    },
    {
      name: 'Landing Page',
      description: 'Responsive landing page using Bootstrap'
    }
  ];
}