import TimelineView from "./TimelineView";

const SplitScreen = ({ scenario }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 border rounded-lg bg-white shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-gray-700">Reality</h3>
        <TimelineView type="reality" />
      </div>
      <div className="p-4 border rounded-lg bg-white shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-indigo-600">What-If: {scenario}</h3>
        <TimelineView type="alternate" />
      </div>
    </div>
  );
};

export default SplitScreen;
