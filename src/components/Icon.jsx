const paths = {
  leaf: (
    <>
      <path d="M5 19c9.5 0 14-6.5 14-14-7.5.4-13.5 4.8-14 14Z" />
      <path d="M5 19c2.8-4.8 6.6-7.9 11.3-9.7" />
    </>
  ),
  analytics: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 15l3-4 3 2 5-7" />
    </>
  ),
  network: (
    <>
      <circle cx="6" cy="7" r="2.5" />
      <circle cx="18" cy="7" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8.1 8.6l2.7 7" />
      <path d="M15.9 8.6l-2.7 7" />
      <path d="M8.5 7h7" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 5-3 8.3-7 10-4-1.7-7-5-7-10V6l7-3Z" />
      <path d="M9 12l2 2 4-5" />
    </>
  ),
  market: (
    <>
      <path d="M4 9h16l-1.4 10H5.4L4 9Z" />
      <path d="M8 9a4 4 0 0 1 8 0" />
      <path d="M8 14h8" />
    </>
  ),
  logistics: (
    <>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  water: (
    <>
      <path d="M12 3s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11Z" />
      <path d="M9 15a3 3 0 0 0 4 2.8" />
    </>
  ),
  contract: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5" />
      <path d="M10 12h6" />
      <path d="M10 16h6" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M15 11a3 3 0 0 0 0-6" />
      <path d="M17 20a5 5 0 0 0-2.1-4.1" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z" />
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 8H20" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.2 2.5 3.3 5.5 3.3 9S14.2 18.5 12 21c-2.2-2.5-3.3-5.5-3.3-9S9.8 5.5 12 3Z" />
    </>
  ),
  mail: (
    <>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s7-5.4 7-11a7 7 0 0 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <>
      <path d="M8 3h8v18H8z" />
      <path d="M11 18h2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4 4" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12l4 4L19 6" />,
  chart: (
    <>
      <rect x="5" y="11" width="3" height="8" />
      <rect x="11" y="6" width="3" height="13" />
      <rect x="17" y="9" width="3" height="10" />
    </>
  ),
};

export default function Icon({ name = "leaf", size = 22, className = "" }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.leaf}
    </svg>
  );
}
