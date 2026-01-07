import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.html',
  styleUrls:[ './project-modal.css'],
})
export class ProjectModal {
   project!: Project;

  constructor(public bsModalRef: BsModalRef){


  }
}
