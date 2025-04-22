"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.getProject = exports.getProjects = exports.createProject = void 0;
const project_schema_1 = __importDefault(require("../models/project.schema"));
const createProject = async (req, res) => {
    try {
        const project = new project_schema_1.default(req.body);
        await project.save();
        res.status(201).json(project);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.createProject = createProject;
const getProjects = async (_req, res) => {
    try {
        const projects = await project_schema_1.default.find({}, '_id title description createdAt').sort({ createdAt: -1 }).lean();
        res.json(projects);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.getProjects = getProjects;
const getProject = async (req, res) => {
    try {
        const project = await project_schema_1.default.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(project);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.getProject = getProject;
const updateProject = async (req, res) => {
    try {
        const project = await project_schema_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(project);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.updateProject = updateProject;
const deleteProject = async (req, res) => {
    try {
        const project = await project_schema_1.default.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json({ message: 'Project deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteProject = deleteProject;
