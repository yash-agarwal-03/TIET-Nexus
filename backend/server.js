import express from "express";
import cors from "cors";
import connectToDB from "./configs/db-config.js";
import dotenv from "dotenv";
import routes from "./routes/index.routes.js";
import { errorHandler } from "./middleware/error-handler.js";
dotenv.config();

const app = express();
const PORT= process.env.PORT;
//DB CONNECTION FUNCTION CALLED
connectToDB();
console.log("JWT_SECRET loaded:", !!process.env.JWT_SECRET);


//Custom headers maybe

//Middleware
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/',routes);

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});