interface WaveDividerProps {
  fromColor: string;
  toColor: string;
}

export function WaveDivider({ fromColor, toColor }: WaveDividerProps) {
  return (
    <div style={{ backgroundColor: fromColor }}>
      <div
        style={{ color: toColor, lineHeight: 0 }}
        className="wave-divider"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '50px' }}
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g>
            <use xlinkHref="#gentle-wave" x="50" y="3" fill="currentColor" />
          </g>
        </svg>
      </div>
      <div style={{ backgroundColor: toColor, height: '1px' }} />
    </div>
  );
}
