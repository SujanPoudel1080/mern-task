"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTasksByProject = exports.createTask = void 0;
const task_schema_1 = __importDefault(require("../models/task.schema"));
const createTask = async (req, res) => {
    try {
        const task = new task_schema_1.default(req.body);
        await task.save();
        res.status(201).json(task);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.createTask = createTask;
const getTasksByProject = async (req, res) => {
    try {
        const tasks = await task_schema_1.default.find({ projectId: req.params.projectId }).sort({ createdAt: -1 });
        res.json(tasks);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.getTasksByProject = getTasksByProject;
const updateTask = async (req, res) => {
    try {
        const task = await task_schema_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.updateTask = updateTask;
const deleteTask = async (req, res) => {
    try {
        const task = await task_schema_1.default.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteTask = deleteTask;
