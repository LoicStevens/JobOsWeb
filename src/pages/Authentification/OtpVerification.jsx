import React, { useState, useEffect } from 'react';

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTime, setResendTime] = useState(30);

  // Handle change in OTP input
  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (value) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if value is entered
      if (index < otp.length - 1 && value) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  // Handle backspace for navigation to previous input
  const handleBackspace = (event, index) => {
    if (event.key === 'Backspace' && index > 0 && !otp[index]) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  // Countdown timer for resend OTP
  useEffect(() => {
    const timer = setInterval(() => {
      if (resendTime > 0) {
        setResendTime((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [resendTime]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full text-center">
      <div className="flex justify-center mb-6">
          <img src="logo.png" alt="JobOs" className="h-12" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">OTP Verification</h2>
        <p className="text-gray-600 mb-6">
          One Time Password (OTP) has been sent via Email to <strong>mefirehamed936@gmail.com</strong>.
          Enter the OTP below to verify it.
        </p>
        <div className="flex justify-center mb-6 space-x-2">
          {otp.map((data, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              className="w-10 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-green text-lg"
            />
          ))}
        </div>
        <button
          type="button"
          className="w-full py-2 bg-custom-green text-white rounded-md hover:bg-green-700 focus:outline-none"
        >
          Verify OTP
        </button>
        <p className="text-gray-600 mt-6">
          Resend OTP in {resendTime > 0 ? `00:${resendTime.toString().padStart(2, '0')}` : '00:00'}
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
