import Express from "express";
import routes from "./routes/index.js";

const app = Express();

app.use(Express.json())
//routerPrefix 

app.use('/api/v1',routes);

export default app;