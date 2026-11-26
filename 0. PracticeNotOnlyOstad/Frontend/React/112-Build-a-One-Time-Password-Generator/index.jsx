const { useState, useEffect, useRef } = React;

function OTPGenerator() {
  // Only TWO pieces of memory needed
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  // The countdown: one tick at a time
  useEffect(() => {
    if (timeLeft <= 0) return; // nothing to count → stop

    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timerId); // clean up if needed
  }, [timeLeft]);

  // When the user clicks the button
  const handleGenerate = () => {
    const code = String(Math.floor(100000 + Math.random() * 900000));
    setOtp(code);
    setTimeLeft(5);
  };

  // What should the timer paragraph say?
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
export default OTPGenerator;
