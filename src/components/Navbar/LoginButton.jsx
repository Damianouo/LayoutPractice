/* eslint-disable react/prop-types */
import { useContext } from "react";
import { cn } from "../../utils/cn";
import Button from "../UI/Button";
import { ModalCtx } from "../../contexts/ModalCtx";

const LoginButton = ({ className, onClick }) => {
  const { setModalShow } = useContext(ModalCtx);
  function handleClick() {
    onClick && onClick();
    setModalShow(true);
  }
  return (
    <Button
      onClick={handleClick}
      className={cn("bg-swamp-800 hover:bg-swamp-600", className)}
    >
      Login
    </Button>
  );
};

export default LoginButton;
