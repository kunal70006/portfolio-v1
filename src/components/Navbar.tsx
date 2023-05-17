import { useState } from "react";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  return (
    <nav className="flex items-center justify-between fixed w-full pr-12">
      <div className="flex items-center cursor-pointer">
        <img src="/logo.png" alt="Portfolio logo." width="40" height="61" />
        <h1 className="ml-4 tracking-wider font-semibold text-lg text-neutral-950 hover:opacity-80 transition-all">
          Kunal.dev
        </h1>
      </div>
      <div
        className="cursor-pointer"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <rect
            x="4"
            y="7.5"
            width="24"
            height="3"
            rx="1.5"
            fill="#292926"
            opacity={hover ? 0.5 : 1}
            className="transition-all"
          ></rect>
          <rect
            x="4"
            y="14.5"
            width="24"
            height="3"
            rx="1.5"
            fill="#292926"
            opacity={hover ? 0.5 : 1}
            className="transition-all"
          ></rect>
          <rect
            x="4"
            y="21.5"
            width="24"
            height="3"
            rx="1.5"
            fill="#292926"
            opacity={hover ? 0.5 : 1}
            className="transition-all"
          ></rect>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
