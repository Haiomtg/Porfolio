import db from '../database/db.js';

const Project = {
    getAll: async () => {
        try {
            const [results] = await db.query('SELECT * FROM projects');
            return results;
        } catch (err) {
            throw new Error('Database error: ' + err.message);
        }
    },
    getByID: async (id) => {
        try {
            const [result] = await db.query('SELECT * FROM projects WHERE id = ?', [id]);
            return result;
        } catch (err) {
            throw new Error('Database error: ' + err.message);
        }
    },
    create: async (project) => {
        try {
            const [result] = await db.query('INSERT INTO projects SET ?', project);
            return result;
        } catch (err) {
            throw new Error('Failed to create project: ' + err.message);
        }
    },
};

export default Project;