import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M16.32 6H12.97L9 26H12.44L13.2 21.65H18.88L19.64 26H23.08L19.11 6H16.32ZM13.84 18.8L16.04 8.7L18.24 18.8H13.84Z"
        fill="#f5f5f5"
      />
    </svg>
  );
};

export default Logo;
