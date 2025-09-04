const ScenarioCard = ({ title }) => {
  return (
    <div className="p-6 border rounded-2xl shadow-sm bg-white hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">
        Explore alternate paths and see how life could have been different.
      </p>
    </div>
  );
};

export default ScenarioCard;
