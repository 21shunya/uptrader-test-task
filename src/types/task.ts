export enum PriorityEnum {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
}

export interface Comment {
    text: string;
    comments?: Comment[];
}

export interface Task {
    id: number;
    title: string;
    priority: PriorityEnum;
    description: string;
    dateStart: string;
    inWork: string;
    dateEnd: string;
    subTasks: string[];
    comments: Comment[];
    files: string[];
}