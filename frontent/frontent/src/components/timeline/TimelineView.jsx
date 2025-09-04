import TimelineCard from "./TimelineCard";

const TimelineView = ({ type }) => {
  const data =
    type === "reality"
      ? ["Studied at NIT", "Got first job", "Moved to new city"]
      : ["Studied abroad", "Joined a startup", "Became a founder"];

  return (
    <div className="flex flex-col space-y-4">
      {data.map((event, i) => (
        <TimelineCard key={i} year={2020 + i} event={event} />
      ))}
    </div>
  );
};

export default TimelineView;

