import { Request, Response } from 'express';
import Task, { ITask, TaskStatus } from '../models/task.schema';

export const createTask = async (req: Request, res: Response) => {
    try {
        const task: ITask = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getTasksByProject = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find({ projectId: req.params.projectId }).sort({ createdAt: -1 });
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const updateTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};