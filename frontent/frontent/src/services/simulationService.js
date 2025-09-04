// src/services/simulationService.js
// services/simulationService.js
import axios from "axios";

export const runSimulation = async (prompt) => {
  const res = await axios.post("/api/simulations", { prompt });
  return res.data.result; // ✅ always return result only
};

export const fetchSimulations = async () => {
  const res = await axios.get("/api/simulations");
  return res.data;
};

export const deleteSimulation = async (id) => {
  await axios.delete(`/api/simulations/${id}`);
};

export const clearSimulations = async () => {
  await axios.delete(`/api/simulations`);
};
