import React, { useState } from "react";

export default function Contact() {
  const [num, setNum] = useState(0);

  const handleNumber = () => {
    setNum((prev) => prev + 1);
  };
  return (
    <div>
      <button className="btn" onClick={handleNumber}>
        CLICKME
      </button>
      <div className="text-7xl">{num}</div>
    </div>
  );
}
