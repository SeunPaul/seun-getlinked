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
import tbi from "../assets/png/The big idea.png";
import rules from "../assets/png/rules.png";
import criteria from "../assets/png/criteria.png";
import trophy from "../assets/png/trophy.png";
import prizes from "../assets/png/prizes.png";

function Home() {
  const [intervalId, setIntervalId] = useState();
  const [formattedCurrentTime, setFormattedCurrentTime] =
    useState("00 : 00 : 00 : 00");
  const announcementDate = new Date(2023, 8, 26, 12, 0, 0).getTime();

  const location = useLocation();
  const page = location.pathname.split("/")[1];

  useEffect(() => {
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
    <div className="overflow-hidden pt-[91px] md:pt-[121px]">
      {/* Hero Section */}
      <div className="border-b border-b-[#FFFFFF2E]">
        <DesktopNavigation page={page || "home"} />
        <SectionWrapper className="relative h-[700px] fold:h-[850px]">
          <img
            className="absolute right-0 hidden object-cover vs:block"
            src={metrix}
            alt=""
          />
          <img
            className="absolute -left-20 w-full vs:left-10 lg:w-[800px]"
            src={hpl}
            alt=""
          />
          <h2 className="pt-8 text-center text-[12px] font-bold italic text-white fold:text-[15px] xs:text-[16px] vs:text-right md:text-[26px] lg:text-[36px]">
            <p className="animate-typing overflow-hidden whitespace-nowrap">
              Igniting a Revolution in HR Innovation
            </p>
            <img
              src={underline}
              className="ml-auto w-[120px] md:w-[180px] lg:w-auto"
            />
          </h2>
          <div className="relative z-10 mt-[60px] w-full vs:mt-[100px] vs:w-[460px] md:w-[600px] lg:w-[750px]">
            <img
              className="absolute -top-8  left-24 w-4 animate-bigpulse vs:-top-32 vs:left-16 vs:w-auto"
              src={star}
              alt=""
            />
            <img
              className="absolute -top-8  right-5 w-2 animate-bigpulse vs:-top-16 vs:w-auto"
              src={star}
              alt=""
            />
            <div className="flex flex-col items-center vs:block">
              <p className="relative font-clash text-[26px] font-bold leading-[30px] text-white xs:text-[32px] vs:text-[40px] vs:leading-[50px] md:text-[60px] lg:text-[80px] lg:leading-[98px]">
                getlinked Tech
                <img
                  src={creative}
                  alt=""
                  className="absolute -top-6 right-4 w-[20px] vs:-top-8 vs:right-[180px] vs:w-[30px] md:-top-12 md:w-[40px] lg:w-auto"
                />
              </p>
              <div className="flex items-end text-[26px] font-bold text-white xs:text-[32px] vs:text-[40px] md:text-[60px]  lg:text-[80px]">
                <p className="font-clash">
                  Hackathon <span className="text-purple ">1.0</span>
                </p>
                <div className="flex items-center pb-2 vs:ml-2 md:pb-4">
                  <img
                    src={chain}
                    alt=""
                    className="h-[30px] w-[30px] vs:h-[50px] vs:w-[50px] lg:h-[86px] lg:w-[86px]"
                  />
                  <img
                    src={blast}
                    alt=""
                    className="h-[25px] w-[25px] vs:h-[40px] vs:w-[40px] lg:h-[58px] lg:w-[58px]"
                  />
                </div>
              </div>
              <p className="mt-4 w-[264px] text-center text-[13px] font-normal text-white vs:w-[340px] vs:text-start vs:text-[17px] md:w-[400px] md:text-[20px] lg:w-[522px]">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
            </div>
            <Link
              to="/register"
              className="mx-auto mt-6 flex h-[53px] w-[172px] items-center justify-center rounded-[4px] bg-button text-white vs:mx-0 vs:mt-14"
            >
              Register
            </Link>
            <div className="relative mx-auto mt-6 flex w-[270px] items-end text-white vs:mx-0 vs:mt-20 vs:w-[300px]">
              <p className="font-unica text-[38px] font-normal xs:text-[48px] vs:text-[64px]">
                {formattedCurrentTime.split(":")[0]}
              </p>
              <p className="mr-4 pb-3 text-[12px] xs:pb-4 xs:text-[14px] vs:mr-6 vs:pb-6">
                D
              </p>
              <p className="font-unica text-[38px] font-normal xs:text-[48px] vs:text-[64px]">
                {formattedCurrentTime.split(":")[1]}
              </p>
              <p className="mr-4 pb-3 text-[12px] xs:pb-4 xs:text-[14px] vs:mr-6 vs:pb-6">
                H
              </p>
              <p className="font-unica text-[38px] font-normal xs:text-[48px] vs:text-[64px]">
                {formattedCurrentTime.split(":")[2]}
              </p>
              <p className="mr-4 pb-3 text-[12px] xs:pb-4 xs:text-[14px] vs:mr-6 vs:pb-6">
                M
              </p>
              <p className="font-unica text-[38px] font-normal xs:text-[48px] vs:text-[64px]">
                {formattedCurrentTime.split(":")[3]}
              </p>
              <p className="mr-4 pb-3 text-[12px] xs:pb-4 xs:text-[14px] vs:mr-6 vs:pb-6">
                S
              </p>
              <img
                className="absolute -top-10 right-0 w-2 animate-bigpulse vs:-right-32 vs:w-auto"
                src={star}
                alt=""
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 h-[850px] w-full overflow-hidden vs:w-[500px] lg:w-[800px]">
            <img
              className="absolute right-0 top-0 z-[2] hidden md:block lg:-right-32"
              src={hpl}
              alt=""
            />
            <img className="absolute bottom-0 z-[1]" src={mwsgtvs} alt="" />
            <img
              className="absolute bottom-0 right-0 z-[3] w-[450px] animate-pulse vs:bottom-[20px] lg:bottom-[85px] lg:right-16 lg:w-auto"
              src={glowing_sphere}
              alt=""
            />
          </div>
        </SectionWrapper>
      </div>

      {/* Overview */}
      <div className="border-b border-b-[#FFFFFF2E] pb-20 pt-10">
        <SectionWrapper className="flex flex-wrap items-center justify-center gap-20">
          <img src={tbi} alt="" className="w-[264px] vs:w-[300px] xl:w-auto" />
          <div className="mt-0 text-center vs:mt-10 vs:text-start">
            <h3
              data-aos="fade-up"
              className="font-clash text-[20px] font-bold leading-[30px] text-white vs:text-[32px] vs:leading-[42px]"
            >
              Introduction to getlinked <br />
              <span className="text-purple">tech Hackathon 1.0</span>
            </h3>
            <p className="mt-5 w-full text-center text-[13px] leading-[27px] text-white vs:text-left vs:text-sm vs:leading-[30px] sm:w-[515px]">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </SectionWrapper>
      </div>

      {/* Rules and Guidelines */}
      <div className="border-b border-b-[#FFFFFF2E] pb-10 pt-10">
        <SectionWrapper className="flex flex-row-reverse flex-wrap items-center  justify-center gap-5">
          <img
            src={rules}
            className="w-[294px] vs:w-[360px] xl:w-auto"
            alt=""
          />
          <div className="text-center vs:text-start">
            <h3 className="font-clash text-[20px] font-bold leading-[30px] text-white vs:text-[32px] vs:leading-[42px]">
              Rules and
              <br />
              <span className="text-purple">Guidelines</span>
            </h3>
            <p className="mt-5 w-full text-center text-[13px] leading-[27px] text-white vs:text-left vs:text-sm vs:leading-[30px] sm:w-[515px]">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </SectionWrapper>
      </div>

      {/* Judging Criteria */}
      <div className="border-b border-b-[#FFFFFF2E] pb-20 pt-10">
        <SectionWrapper className="flex flex-wrap items-center justify-center gap-0 vs:gap-10">
          <img
            className="mt-0 w-[332px] vs:w-[340px] xl:mt-64 xl:w-[680px]"
            src={criteria}
            alt=""
          />
          <div className="mt-0 vs:mt-10">
            <h3 className="text-center font-clash text-[20px] font-bold leading-[30px] text-white  vs:text-start vs:text-[32px] vs:leading-[42px]">
              Judging Criteria <br />
              <span className="text-purple">Key attributes</span>
            </h3>
            <div className="w-full text-center text-sm leading-[27px] text-white vs:text-left sm:w-[515px]">
              <p className="mt-5">
                <span className="text-pink2">Innovation and Creativity</span>:
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </p>
              <p className="mt-5">
                <span className="text-pink2">Functionality:</span> Assess how
                well the solution works. Does it perform its intended functions
                effectively and without major issues? Judges would consider the
                completeness and robustness of the solution.
              </p>
              <p className="mt-5">
                <span className="text-pink2">Impact and Relevance:</span>{" "}
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>
              <p className="mt-5">
                <span className="text-pink2">Technical Complexity:</span>{" "}
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </p>
              <p className="mt-5">
                <span className="text-pink2">
                  Adherence to Hackathon Rules:
                </span>{" "}
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.v
              </p>
            </div>
            <p className="mx-auto mt-6 flex h-[53px] w-[172px] cursor-pointer items-center justify-center rounded-[4px] bg-button text-white vs:mx-0 vs:mt-14">
              Read More
            </p>
          </div>
        </SectionWrapper>
      </div>

      {/* FAQs */}

      {/* Timelines */}

      {/* Prizes and Rewards */}
      <div className="border-b border-b-[#FFFFFF2E] pb-10 pt-10">
        <SectionWrapper>
          <div className="w-full text-center vs:text-start sm:w-[400px] lg:ml-auto">
            <h3 className="font-clash text-[20px] font-bold leading-[30px] text-white vs:text-[32px] vs:leading-[42px]">
              Prizes and
              <br />
              <span className="text-purple">Rewards</span>
            </h3>
            <p className="mt-5 text-center text-[13px] leading-[27px] text-white vs:text-left vs:text-sm vs:leading-[30px]">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
          <div className="flex flex-wrap items-end  justify-center gap-5">
            <img
              src={trophy}
              className="w-[294px] vs:w-[360px] xl:w-[540px]"
              alt=""
            />
            <img
              src={prizes}
              className="mt-12 w-[294px] vs:w-[360px] xl:w-[690px]"
              alt=""
            />
          </div>
        </SectionWrapper>
      </div>

      {/* Partners and Sponsors */}

      {/* Privacy Policy and terms */}

      {/* Footer */}
    </div>
  );
}

export default Home;
