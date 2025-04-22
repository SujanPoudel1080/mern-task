import { Router } from 'express';
import {
  createTask,
  getTasksByProject,
  updateTask,
  deleteTask
} from '../controllers/task.controller';

const router = Router();

router.post('/', createTask);
router.get('/:projectId', getTasksByProject);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;