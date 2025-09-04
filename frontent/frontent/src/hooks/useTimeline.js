import { useSimulation } from "../context/SimulationContext";

export default function useTimeline() {
  const { timeline, setTimeline } = useSimulation();

  const addEvent = (year, description, type = "real") => {
    setTimeline((prev) => [...prev, { year, description, type }]);
  };

  const clearTimeline = () => setTimeline([]);

  return { timeline, addEvent, clearTimeline };
}
