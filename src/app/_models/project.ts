import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    description: string;
    pictures: string[];
    projectLink: string;
    tags: Tag[];
}