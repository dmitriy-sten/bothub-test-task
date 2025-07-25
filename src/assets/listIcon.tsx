import React from "react";

interface Props {
  className?: string;
}

export const ListIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 13H18C18.55 13 19 12.55 19 12C19 11.45 18.55 11 18 11H6C5.45 11 5 11.45 5 12C5 12.55 5.45 13 6 13ZM4 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H4C3.45 15 3 15.45 3 16C3 16.55 3.45 17 4 17ZM7 8C7 8.55 7.45 9 8 9H20C20.55 9 21 8.55 21 8C21 7.45 20.55 7 20 7H8C7.45 7 7 7.45 7 8Z"
        fill="currentColor"
      />
    </svg>
  );
};
