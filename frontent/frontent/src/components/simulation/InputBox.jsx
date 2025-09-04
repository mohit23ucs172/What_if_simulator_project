import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputBox = () => {
  const [scenario, setScenario] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!scenario.trim()) return;
    navigate("/simulation", { state: { scenario } });
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg">
      <input
        type="text"
        placeholder="Type your what-if scenario..."
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
        className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-3 rounded-r-lg hover:bg-indigo-700 transition"
      >
        Simulate
      </button>
    </form>
  );
};

export default InputBox;
