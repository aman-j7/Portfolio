import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressBar({ value, color }) {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    if (percentage <= value) {
      setInterval(
        () => setPercentage((prev) => (prev === value ? value : prev + 1)),
        100
      );
    }
  }, [percentage, value]);
  return (
    <CircularProgressbar
      className="progress-bar"
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        textColor: "white",
        pathColor: color,
        trailColor: "#151515",
        backgroundColor: "black",
      })}
    />
  );
}
export default ProgressBar;
