import { Request, Response } from 'express';
import Project, { IProject } from '../models/project.schema';

export const createProject = async (req: Request, res: Response) => {
    try {
        const project: IProject = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getProjects = async (_req: Request, res: Response) => {
    try {
        const projects = await Project.find({},'_id title description createdAt').sort({ createdAt: -1 }).lean();
        res.json(projects);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getProject = async (req: Request, res: Response) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const updateProject = async (req: Request, res: Response) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const deleteProject = async (req: Request, res: Response) => {
    try {
        console.log('req params', req.params)
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};