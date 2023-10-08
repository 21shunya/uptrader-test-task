export enum PriorityEnum {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
}

export enum StatusEnum {
    QUEUE = 'Queue',
    DEVELOPMENT = 'Development',
    DONE = 'Done',
}

export interface Comment {
    text: string;
    comments?: Comment[];
}

export interface Task {
    id: number;
    title: string;
    priority: PriorityEnum;
    status: StatusEnum;
    description: string;
    dateStart: string;
    inWork: string;
    dateEnd: string;
    subTasks: string[];
    comments: Comment[];
    files: string[];
}