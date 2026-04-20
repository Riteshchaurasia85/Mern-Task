const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoute = require("./router/userRoute");
const productRoute = require("./router/productRoute");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log("Database connected successfully");
}).catch(err => {
    console.error("Database connection error:", err);
});




app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
