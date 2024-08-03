/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ModalCtx = createContext(null);

const ModalCtxProvider = ({ children }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <ModalCtx.Provider value={{ modalShow, setModalShow }}>
      {children}
    </ModalCtx.Provider>
  );
};

export default ModalCtxProvider;
