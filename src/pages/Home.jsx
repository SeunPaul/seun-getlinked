import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DesktopNavigation from "../components/DesktopNavigation";
import { SectionWrapper } from "../components/StyledComponents";
import underline from "../assets/svg/underline.svg";
import chain from "../assets/png/chain.png";
import blast from "../assets/png/blast.png";
import creative from "../assets/png/creative.png";
import mwsgtvs from "../assets/png/mwsgtvs.png";
import glowing_sphere from "../assets/png/glowing_sphere.png";
import metrix from "../assets/png/metrix.png";
import star from "../assets/png/star.png";
import hpl from "../assets/png/hero-purple-left.png";
import hpr from "../assets/png/hero-purple-left.png";

function Home() {
  const [intervalId, setIntervalId] = useState();
  const [formattedCurrentTime, setFormattedCurrentTime] =
    useState("00 : 00 : 00 : 00");
  const announcementDate = new Date(2023, 8, 26, 12, 0, 0).getTime();

  const location = useLocation();
  const page = location.pathname.split("/")[1];

  useEffect(() => {
    console.log(formattedCurrentTime.split(":"));
    if (intervalId === undefined) {
      const x = setInterval(() => {
        const now = new Date().getTime();
        const time = announcementDate - now;
        const days =
          Math.floor(time / (1000 * 60 * 60 * 24)) > 9
            ? Math.floor(time / (1000 * 60 * 60 * 24))
            : "0" + Math.floor(time / (1000 * 60 * 60 * 24));
        const hours =
          Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 9
            ? Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            : "0" +
              Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes =
          Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)) > 9
            ? Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
            : "0" + Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds =
          Math.floor((time % (1000 * 60)) / 1000) > 9
            ? Math.floor((time % (1000 * 60)) / 1000)
            : "0" + Math.floor((time % (1000 * 60)) / 1000);
        setFormattedCurrentTime(`${days} : ${hours} : ${minutes} : ${seconds}`);

        if (time / 1000 < 1) {
          clearInterval(x);
          setFormattedCurrentTime(`00 : 00 : 00 : 00`);
        }
      }, 1000);

      setIntervalId(x);
    }

    // eslint-disable-next-line
  }, [intervalId]);

  return (
    <div className="pt-[91px] md:pt-[121px]">
      {/* Hero Section */}
      <div className="border-b border-b-[#FFFFFF2E]">
        <DesktopNavigation page={page || "home"} />
        <SectionWrapper className="relative h-[850px]">
          <img className="absolute right-0 object-cover" src={metrix} alt="" />
          <img className="absolute left-0" src={hpl} alt="" />
          <h2 className="pt-8 text-right text-[36px] font-bold italic text-white">
            <p className="animate-typing overflow-hidden whitespace-nowrap">
              Igniting a Revolution in HR Innovation
            </p>
            <img src={underline} className="ml-auto" />
          </h2>
          <div className=" relative mt-[100px] w-[750px]">
            <img
              className="animate-bigpulse absolute -top-32 left-16"
              src={star}
              alt=""
            />
            <img
              className="animate-bigpulse absolute -top-16 right-5"
              src={star}
              alt=""
            />
            <div>
              <p className="relative text-[80px] font-bold leading-[98px] text-white">
                getlinked Tech
                <img
                  src={creative}
                  alt=""
                  className="absolute -top-12 right-40"
                />
              </p>
              <p className="flex items-end text-[80px] font-bold leading-[98px] text-white">
                Hackathon 1.0
                <div className="flex items-center">
                  <img src={chain} alt="" className="h-[86px] w-[86px]" />
                  <img src={blast} alt="" className="h-[58px] w-[58px]" />
                </div>
              </p>
              <p className="text-[20px mt-4 w-[522px] text-[20px] font-normal text-white">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
            </div>
            <Link
              to="/register"
              className="mt-14 flex h-[53px] w-[172px] items-center justify-center rounded-[4px] bg-button text-white"
            >
              Register
            </Link>
            <div className="relative mt-20 flex w-[300px] items-end text-white">
              <p className="font-unica text-[64px] font-normal">
                {formattedCurrentTime.split(":")[0]}
              </p>
              <p className="mr-6 pb-6 text-[14px]">D</p>
              <p className="font-unica text-[64px] font-normal">
                {" "}
                {formattedCurrentTime.split(":")[1]}
              </p>
              <p className="mr-6 pb-6 text-[14px]">H</p>
              <p className="font-unica text-[64px] font-normal">
                {" "}
                {formattedCurrentTime.split(":")[2]}
              </p>
              <p className="mr-6 pb-6 text-[14px]">M</p>
              <p className="font-unica text-[64px] font-normal">
                {" "}
                {formattedCurrentTime.split(":")[3]}
              </p>
              <p className="mr-6 pb-6 text-[14px]">S</p>
              <img
                className="animate-bigpulse absolute -right-32 -top-10"
                src={star}
                alt=""
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 h-[850px] w-[800px] overflow-hidden">
            <img className="absolute -right-32 top-0 z-[2]" src={hpr} alt="" />
            <img className="absolute bottom-0 z-[1]" src={mwsgtvs} alt="" />
            <img
              className="absolute right-16 top-32 z-[3] animate-pulse"
              src={glowing_sphere}
              alt=""
            />
          </div>
        </SectionWrapper>
      </div>

      {/* Overview */}
      <div>
        <SectionWrapper>
          <div></div>
          <div>
            <h3>
              Introduction to getlinked <br />
              <span className="text-purple">tech Hackathon 1.0</span>
            </h3>
          </div>
        </SectionWrapper>
      </div>

      {/* Rules and Guidelines */}

      {/* Judging Criteria */}

      {/* FAQs */}

      {/* Timelines */}

      {/* Prizes and Rewards */}

      {/* Partners and Sponsors */}

      {/* Privacy Policy and terms */}

      {/* Footer */}
    </div>
  );
}

export default Home;
