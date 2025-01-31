import { useState } from "react";
import { motion } from "framer-motion";
import Message from "../Components/Message"

const YesComponent = () => (
<div>
  <Message />
  </div>
);

const Letter = () => {
  const [answered, setAnswered] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const handleYesClick = () => {
    setAnswered(true);
  };

  const handleNoHover = () => {
    if (!answered) {
      setNoPosition({
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!answered ? (
        <>
          <div className="text-2xl mb-6">Will you marry me?</div>
          <div className="flex gap-4">
            <button
              className="px-4 py-2  text-white rounded-lg"
              onClick={handleYesClick}
            >
              Yes
            </button>
            <motion.button
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
              style={{ position: "relative", left: noPosition.x, top: noPosition.y }}
              onMouseEnter={handleNoHover}
              disabled={answered}
            >
              No
            </motion.button>
          </div>
        </>
      ) : (
        <YesComponent />
      )}
    </div>
  );
};

export default Letter;
