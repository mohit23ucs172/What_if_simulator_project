import express from "express";
import cors from "cors";
import simulationRoutes from "./routes/simulationRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

// ✅ Allow frontend only
const allowedOrigins = [process.env.CLIENT_URL || "http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());

// ✅ Routes
app.use("/api/simulations", simulationRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("🚀 What-If Backend API is running");
});

// ✅ Error Middleware
app.use(errorHandler);

export default app;

