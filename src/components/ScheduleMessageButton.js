import { Link } from "react-router-dom";

function ScheduleMessageButton() {
  return (
    <Link to="/schedule" className="schedule-message">
      Schedule message
    </Link>
  );
}

export default ScheduleMessageButton;
