const express = require("express");
const mongoose = require("mongoose");
const swaggerJsDoc = require("swagger-jsdoc");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const serviceRoutes = require("./routes/serviceRoute");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
const path = require("path");
const {
  swaggerUi,
  products,
  orders,
  services,
  location,
  frontDesk,
  company,
  timeFrame,
} = require("./swagger");

const swaggerDefinitions = {
  products,
  orders,
  services,
  location,
  frontDesk,
  company,
  timeFrame
};

app.use(express.static(path.join(__dirname, "public")));

app.get("/swagger.json", async (req, res) => {
  const api = req.query.api;

  try {
    if (!swaggerDefinitions[api]) {
      throw new Error("API not found");
    }

    res.json(swaggerDefinitions[api]);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

const dbURI =
  "mongodb+srv://abineshwaran1255:r2YZosF2ZKKxCrtg@cluster0.gpxjtea.mongodb.net/swagger?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbURI, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/api-docs/:id", swaggerUi.serve, (req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/", productRoutes);
app.use("/", orderRoutes);
app.use("/", serviceRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
