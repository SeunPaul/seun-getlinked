import { Link } from "react-router-dom";
import { SectionWrapper } from "./StyledComponents";
import { navItems } from "./contants";
import instagram from "../assets/png/instagram.png";
import twitter from "../assets/png/twitter.png";
import facebook from "../assets/png/facebook.png";
import linkedin from "../assets/png/linkedin.png";
import call from "../assets/png/call.png";
import location from "../assets/png/location.png";

function Footer({ page }) {
  return (
    <div className="bg-footerdark py-20 text-white">
      <div className="mx-auto max-w-[1300px] px-4 xs:px-8 md:px-10 lg:px-16 xl:px-24">
        <div className="flex flex-wrap justify-between gap-12">
          <div>
            <h3 className="font-clash text-[20px] vs:text-[30px]">
              get<span className="text-purple">linked</span>
            </h3>
            <p className="mt-4 w-full text-[12px] leading-[20px] vs:w-[412px]">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className="mt-12 flex items-center text-[12px]">
              <p className="mr-3 border-r-2 border-r-purple pr-3">
                Terms of Use
              </p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div>
            <p className="mb-4 text-[14px] font-semibold text-purple">
              Useful Links
            </p>
            <div className="flex list-none flex-col items-start font-semibold">
              {navItems.map((item) => (
                <Link
                  to={item.url}
                  key={item.value}
                  className={`mb-4 cursor-pointer bg-clip-text text-[12px] font-normal transition duration-300 ease-in-out hover:bg-text hover:text-transparent ${
                    page === item.value
                      ? "bg-text text-transparent"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <p className="text-[14px] text-purple">Follow us</p>
              <div className="cursor-pointer">
                <img src={instagram} alt="" />
              </div>
              <div className="cursor-pointer">
                <img src={twitter} alt="" />
              </div>
              <div className="cursor-pointer">
                <img src={facebook} alt="" />
              </div>
              <div className="cursor-pointer">
                <img src={linkedin} alt="" />
              </div>
            </div>
          </div>
          <div>
            <p className="mb-4 text-[14px] text-purple">Contact Us</p>
            <div className="mb-4 flex gap-4 text-[12px]">
              <div>
                <img src={call} alt="" />
              </div>
              <p>+234 6707653444</p>
            </div>
            <div className="flex gap-4 text-[12px]">
              <div>
                <img src={location} alt="" />
              </div>
              <p className="w-[89px]">
                27,Alara Street Yaba 100012 Lagos State
              </p>
            </div>
          </div>
        </div>
        <p className="mt-20 text-center text-[12px]">
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </div>
  );
}

export default Footer;
