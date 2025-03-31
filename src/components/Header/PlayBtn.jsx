import Button from "../UI/Button";
import PlaySvg from "../../svgs/PlaySvg";
const PlayBtn = () => {
  return (
    <Button className="p-2">
      <PlaySvg className="h-4 w-4" />
    </Button>
  );
};

export default PlayBtn;
