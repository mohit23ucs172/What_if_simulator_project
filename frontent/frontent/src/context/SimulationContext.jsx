import { createContext, useState, useContext } from "react";

const SimulationContext = createContext();

export const SimulationProvider = ({ children }) => {
  const [scenario, setScenario] = useState("");
  const [timeline, setTimeline] = useState([]);

  return (
    <SimulationContext.Provider value={{ scenario, setScenario, timeline, setTimeline }}>
      {children}
    </SimulationContext.Provider>
  );
};

export const useSimulation = () => useContext(SimulationContext);
