import express from 'express';
import { expressLogger } from './main/logging';
import { Routes } from './main/routes';
 
// Initialize the express engine
const app: express.Application = express();
app.use(express.json())
app.use(expressLogger)
 
// Take a port 3000 for running server.
const port: number = 3000;
 
// Handling '/' Request
let routes: Routes = new Routes(app);
routes.configureRoutes()

app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
