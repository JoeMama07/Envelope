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
          className={`p-4 absolute top-0 left-1/2 transform -translate-x-1/2 w-80 bg-white rounded-lg shadow-md transition-transform text-black text-left z-50 ${
            isOpen ? "-translate-y-24 block" : "hidden"
          }`}
        >
          <h3>Dear Ryanie,</h3>
          <p className="mt-2">
            First things first{" "}
            <span className="text-rose-400">Happy Valentines Day</span>, I also
            want to let you know that I'm sorry for everything yesterday. I'm
            very very proud of you. I don't have words, but one thing 'I LOVE
            YOU' ok toodles.
          </p>
          <p className="text-right mt-2 mr-4">Yours sincerly,</p>
          <p className="text-right text-lime-500">beep beep</p>
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
