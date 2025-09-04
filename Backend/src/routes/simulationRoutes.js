import express from "express";
import {
  createSimulation,
  getSimulation,
  getSimulations,
  deleteSimulation,   // ✅ delete single
  clearSimulations,   // ✅ delete all
} from "../controllers/simulationController.js";

const router = express.Router();

// Create + Read
router.post("/", createSimulation);      // POST /api/simulations
router.get("/", getSimulations);         // GET /api/simulations
router.get("/:id", getSimulation);       // GET /api/simulations/:id

// Delete
router.delete("/:id", deleteSimulation); // DELETE /api/simulations/:id
router.delete("/", clearSimulations);    // DELETE /api/simulations

export default router;

