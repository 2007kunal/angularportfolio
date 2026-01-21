import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../services/projects';
import { Project } from '../_models/project';
import { ProjectCard } from '../project-card/project-card';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './portfolio.html'
})
export class Portfolio {
  projects: Project[] = [];
  categories: { name: string; description: string }[] = [
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
   selectedCategory: string = 'All';
   constructor(private projectsService: ProjectsService) {}
   ngOnInit() {
    this.projects = this.projectsService.GetProject();
  }
  getFilteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }
}