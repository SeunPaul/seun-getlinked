import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import menu from "../assets/svg/menu.svg";
import close from "../assets/svg/close.svg";
import { useOutsideAlerter } from "../hooks/useOutsideAlerter";
import Scroll from "./Scroll";
import { SectionWrapper } from "./StyledComponents";
import MobileNavigation from "./MobileNavigation";
import { navItems } from "./contants";

function DesktopNavigation({ page }) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const ref = useRef(null);

  useOutsideAlerter(ref, () => {
    if (showMobileNav) setShowMobileNav(false);
  });

  return (
    <div
      ref={ref}
      className="fixed inset-x-0 top-0 z-40 border-b border-b-[#FFFFFF2E] bg-dark"
    >
      <Scroll />
      <SectionWrapper className="flex items-center justify-between pb-5 pt-12">
        <>
          <Link to="/">
            <h3 className="text-[15px] font-bold text-white md:text-4xl font-clash">
              get<span className="text-purple">linked</span>
            </h3>
          </Link>
          <MobileNavigation page={page} show={showMobileNav} />
          <div className="z-20 cursor-pointer md:hidden">
            {showMobileNav ? (
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-button">
                <div className="h-[26px] w-[26px] rounded-full bg-dark p-2"
                    onClick={() => setShowMobileNav(false)}>
                  <img
                    src={close}
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <img src={menu} alt="" onClick={() => setShowMobileNav(true)} />
            )}
          </div>
          <div className="hidden items-center gap-4 md:flex lg:gap-10">
            {navItems.map((item) => (
              <Link
                to={item.url}
                key={item.value}
                className={`cursor-pointer bg-clip-text transition duration-300 ease-in-out hover:bg-text hover:text-transparent ${
                  page === item.value
                    ? "bg-text text-transparent"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link className="ml-2 flex h-[53px] w-[172px] items-center justify-center rounded-[4px] bg-button text-white lg:ml-14">
              Register
            </Link>
          </div>
        </>
      </SectionWrapper>
    </div>
  );
}

export default DesktopNavigation;
