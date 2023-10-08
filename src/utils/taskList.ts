import { PriorityEnum, StatusEnum, Task } from '../types/task';

export const taskList: Task[] = [
    {
        id: 1,
        title: 'Title 1',
        priority: PriorityEnum.HIGH,
        status: StatusEnum.QUEUE,
        dateStart: '12.12.2023',
        dateEnd: '',
        inWork: '1 week',
        subTasks: [],
        description: 'It`s a very interesting task!',
        comments: [{ text: 'first' }],
        files: []
    },
    {
        id: 2,
        title: 'Title 2',
        priority: PriorityEnum.LOW,
        status: StatusEnum.QUEUE,
        dateStart: '11.12.2023',
        dateEnd: '',
        inWork: '2 week',
        subTasks: ['sub task'],
        description: 'It`s a very interesting task!',
        comments: [{ text: 'first' }],
        files: ['']
    }
]