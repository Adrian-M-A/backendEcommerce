import express from "express";
import "./config/mongoose.js";
import cors from "./middleware/cors.js";
import usersRouter from "./routes/users.js";
import typesRouter from "./routes/types.js";
import allergensRouter from "./routes/allergens.js";
import productsRouter from "./routes/products.js";
import orderRouter from "./routes/orders.js";


const app = express();
const PORT = 3000;

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRouter);
app.use("/types", typesRouter);
app.use("/allergens", allergensRouter);
app.use("/products", productsRouter);
app.use("/orders", orderRouter);



app.listen(PORT, () => console.log("Server running on port " + PORT));