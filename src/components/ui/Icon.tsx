type IconName =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'mail'
  | 'globe'
  | 'arrow-down'
  | 'arrow-right'
  | 'arrow-up'
  | 'external'
  | 'code'
  | 'menu'
  | 'close'
  | 'check'
  | 'pin'
  | 'spark';

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className = 'h-4 w-4' }: IconProps) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    'aria-hidden': true,
    focusable: false as const,
  };

  switch (name) {
    case 'github':
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-2.08c-3.2.7-3.88-1.4-3.88-1.4-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.7.08-.7 1.16.08 1.78 1.19 1.78 1.19 1.03 1.78 2.7 1.27 3.36.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12A11.5 11.5 0 0 0 12 .5Z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common} fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.9 21h4.2V9.4H2.9V21Zm7.3 0h4.2v-6.3c0-1.66.31-3.27 2.37-3.27 2.02 0 2.05 1.9 2.05 3.38V21h4.2v-7.1c0-3.66-.79-6.47-5.06-6.47-2.06 0-3.44 1.13-4 2.2h-.06V9.4h-3.7V21Z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg {...common} fill="currentColor">
          <path d="M18.9 2H22l-7.1 8.1L22.8 22h-6.5l-4.6-6.1L6.3 22H3.2l7.4-8.4L2.6 2h6.6l4.3 5.7L18.9 2Zm-1.1 18h1.7L7.4 3.8H5.6L17.8 20Z" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
          <path d="m3 6.5 9 6.5 9-6.5" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="12" cy="12" r="9.2" />
          <path d="M3 12h18M12 2.8c2.6 2.6 2.6 15.8 0 18.4-2.6-2.6-2.6-15.8 0-18.4Z" />
        </svg>
      );
    case 'arrow-down':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 4v16m0 0-6-6m6 6 6-6" />
        </svg>
      );
    case 'arrow-up':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 20V4m0 0 6 6m-6-6-6 6" />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 12h16m0 0-6-6m6 6-6 6" />
        </svg>
      );
    case 'external':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 4h6v6M20 4l-9 9" />
          <path d="M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" />
        </svg>
      );
    case 'code':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="m8 7-5 5 5 5m8-10 5 5-5 5" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case 'close':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m4 12.5 5 5L20 6.5" />
        </svg>
      );
    case 'pin':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.6" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9L12 2Z" />
        </svg>
      );
    default:
      return null;
  }
}
