/* eslint-disable react/prop-types */
import SvgWrapper from "./SvgWrapper";

const HamburgerSvg = ({ className }) => {
  return (
    <SvgWrapper className={className}>
      <svg viewBox="0 0 21 21" fill="currentColor" width="100%" height="100%">
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 6.5h12M4.498 10.5h11.997M4.5 14.5h11.995" />
        </g>
      </svg>
    </SvgWrapper>
  );
};

export default HamburgerSvg;
