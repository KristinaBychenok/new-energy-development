export const ArrowIcon = () => {
  return (
    <svg
      width="88"
      height="36"
      viewBox="0 0 88 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex item-start "
    >
      {/* Define a filter for the shadow */}
      <defs>
        <filter id="shadow" x="0" y="0" width="150%" height="150%">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="3"
            floodColor="grey"
            floodOpacity="0.5"
          />
        </filter>
      </defs>

      {/* Apply the filter to the path */}
      <path d="M12 0H76L44 12L12 0Z" fill="white" filter="url(#shadow)" />
    </svg>
  )
}
