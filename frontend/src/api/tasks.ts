import axios from 'axios';
import { TaskInterface, TaskStatus } from '../types';

const API_URL = 'http://localhost:4000/api/tasks';

export const fetchTasks = async (projectId: string): Promise<TaskInterface[]> => {
  const response = await axios.get(`${API_URL}/${projectId}`);
  return response.data;
};

export const createTask = async (projectId: string, task: { title: string; status?: TaskStatus }): Promise<TaskInterface> => {
  const response = await axios.post(`${API_URL}/${projectId}`, task);
  return response.data;
};

export const updateTaskStatus = async (taskId: string, status: TaskStatus): Promise<TaskInterface> => {
  const response = await axios.put(`${API_URL}/${taskId}/status`, { status });
  return response.data;
};

export const deleteTask = async (taskId: string): Promise<void> => {
  await axios.delete(`${API_URL}/${taskId}`);
};