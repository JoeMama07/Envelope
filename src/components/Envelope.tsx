import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  function handleEnvelopeClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex flex-col">
      {isOpen && <ConfettiExplosion />}
      <div
        className={`z-50 relative w-96 h-60 bg-yellow-200 rounded-lg shadow-md transition-transform`}
        onClick={handleEnvelopeClick}
      >
        <div
          className={`p-4 absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-40 bg-white rounded-lg shadow-md transition-transform text-black z-50 ${
            isOpen ? "-translate-y-24 block" : "hidden"
          }`}
        >
          <h3 className="text-left">Dear, ...</h3>
          <p className="text-black"></p>
        </div>
        <div
          className={`absolute top-1 w-0 h-0 border-l-[190px] border-l-transparent rounded-lg border-t-[150px] border-t-yellow-200 border-r-[190px] border-r-transparent origin-top ${
            isOpen ? "-scale-y-100" : ""
          }`}
        />
        <div
          className={`absolute top-0 w-0 h-0 border-l-[190px] border-l-transparent rounded-lg border-t-[150px] border-t-yellow-300 border-r-[190px] border-r-transparent origin-top`}
        />
      </div>
    </div>
  );
}

export default Envelope;
