import express from "express";
import "./config/mongoose.js";
import cors from "./middleware/cors.js";
import usersRouter from "./routes/users.js";


const app = express();
const PORT = 3000;

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRouter);


app.listen(PORT, () => console.log("Server running on port " + PORT));