import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.css']
})
export class ProjectCard {
  @Input() project!: Project;

  currentImageIndex = 0;

  nextImage() {
    if (!this.project?.pictures?.length) return;

    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.project.pictures.length;
  }

  prevImage() {
    if (!this.project?.pictures?.length) return;

    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.project.pictures.length) %
      this.project.pictures.length;
  }
}