// src/controllers/simulationController.js
import Simulation from "../models/Simulation.js";

// ✅ POST /api/simulations
export const createSimulation = async (req, res) => {
  try {
    const { prompt } = req.body;

    // For now: just echo prompt + placeholder result
    const result = `Result for: ${prompt}`;

    const simulation = await Simulation.create({ prompt, result });
    res.status(201).json(simulation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ GET /api/simulations  (fetch all)
export const getSimulations = async (req, res) => {
  try {
    const simulations = await Simulation.find().sort({ createdAt: -1 });
    res.json(simulations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ GET /api/simulations/:id  (fetch one by id)
export const getSimulation = async (req, res) => {
  try {
    const simulation = await Simulation.findById(req.params.id);
    if (!simulation) {
      return res.status(404).json({ message: "Simulation not found" });
    }
    res.json(simulation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ DELETE /api/simulations/:id  (delete one)
export const deleteSimulation = async (req, res) => {
  try {
    const deleted = await Simulation.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Simulation not found" });
    }
    res.json({ message: "Simulation deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ DELETE /api/simulations  (clear all)
export const clearSimulations = async (req, res) => {
  try {
    await Simulation.deleteMany({});
    res.json({ message: "All simulations cleared" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
