'use client';

import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div
        className="calendly-inline-widget w-full rounded-lg shadow-lg"
        data-url="https://calendly.com/igift-center/discovery-call?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=fff100"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};

export default CalendlyWidget;
