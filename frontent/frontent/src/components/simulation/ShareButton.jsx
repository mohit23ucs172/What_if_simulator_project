import { useNavigate } from "react-router-dom";
import Button from "../common/Button.jsx";

function ShareButton({ timelineId }) {
  const navigate = useNavigate();

  const handleShare = () => {
    if (timelineId) {
      const shareLink = `${window.location.origin}/share/${timelineId}`;
      navigator.clipboard.writeText(shareLink);
      alert("✅ Share link copied to clipboard:\n" + shareLink);
      navigate(`/share/${timelineId}`);
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <Button onClick={handleShare}>🔗 Share Timeline</Button>
    </div>
  );
}

export default ShareButton;
