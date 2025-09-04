import { useParams } from "react-router-dom";

function ShareTimeline() {
  const { id } = useParams();

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-cyan-400">
        Shared Timeline ID: {id}
      </h2>
      <p className="text-gray-300 mt-2">Here your friend’s alternate future will appear.</p>
    </div>
  );
}

export default ShareTimeline;
