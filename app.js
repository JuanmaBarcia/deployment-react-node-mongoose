const express = require("express");
require("dotenv").config();
var cors = require("cors");

const routerApi = require("./routes/products");
require("./utils/db"); // Lanza la BBDD mongoose

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Para habilitar recepcion de JSONs
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//API
//http://localhost:3000/api/products
//http://localhost:3000/api/products?id=2
app.use("/api", routerApi); // rutas para API

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = server;
