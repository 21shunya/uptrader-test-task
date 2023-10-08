import { RouteProps } from 'react-router-dom';
import ProjectsPage from '../pages/projectsPage/ProjectsPage';
import TasksPage from '../pages/tasksPage/TasksPage';

export const routes: RouteProps[] = [
    { path: '/', element: <ProjectsPage /> },
    { path: '/:id', element: <TasksPage /> },
]