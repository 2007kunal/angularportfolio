import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    description: string;
    pictures: string[];
    projectLink: string;
    category: string;
    link?: string;
    tags: Tag[];
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        name: 'Angular Portfolio',
        description: 'Personal portfolio built with Angular',
        pictures: ['assets/images/portfolio.png'],
        projectLink: 'https://2007kunal.github.io/angularportfolio/',
        category: 'Angular',
        tags:[]
    },
    {
        id: 2,
        name: 'Web Project',
        description: 'Responsive website using HTML, CSS',
        pictures: ['assets/images/web.png'],
        projectLink: 'https://github.com/webproject',
        category: 'Web',
        tags: []
    },
    {
        id: 3,
        name: 'JavaScriptApp',
        description: 'Vanilla JavaScript application',
        pictures: ['assets/images/javascriptapp.png'],
        projectLink: 'https://github.com/javascriptapp',
        category: 'JavaScript',
        tags: []
    }
];