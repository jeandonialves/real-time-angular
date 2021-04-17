import { Board } from '../../board/models/board.model';

export interface Project {
    id: string;
    name: string;
    description: string;
    boards: Board[];
}
