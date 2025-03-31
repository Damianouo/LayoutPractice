import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePreviousLocation = () => {
  const location = useLocation();
  const previousLocationRef = useRef(location);

  useEffect(() => {
    previousLocationRef.current = location;
  }, [location]);

  return previousLocationRef.current;
};

export default usePreviousLocation;
