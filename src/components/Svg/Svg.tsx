import { theme } from "../../theme";

export const SchemeCardBorderSvg = ({ color = theme.colors.blue }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="194"
      height="212"
      fill="none"
      viewBox="0 0 194 212"
    >
      <rect
        width="192"
        height="210"
        x="1"
        y="1"
        stroke={color}
        strokeWidth="2"
        rx="9"
      ></rect>
    </svg>
  );
};

export const SchemeRoundLineSvg = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="65"
      fill="none"
      viewBox="0 0 65 65"
      {...props}
    >
      <path
        stroke="#E3E2E2"
        strokeWidth="2"
        d="M179 1H31C14.431 1 1 14.431 1 31v34"
      ></path>
    </svg>
  );
};

export const ArrowUpSvg = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#000"
        d="M6.172 13.352L10 9.523l3.828 3.829L15 12.18l-5-5-5 5 1.172 1.172z"
      ></path>
    </svg>
  );
};

export const ArrowDownSvg = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#000"
        d="M6.172 7.648L10 11.477l3.828-3.829L15 8.82l-5 5-5-5 1.172-1.172z"
      ></path>
    </svg>
  );
};

export const MinusSvg = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      fill="none"
      viewBox="0 0 20 21"
    >
      <path
        fill="#425E6B"
        d="M10 17.43c-1.875-.052-3.45-.703-4.727-1.953-1.25-1.277-1.9-2.852-1.953-4.727.052-1.875.703-3.438 1.953-4.688C6.55 4.787 8.125 4.123 10 4.07c1.875.052 3.438.716 4.688 1.992 1.275 1.25 1.94 2.813 1.992 4.688-.052 1.875-.716 3.45-1.992 4.727-1.25 1.25-2.813 1.9-4.688 1.953zm0-15c-2.37.052-4.336.86-5.898 2.422C2.539 6.414 1.732 8.38 1.68 10.75c.052 2.37.86 4.336 2.422 5.898C5.664 18.211 7.63 19.018 10 19.07c2.37-.052 4.336-.86 5.898-2.422 1.563-1.562 2.37-3.528 2.422-5.898-.052-2.37-.86-4.336-2.422-5.898C14.336 3.289 12.37 2.482 10 2.43zm-4.18 9.14h8.36V9.93H5.82v1.64z"
      ></path>
    </svg>
  );
};

export const PlusSvg = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      fill="none"
      viewBox="0 0 20 21"
    >
      <path
        fill="#425E6B"
        d="M14.18 12.07h-3.36v3.36H9.18v-3.36H5.82v-1.64h3.36V7.07h1.64v3.36h3.36v1.64zM10 2.93c-2.37.052-4.336.86-5.898 2.422C2.539 6.914 1.732 8.88 1.68 11.25c.052 2.37.86 4.336 2.422 5.898C5.664 18.711 7.63 19.518 10 19.57c2.37-.052 4.336-.86 5.898-2.422 1.563-1.562 2.37-3.528 2.422-5.898-.052-2.37-.86-4.336-2.422-5.898C14.336 3.789 12.37 2.982 10 2.93z"
      ></path>
    </svg>
  );
};

export const AscSortSvg = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="16"
      fill="none"
      viewBox="0 0 10 16"
    >
      <path
        fill="#A6A6A6"
        d="M4.18.5v11.797L1.172 9.328 0 10.5l5 5 5-5-1.172-1.172-3.008 2.969V.5H4.18z"
      ></path>
    </svg>
  );
};
