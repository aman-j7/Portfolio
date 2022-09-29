import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressBar({ value, color }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercentage((prev) => (prev >= value ? 0 : value));
    }, 1500);
    return () => {
      clearInterval(timer);
    };
  }, [value]);

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
