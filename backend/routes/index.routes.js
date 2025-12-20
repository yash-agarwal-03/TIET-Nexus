import { Router } from "express";
import societyRouter from "./society.routes.js"
import societyCategoryRouter from "./societyCategory.routes.js"
import logger from "../utils/logger.js";
import exploreRouter from "./explorePage.routes.js";
import authRouter from "./auth.routes.js";
import auth from "../middleware/auth.js";
import feedRouter from "./feed.routes.js";
import lnfRouter from "./lnfrouter.routes.js"
const routes=new Router();


//REDIRECT TO ALL MAJOR PAGE ROUTES
routes.get('/', (req, res) => {
  logger.info(`${req.method} ${req.originalUrl} | Visited Home page | Success`);
  res.send(`
    <h2>Welcome to TIET-Nexus</h2>
    <p>Visit official site here: <a href="https://tietnexus.vercel.app/" target="_blank">https://tietnexus.vercel.app/</a></p>
  `);
});
routes.use('/api/explore',exploreRouter);
routes.use('/api/society',societyRouter);
routes.use('/api/society/categories', societyCategoryRouter);

//latest routes - fully furnished
routes.use("/api/auth", authRouter);
routes.get("/api/test-auth", auth, (req, res) => {
  res.json({ user: req.user });
});

routes.use("/api/feeds", feedRouter);
routes.use("/api/lnf",lnfRouter)
export default routes;

