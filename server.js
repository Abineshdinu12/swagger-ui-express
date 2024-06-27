const express = require("express");
const mongoose = require("mongoose");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const productRoutes = require("./routes/productRoutes");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Product API",
      version: "1.0.0",
      description: "API documentation for Product Management",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// MongoDB connection
const dbURI =
"mongodb+srv://abineshwaran1255:r2YZosF2ZKKxCrtg@cluster0.gpxjtea.mongodb.net/swagger?retryWrites=true&w=majority&appName=Cluster0"
mongoose
  .connect(dbURI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Middleware setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api", productRoutes);
app.use(bodyParser.json());
app.use(cors());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
