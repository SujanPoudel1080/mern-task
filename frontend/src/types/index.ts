export interface ProjectInterface {
    _id: string;
    title: string;
    description?: string;
  }
  
  export interface TaskInterface {
    _id: string;
    title: string;
    status: 'todo' | 'in-progress' | 'done';
    projectId: string;
  }
  
  export type TaskStatus = 'todo' | 'in-progress' | 'done';