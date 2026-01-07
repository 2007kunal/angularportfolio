import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
   private projects: Project[]= [
    {
      id: 0, name: "Sample Python Project",
       pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], 
       projectLink: "//www.github.com",
         description: "Python project that analyzes stock market data.",
           tags: [Tag.Python] 
          }, 
           { 

       id: 1,

       name: "Sample Angular App",

       pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"],

       projectLink: "//www.github.com",

       description: "Fullstack web app developed using Angular and Node.JS",

       tags: [Tag.Angular,Tag.TypeScript,Tag.NodeJS],

      },

    { 

       id: 2,

       name: "Sample .Net App",

       pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"],

       projectLink: "//www.github.com",

       description: "Frontend web app developed using React and ASP.NET",

       tags: [Tag.REACT,Tag.CSharp,Tag.ASPNET]},

    {

    id: 3,

    name: "Web API Project",

    pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"],

    projectLink: "//www.github.com",

    description: "Web API Project that was developed for a class project.",

    tags: [Tag.CSharp, Tag.ASPNET]

  },

  {

    id: 4,

    name: "Chrome Extension",

    pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"],

    projectLink: "//www.github.com",

    description: "Chrome Extension that tracks the price of furniture.",

    tags: [Tag.JavaScript]

  },

  {

    id: 5,

    name: "Mobile App",

    pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"],

    projectLink: "//www.github.com",

    description: "Mobile App that was developed for a class project.",

    tags: [Tag.Java]

}

];
constructor() {}
GetProject(): Project[] {
  return this.projects;
}
 GetProjectById(id: number) : Project{
  let project = this.projects.find(project => project.id === id);

  if(project === undefined ){
    throw new TypeError('There is no project that matches the id:'+ id);
  }
  return project;
 }
}
