// server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const PORT = 5010;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/",(req, res) => {
    res.send("Hello World")
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});