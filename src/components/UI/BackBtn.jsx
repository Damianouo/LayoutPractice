/* eslint-disable react/prop-types */
import Button from "./Button";
import ChevronLeftSvg from "../../svgs/ChevronLeftSvg";
import { useNavigate } from "react-router-dom";
import { cn } from "../../utils/cn";

const BackBtn = ({ className }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Button
      onClick={handleGoBack}
      className={cn("rounded-full bg-zinc-900/60 p-1", className)}
    >
      <ChevronLeftSvg />
    </Button>
  );
};

export default BackBtn;
