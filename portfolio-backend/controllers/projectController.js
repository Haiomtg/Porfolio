import Project from '../models/projectModel.js';

const projectController = {
    getProjects: async (req, res) => {
        try {
            const results = await Project.getAll();
            res.json(results);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },
    getProjectsByID: async (req, res) => {
        const id = req.params;
        try {
            const results = await Project.getByID(id);
            res.json(results);
        } catch (err) {
            return res.status(500).json({error: err.message});
        }
    },
    createProject: async (req, res) => {
        const newProject = req.body;
        try {
            await Project.create(newProject);
            res.status(201).json({ message: 'Project created successfully' });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },
};

export default projectController;