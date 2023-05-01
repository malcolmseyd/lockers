import { useNavigate } from "react-router-dom";

export function Back() {
  const navigate = useNavigate();
  return (
    <svg
      onClick={() => navigate(-1)}
      className="h-8 w-8 absolute top-8 left-8 hover:cursor-pointer"
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m5.66116524 3.36827202c5.18469776-.47094658 8.51890836 1.5289737 9.99999996 6-2.8248102-3.14044041-6.34158528-3.71816233-9.99999996-2v2.99999998l-5-4.99999998 5-5z"
        fill="black"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        transform="translate(2.839 4.132)"
      />
    </svg>
  );
}