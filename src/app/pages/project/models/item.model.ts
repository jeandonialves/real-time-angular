export interface Item {
    id: string;
    name: string;
    description: string;
    status: Status
}

enum Status {
    'TODO',
    'DOING',
    'DONE'
}