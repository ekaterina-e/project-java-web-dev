// In this file, we create a basic Express server.

import express from "express";
import cors from "cors"; // allows scripts that are run in the browser to interact with various resources.
import dictionaryRouter from "./routes/urbanDictionary.js";

// This line of code sets the port.
const PORT = process.env.PORT || 5000;

// In this part, we initialize express and enable cors.
const app = express();
app.use(cors());

// Routes
app.use("/api", dictionaryRouter);

// Here, app listens to PORT, and we have a callback. 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
