import { Item } from './item.model';

export interface Project {
    id: string;
    name: string;
    description: string;
    items: Item[];
}
