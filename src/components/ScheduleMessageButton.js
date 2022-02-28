import { Link } from "react-router-dom";

function ScheduleMessageButton() {
  return (
    <Link to="/schedule-message" className="schedule-message">
      <span className="schedule-message-icon">📝</span>Schedule message
    </Link>
  );
}

export default ScheduleMessageButton;
