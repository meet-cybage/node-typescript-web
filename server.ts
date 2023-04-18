import app from "./main/app"

// Take a port 3000 for running server.
const port: number = 3000;

app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
