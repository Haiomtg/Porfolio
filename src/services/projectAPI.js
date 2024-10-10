import axios from 'axios';

const API_URL = 'http://localhost:5010/api/projects';

const projectAPI = {
    getAllProjects: async () => {
        try {
            const response = await axios.get(`${API_URL}/getAll`);
            return response.data;
        } catch (error) {
            console.error('Error fetching projects:', error);
            throw error;
        }
    },
    createProject: async (projectData) => {
        try {
            const response = await axios.post(`${API_URL}/post`, projectData);
            return response.data;
        } catch (error) {
            console.error('Error creating project:', error);
            throw error;
        }
    },
    getProjectById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/?id=${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching project by ID:', error);
            throw error;
        }
    }
};

export default projectAPI;