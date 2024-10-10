import express from 'express';
import projectController from '../controllers/projectController.js';

const router = express.Router();

router.get('/projects/getAll', projectController.getProjects);
router.post('/projects/post', projectController.createProject);
router.get('/projects/?id', projectController.getProjectsByID);

export default router;