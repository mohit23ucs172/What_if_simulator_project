const TimelineCard = ({ year, event }) => {
  return (
    <div className="p-4 border-l-4 border-indigo-500 bg-gray-50 rounded shadow-sm">
      <p className="text-sm text-gray-400">{year}</p>
      <h4 className="text-lg font-semibold">{event}</h4>
    </div>
  );
};

export default TimelineCard;
