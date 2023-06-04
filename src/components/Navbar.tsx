import { useState } from "react";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const toggleHambuger = () => setIsHamburgerClicked((h) => !h);

  return (
    <nav className="fixed w-full top-0 pt-4 pr-12 2xl:pr-[30rem] bg-[#f9f5f2]">
      <div className="flex items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <img src="/logo.png" alt="Portfolio logo." width="40" height="61" />
          <h1 className="ml-4 tracking-wider font-semibold text-lg text-neutral-950 hover:opacity-80 transition-all">
            Kunal
          </h1>
        </div>
        <div
          className="cursor-pointer lg:hidden"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          onClick={toggleHambuger}
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
        <div className="lg:flex gap-8 hidden font-medium">
          <a className="cursor-pointer" href="#about">
            About
          </a>
          <a className="cursor-pointer" href="#projects">
            Projects
          </a>
          <a className="cursor-pointer" href="#work">
            Work History
          </a>
          <a className="cursor-pointer" href="#contact">
            Contact
          </a>
          <a
            className="cursor-pointer"
            href="/resume.pdf"
            rel="noopener"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>

      <Transition
        show={isHamburgerClicked}
        className="transition-all duration-500 overflow-hidden"
        enterFrom="transform scale-95 opacity-0 max-h-0"
        enterTo="transform scale-100 opacity-100 max-h-[500px]"
        leaveFrom="transform scale-100 opacity-100 max-h-[500px]"
        leaveTo="transform scale-95 opacity-0 max-h-0"
      >
        <div className="border-y-2 border-solid border-black mt-4 py-8 text-lg flex flex-col gap-8 font-medium">
          <a
            className="cursor-pointer w-fit"
            onClick={toggleHambuger}
            href="#about"
          >
            About
          </a>
          <a
            className="cursor-pointer w-fit"
            onClick={toggleHambuger}
            href="#projects"
          >
            Projects
          </a>
          <a
            className="cursor-pointer w-fit"
            onClick={toggleHambuger}
            href="#work"
          >
            Work History
          </a>
          <a
            className="cursor-pointer w-fit"
            onClick={toggleHambuger}
            href="#contact"
          >
            Contact
          </a>
          <a
            className="cursor-pointer w-fit"
            href="/resume.pdf"
            rel="noopener"
            target="_blank"
          >
            Resume
          </a>
          <div className="flex gap-8 items-center">
            <a
              className="cursor-pointer transition-transform hover:-translate-y-2"
              href="https://github.com/kunal70006"
              rel="noopener"
              target="_blank"
            >
              <img src="/github.png" height={38} width={38} alt="github" />
            </a>
            <a
              className="cursor-pointer transition-transform hover:-translate-y-2"
              href="https://www.linkedin.com/in/kunaldeep-singh/"
              rel="noopener"
              target="_blank"
            >
              <img src="/insta.svg" height={38} width={38} alt="linkedIn" />
            </a>
            <a
              className="cursor-pointer transition-transform hover:-translate-y-2"
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
