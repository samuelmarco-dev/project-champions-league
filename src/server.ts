import app from './app.js';

const defaultPort = 4000;
const port = Number(process.env.PORT) || defaultPort;

app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));
