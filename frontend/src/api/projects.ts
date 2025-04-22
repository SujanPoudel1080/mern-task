import axios from 'axios';
import { ProjectInterface } from '../types';

const API_URL = 'http://localhost:4000/api/projects';

export const fetchProjects = async (): Promise<ProjectInterface[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createProject = async (project: { title: string; description?: string }): Promise<ProjectInterface> => {
  console.log('project data is', project)
  const response = await axios.post(API_URL, project);
  return response.data;
};

export const deleteProject = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};