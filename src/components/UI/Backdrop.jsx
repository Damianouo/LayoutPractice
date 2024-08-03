import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const Backdrop = ({ children, state, onClick, keyStr }) => {
  return createPortal(
    <AnimatePresence>
      {state && (
        <>
          <motion.div
            onClick={onClick}
            className="fixed right-0 top-0 z-10 h-screen w-screen bg-zinc-950/50"
            key={`${keyStr}${state}backdrop`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          {children}
        </>
      )}
    </AnimatePresence>,
    document.getElementById("backdrop"),
  );
};

export default Backdrop;
