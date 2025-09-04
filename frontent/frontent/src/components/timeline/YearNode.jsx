function YearNode({ year, active = false }) {
  return (
    <div
      className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
        active
          ? "bg-cyan-500 border-cyan-400 text-white"
          : "bg-gray-700 border-gray-600 text-gray-300"
      }`}
    >
      {year}
    </div>
  );
}

export default YearNode;
