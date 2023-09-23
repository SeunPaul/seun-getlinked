import { Link } from "react-router-dom";
import { navItems } from "./contants";
import { SectionWrapper } from "./StyledComponents";

function MobileNavigation({ page, show }) {
  return (
    <div
      className={`fixed left-0 border-b border-b-[#FFFFFF2E] ${
        show ? "top-0 opacity-100" : "-top-96 opacity-0"
      } z-10 h-96 w-full bg-dark pt-24 transition-all duration-200 md:hidden`}
    >
      <SectionWrapper>
        <ul className="flex list-none flex-col items-start font-semibold">
          {navItems.map((item) => (
            <Link
              to={item.url}
              key={item.value}
              className={`mb-5 cursor-pointer bg-clip-text font-inter text-lg font-medium transition duration-300 ease-in-out hover:bg-text hover:text-transparent ${
                page === item.value ? "bg-text text-transparent" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/register"
            className="flex h-[53px] w-[172px] items-center justify-center rounded-[4px] bg-button text-white"
          >
            Register
          </Link>
        </ul>
      </SectionWrapper>
    </div>
  );
}

export default MobileNavigation;
