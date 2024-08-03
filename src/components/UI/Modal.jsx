/* eslint-disable react/prop-types */
import { useContext } from "react";
import Backdrop from "./Backdrop";
import { ModalCtx } from "../../contexts/ModalCtx";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
const Modal = ({ children, className, keyStr }) => {
  const { modalShow, setModalShow } = useContext(ModalCtx);
  return (
    <Backdrop
      state={modalShow}
      onClick={() => setModalShow(false)}
      keyStr={keyStr}
    >
      <motion.dialog
        className={cn(
          "top-1/4 z-50 w-[clamp(300px,50%,600px)] rounded-md bg-zinc-900 text-inherit",
          className,
        )}
        key={`${keyStr}${modalShow}modal`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        open={modalShow}
        onClose={() => setModalShow(false)}
      >
        {children}
      </motion.dialog>
    </Backdrop>
  );
};

export default Modal;
