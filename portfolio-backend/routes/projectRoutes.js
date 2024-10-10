import express from 'express';
import projectController from '../controllers/projectController.js';

const router = express.Router();

router.get('/projects', projectController.getProjects);
router.post('/projects', projectController.createProject);
router.get('/projects/?id', projectController.getProjectsByID);

export default router;