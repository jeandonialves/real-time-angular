import { Track } from './track.model';

export interface Project {
    id: string;
    name: string;
    description: string;
    tracks: Track[];
}
