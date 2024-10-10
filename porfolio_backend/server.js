// backend/server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample project data
const projects = [
    {
        id: 1,
        title: 'Project One',
        description: 'Description of project one.',
        link: 'https://example.com/project-one',
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'Description of project two.',
        link: 'https://example.com/project-two',
    },
];

// Endpoint to get projects
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// Endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Here you would typically handle the form submission, e.g., send an email
    console.log(`Contact form submitted: ${name}, ${email}, ${message}`);
    res.status(200).json({ message: 'Message received!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});