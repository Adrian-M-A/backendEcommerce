const express = require("express");
require("./config/mongoose.js");
const cors = require("./middleware/cors.js");
const usersRouter = require("./routes/users.js");
const typesRouter = require ("./routes/types.js");
const allergensRouter = require("./routes/allergens.js");
const productsRouter = require("./routes/products.js");
const orderRouter = require("./routes/orders.js");


const app = express();
const PORT = 3001;

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/users", usersRouter);
app.use("/types", typesRouter);
app.use("/allergens", allergensRouter);
app.use("/products", productsRouter);
app.use("/orders", orderRouter);



app.listen(PORT, () => console.log("Server running on port " + PORT));