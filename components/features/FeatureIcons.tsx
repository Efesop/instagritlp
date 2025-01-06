interface AnimatedIconProps {
  className?: string;
}

export const TrackingIcon = ({ className }: AnimatedIconProps) => (
  <div className="w-16 h-16 flex items-center justify-center">
    <svg
      className={`w-12 h-12 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="9" 
        stroke="currentColor" 
        strokeWidth="2"
        className="opacity-20"
      />
      <circle 
        cx="12" 
        cy="12" 
        r="9" 
        stroke="currentColor" 
        strokeWidth="2"
        strokeDasharray="56.5"
        strokeDashoffset="0"
        className="animate-[dash_2s_ease-in-out_infinite]"
      />
      <path
        d="M9 12L11 14L15 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="origin-[70%_70%] animate-[check_0.5s_ease-in-out_forwards]"
      />
    </svg>
  </div>
);

export const StreakIcon = ({ className }: AnimatedIconProps) => (
  <div className="w-16 h-16 flex items-center justify-center">
    <svg
      className={`w-12 h-12 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-[zap_1.5s_ease-in-out_infinite]"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0 100;100 0;0 100"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          values="2;3;2"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
);

export const AnalyticsIcon = ({ className }: AnimatedIconProps) => (
  <div className="w-16 h-16 flex items-center justify-center">
    <svg
      className={`w-12 h-12 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 16V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="animate-[chart_2s_ease-out_infinite]"
      />
      <path
        d="M12 16V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="animate-[chart_2s_ease-out_0.3s_infinite]"
      />
      <path
        d="M8 16V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="animate-[chart_2s_ease-out_0.6s_infinite]"
      />
    </svg>
  </div>
); 