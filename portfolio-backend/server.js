import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import projectRoutes from './routes/projectRoutes.js';

const PORT = 5010;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', projectRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});