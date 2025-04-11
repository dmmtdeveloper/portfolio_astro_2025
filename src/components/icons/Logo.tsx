interface LogoProps {
  id?: string;
  className?: string;
}

export const Logo = ({ className, id }: LogoProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="475"
        height="76"
        viewBox="0 0 475 76"
        fill="none"
        className={className}
        id={id}
      >
        <path
          d="M474.714 25L453.914 75H443.964L423.164 25H434.164L449.014 64.45L463.864 25H474.714Z"
          className={className}
        />
        <path
          d="M417.013 69.05C410.813 73.6833 403.996 76 396.563 76C391.263 76 386.513 74.8333 382.313 72.5C378.113 70.1667 374.796 66.9833 372.363 62.95C369.93 58.9167 368.713 54.3667 368.713 49.3C368.713 44.4667 369.83 40.15 372.063 36.35C374.296 32.5167 377.346 29.5 381.213 27.3C385.08 25.1 389.463 24 394.363 24C399.43 24 403.88 25.2 407.713 27.6C411.58 30 414.58 33.35 416.713 37.65C418.88 41.9167 419.963 46.8667 419.963 52.5V54.1H379.813C380.413 56.7 381.53 58.9833 383.163 60.95C384.83 62.8833 386.896 64.4 389.363 65.5C391.863 66.5667 394.663 67.1 397.763 67.1C403.296 67.1 408.38 65.3 413.013 61.7L417.013 69.05ZM379.363 47H410.413C410.08 44.2 409.213 41.7667 407.813 39.7C406.413 37.6 404.596 35.9667 402.363 34.8C400.163 33.6 397.68 33 394.913 33C392.113 33 389.596 33.6 387.363 34.8C385.13 35.9667 383.313 37.6 381.913 39.7C380.546 41.8 379.696 44.2333 379.363 47Z"
          className={className}
        />
        <path
          d="M360.058 75H351.008L350.458 67.85C348.192 70.3833 345.458 72.3833 342.258 73.85C339.092 75.2833 335.608 76 331.808 76C327.008 76 322.708 74.8667 318.908 72.6C315.108 70.3333 312.108 67.2333 309.908 63.3C307.742 59.3667 306.658 54.9333 306.658 50C306.658 45.0333 307.742 40.6 309.908 36.7C312.108 32.7667 315.108 29.6667 318.908 27.4C322.708 25.1333 327.008 24 331.808 24C335.408 24 338.742 24.65 341.808 25.95C344.908 27.25 347.575 29.0667 349.808 31.4V0H360.058V75ZM333.508 66.8C336.542 66.8 339.275 66.1 341.708 64.7C344.175 63.3 346.142 61.4 347.608 59C349.075 56.6 349.808 53.8667 349.808 50.8V49.1C349.808 46.0333 349.075 43.3 347.608 40.9C346.142 38.5 344.175 36.6167 341.708 35.25C339.275 33.8833 336.542 33.2 333.508 33.2C330.408 33.2 327.625 33.9333 325.158 35.4C322.692 36.8667 320.742 38.8667 319.308 41.4C317.875 43.9 317.158 46.75 317.158 49.95C317.158 53.15 317.875 56.0167 319.308 58.55C320.742 61.0833 322.692 63.1 325.158 64.6C327.625 66.0667 330.408 66.8 333.508 66.8Z"
          className={className}
        />
        <path
          d="M303.46 25L282.66 75H272.71L251.91 25H262.91L277.76 64.45L292.61 25H303.46Z"
          className={className}
        />
        <path
          d="M246.004 75H237.154L236.554 68.6C234.721 70.9333 232.404 72.75 229.604 74.05C226.804 75.35 223.704 76 220.304 76C216.737 76 213.554 75.3 210.754 73.9C207.954 72.5 205.754 70.5833 204.154 68.15C202.554 65.7167 201.754 62.95 201.754 59.85C201.754 56.5833 202.621 53.7167 204.354 51.25C206.087 48.75 208.454 46.8 211.454 45.4C214.454 43.9667 217.871 43.25 221.704 43.25C224.104 43.25 226.537 43.5333 229.004 44.1C231.504 44.6667 233.754 45.4667 235.754 46.5V44.65C235.754 42.2167 235.121 40.1333 233.854 38.4C232.621 36.6333 230.921 35.2833 228.754 34.35C226.621 33.4167 224.254 32.95 221.654 32.95C219.354 32.95 217.004 33.35 214.604 34.15C212.237 34.95 210.004 36.1833 207.904 37.85L204.804 29.5C207.837 27.7 210.987 26.3333 214.254 25.4C217.554 24.4667 220.787 24 223.954 24C228.487 24 232.387 24.9 235.654 26.7C238.954 28.5 241.504 31.0667 243.304 34.4C245.104 37.7 246.004 41.6 246.004 46.1V75ZM222.304 67.3C224.671 67.3 226.854 66.8167 228.854 65.85C230.854 64.85 232.471 63.45 233.704 61.65C234.971 59.8167 235.654 57.6833 235.754 55.25V54.55C234.054 53.2833 232.137 52.3 230.004 51.6C227.904 50.8667 225.754 50.5 223.554 50.5C220.187 50.5 217.387 51.3 215.154 52.9C212.921 54.5 211.804 56.55 211.804 59.05C211.804 60.6167 212.254 62.0333 213.154 63.3C214.087 64.5333 215.337 65.5167 216.904 66.25C218.504 66.95 220.304 67.3 222.304 67.3Z"
          className={className}
        />
        <path
          d="M191.904 75H182.854L182.304 67.85C180.037 70.3833 177.304 72.3833 174.104 73.85C170.937 75.2833 167.454 76 163.654 76C158.854 76 154.554 74.8667 150.754 72.6C146.954 70.3333 143.954 67.2333 141.754 63.3C139.587 59.3667 138.504 54.9333 138.504 50C138.504 45.0333 139.587 40.6 141.754 36.7C143.954 32.7667 146.954 29.6667 150.754 27.4C154.554 25.1333 158.854 24 163.654 24C167.254 24 170.587 24.65 173.654 25.95C176.754 27.25 179.421 29.0667 181.654 31.4V0H191.904V75ZM165.354 66.8C168.387 66.8 171.121 66.1 173.554 64.7C176.021 63.3 177.987 61.4 179.454 59C180.921 56.6 181.654 53.8667 181.654 50.8V49.1C181.654 46.0333 180.921 43.3 179.454 40.9C177.987 38.5 176.021 36.6167 173.554 35.25C171.121 33.8833 168.387 33.2 165.354 33.2C162.254 33.2 159.471 33.9333 157.004 35.4C154.537 36.8667 152.587 38.8667 151.154 41.4C149.721 43.9 149.004 46.75 149.004 49.95C149.004 53.15 149.721 56.0167 151.154 58.55C152.587 61.0833 154.537 63.1 157.004 64.6C159.471 66.0667 162.254 66.8 165.354 66.8Z"
          className={className}
        />
        <path
          d="M19.5137 66.2905L85.8041 -3.82801e-07L95.5137 9.70955L29.2626 76L19.5137 66.2905Z"
          className={className}
        />
        <path
          d="M82.5195 53.1291L97.9342 37.6122L88.7528 28.4054L97.0135 20.0795L105.759 28.8458L114.504 37.6122L90.7802 61.4062L82.5195 53.1291Z"
          className={className}
        />
        <path
          d="M30.5937 23.8943L16.5701 38.0202L25.7515 47.227L17.4908 55.5529L4.95399e-05 38.0202L22.3331 15.6172L30.5937 23.8943Z"
          className={className}
        />
      </svg>
    </>
  );
};
