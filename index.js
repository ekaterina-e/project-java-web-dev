import express from "express";
import cors from "cors";
import dictionaryRouter from "./routes/urbanDictionary.js";

const PORT = process.env.PORT || 5000;

// Enable cors
const app = express();
app.use(cors());

// Routes
app.use("/api", dictionaryRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
