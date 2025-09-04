import mongoose from "mongoose";

const simulationSchema = new mongoose.Schema(
  {
    prompt: {
      type: String,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // ✅ adds createdAt & updatedAt
);

const Simulation = mongoose.model("Simulation", simulationSchema);

export default Simulation;
