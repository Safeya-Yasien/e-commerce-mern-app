import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 24,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-5 text-center">
      {/* Days */}
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content shadow-lg w-20">
        <span className="countdown font-mono text-4xl justify-center">
          <span
            style={{ "--value": timeLeft.days } as React.CSSProperties}
          ></span>
        </span>
        <span className="text-xs font-bold uppercase opacity-60">days</span>
      </div>

      {/* Hours */}
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content shadow-lg w-20">
        <span className="countdown font-mono text-4xl justify-center">
          <span
            style={{ "--value": timeLeft.hours } as React.CSSProperties}
          ></span>
        </span>
        <span className="text-xs font-bold uppercase opacity-60">hours</span>
      </div>

      {/* Minutes */}
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content shadow-lg w-20">
        <span className="countdown font-mono text-4xl justify-center">
          <span
            style={{ "--value": timeLeft.minutes } as React.CSSProperties}
          ></span>
        </span>
        <span className="text-xs font-bold uppercase opacity-60">min</span>
      </div>

      {/* Seconds */}
      <div className="flex flex-col p-2 bg-primary rounded-box text-primary-content shadow-lg w-20 ">
        <span className="countdown font-mono text-4xl justify-center">
          <span
            style={{ "--value": timeLeft.seconds } as React.CSSProperties}
          ></span>
        </span>
        <span className="text-xs font-bold uppercase opacity-80">sec</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
