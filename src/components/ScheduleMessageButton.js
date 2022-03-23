import { Link } from "react-router-dom";

function ScheduleMessageButton({ buttonPosition }) {
  return (
    <Link to="/schedule/recipient" className={`schedule-message-btn ${buttonPosition}`}>
      Schedule message
    </Link>
  );
}

export default ScheduleMessageButton;
