import { useState, useEffect } from "react";

function OTPGenerator() {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleGenerate = () => {
    const random = String(Math.floor(100000 + Math.random() * 900000));
    setOtp(random);
    setTimeLeft(5);
  };

  let timerText = "";
  if (timeLeft > 0) {
    timerText = `Expires in: ${timeLeft} seconds`;
  } else if (otp) {
    timerText = "OTP expired. Click the button to generate a new OTP.";
  }

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{otp || "Click 'Generate OTP' to get a code"}</h2>
      <p id="otp-timer" aria-live="polite">
        {timerText}
      </p>

      <button
        id="generate-otp-button"
        onClick={handleGenerate}
        disabled={timeLeft > 0}
      >
        Generate OTP
      </button>
    </div>
  );
}

export { OTPGenerator };
