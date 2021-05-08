import { Task } from './task.model';

export interface Track {
    title: string;
    id: string;
    color: string;
    tasks: Task[];
}
