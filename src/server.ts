import express from 'express';

const app = express();

const defaultPort = 4000; 
const port = Number(process.env.PORT) || defaultPort;

app.listen(port, () => console.log(`Server running on port ${port}`));
