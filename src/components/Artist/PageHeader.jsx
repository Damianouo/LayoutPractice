/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import BackBtn from "../UI/BackBtn";
const PageHeader = ({
  title,
  bg,
  scrollElementRef = null,
  topBound = 0,
  animationLength = 1,
}) => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    if (animationLength === 1) {
      setScrollPercent(0.8);
    } else {
      const scrollElement = scrollElementRef.current;
      const handleScroll = () => {
        const scrollTop = scrollElement.scrollTop;
        let scrollPercent = 0;

        if (scrollTop > topBound) {
          scrollPercent = Math.min(
            (scrollTop - topBound) / animationLength,
            0.8,
          );
        }

        setScrollPercent(scrollPercent);
      };
      scrollElement.addEventListener("scroll", handleScroll);

      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollElementRef, topBound, animationLength]);

  return (
    <header
      style={{ backgroundColor: `rgba(${bg},${scrollPercent})` }}
      className="fixed z-50 flex w-full items-center p-2 pt-6 text-center backdrop-blur-sm"
    >
      <BackBtn />
      <span
        style={{
          opacity: scrollPercent,
          transform: `translateY(${10 - scrollPercent * 10}px)`,
        }}
        className="block flex-1"
      >
        {title}
      </span>
      <div className="h-8 w-8" />
    </header>
  );
};

export default PageHeader;
