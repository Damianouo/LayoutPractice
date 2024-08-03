/* eslint-disable react/prop-types */

import { motion, useAnimate } from "framer-motion";

const MatchLi = ({ match }) => {
  const [scope, animate] = useAnimate();
  function handleHoverStart() {
    animate("#leftBackdrop", { left: "0%" }, { duration: 0.4 });
    animate("#rightBackdrop", { right: "0%" }, { duration: 0.4 });
  }
  function handleHoverEnd() {
    animate("#leftBackdrop", { left: "-50%" }, { duration: 0.2 });
    animate("#rightBackdrop", { right: "-50%" }, { duration: 0.2 });
  }
  return (
    <motion.li
      className="relative overflow-hidden"
      ref={scope}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <motion.div
        id="leftBackdrop"
        className="absolute -left-1/2 top-0 h-full w-1/2 bg-zinc-950/70"
      />
      <motion.div
        id="rightBackdrop"
        className="absolute -right-1/2 top-0 h-full w-1/2 bg-zinc-950/70"
      />
      <div className="relative grid grid-cols-5 items-center justify-items-center gap-8 border-b-2 border-gray-700 py-8">
        <p></p>
        <p>{match.team1}</p>
        <p className="text-lg text-gray-400">vs</p>
        <p>{match.team2}</p>
      </div>
    </motion.li>
  );
};

export default MatchLi;
