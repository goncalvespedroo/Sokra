import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./database";
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/auth", authRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Sokra API running" });
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
