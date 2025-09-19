import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// contoh route
app.get("/", (req, res) => {
  res.send("Hello from BeeSpace");
});

// import routes
import exampleRoute from "./routes/example";

app.use("/api/example", exampleRoute);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
