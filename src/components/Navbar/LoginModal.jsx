import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { useContext } from "react";
import { ModalCtx } from "../../contexts/ModalCtx";
const LoginModal = () => {
  const { setModalShow } = useContext(ModalCtx);
  return (
    <Modal
      className="flex min-h-[350px] flex-col gap-8 p-6 text-lg font-semibold"
      keyStr="LoginModal"
    >
      <h2 className="text-3xl">Login</h2>
      <Button>Login with Fist</Button>
      <Button
        className="mt-auto self-center bg-swamp-800 hover:bg-swamp-600"
        onClick={() => setModalShow(false)}
      >
        Close
      </Button>
    </Modal>
  );
};

export default LoginModal;
