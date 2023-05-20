import { useState } from "react";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(true);
  return (
    <nav className="fixed w-full pr-12">
      <div className="flex items-center justify-between">
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
          onClick={() => setIsHamburgerClicked((t) => !t)}
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
      </div>

      <Transition
        show={isHamburgerClicked}
        className="transition-all duration-500 overflow-hidden"
        enterFrom="transform scale-95 opacity-0 max-h-0"
        enterTo="transform scale-100 opacity-100 max-h-96"
        leaveFrom="transform scale-100 opacity-100 max-h-96"
        leaveTo="transform scale-95 opacity-0 max-h-0"
      >
        <div className="border-y-2 border-solid border-black mt-4 py-8 text-lg flex flex-col gap-8 font-medium">
          <a className="cursor-pointer">About</a>
          <a className="cursor-pointer">What I Do</a>
          <a className="cursor-pointer">My Work</a>
          <a className="cursor-pointer">Contact</a>
          <div className="flex gap-8 items-center">
            <a
              className="cursor-pointer"
              href="https://github.com/kunal70006"
              rel="noopener"
              target="_blank"
            >
              <img src="/github.png" height={38} width={38} alt="github" />
            </a>
            <a
              className="cursor-pointer"
              href="https://www.linkedin.com/in/kunaldeep-singh/"
              rel="noopener"
              target="_blank"
            >
              <img src="/insta.svg" height={38} width={38} alt="linkedIn" />
            </a>
            <a
              className="cursor-pointer"
              href="https://www.instagram.com/kunaaalisthisusernameavailable/"
              rel="noopener"
              target="_blank"
            >
              <img src="/linkedin.svg" height={38} width={38} alt="linkedIn" />
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
