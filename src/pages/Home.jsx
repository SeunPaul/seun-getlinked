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
    <div className="pt-[91px] md:pt-[121px] overflow-hidden">
      {/* Hero Section */}
      <div className="border-b border-b-[#FFFFFF2E]">
        <DesktopNavigation page={page || "home"} />
        <SectionWrapper className="relative h-[700px] fold:h-[850px]">
          <img className="absolute hidden vs:block right-0 object-cover" src={metrix} alt="" />
          <img className="absolute -left-20 vs:left-10 w-full lg:w-[800px]" src={hpl} alt="" />
          <h2 className="pt-8 text-center vs:text-right text-[12px] fold:text-[15px] xs:text-[16px] md:text-[26px] lg:text-[36px] font-bold italic text-white">
            <p className="animate-typing overflow-hidden whitespace-nowrap">
              Igniting a Revolution in HR Innovation
            </p>
            <img src={underline} className="ml-auto w-[120px] md:w-[180px] lg:w-auto" />
          </h2>
          <div className="z-10 relative mt-[60px] vs:mt-[100px] w-full vs:w-[460px] md:w-[600px] lg:w-[750px]">
            <img
              className="animate-bigpulse absolute  w-4 left-24 vs:w-auto -top-8 vs:-top-32 vs:left-16"
              src={star}
              alt=""
            />
            <img
              className="animate-bigpulse absolute  w-2 vs:w-auto -top-8 vs:-top-16 right-5"
              src={star}
              alt=""
            />
            <div className="flex flex-col items-center vs:block">
              <p className="relative font-clash text-[26px] xs:text-[32px] vs:text-[40px] md:text-[60px] lg:text-[80px] font-bold leading-[30px] vs:leading-[50px] lg:leading-[98px] text-white">
                getlinked Tech
                <img
                  src={creative}
                  alt=""
                  className="absolute -top-6 vs:-top-8 md:-top-12 w-[20px] vs:w-[30px] md:w-[40px] lg:w-auto right-4 vs:right-[180px]"
                />
              </p>
              <div className="flex items-end text-[26px] xs:text-[32px] vs:text-[40px] md:text-[60px] lg:text-[80px] font-bold  text-white">
                <p className="font-clash">Hackathon <span className="text-purple ">1.0</span></p>
                <div className="flex items-center vs:ml-2 pb-2 md:pb-4">
                  <img src={chain} alt="" className="h-[30px] w-[30px] vs:h-[50px] vs:w-[50px] lg:h-[86px] lg:w-[86px]" />
                  <img src={blast} alt="" className="h-[25px] w-[25px] vs:h-[40px] vs:w-[40px] lg:h-[58px] lg:w-[58px]" />
                </div>
              </div>
              <p className="text-center vs:text-start mt-4 w-[264px] vs:w-[340px] md:w-[400px] lg:w-[522px] text-[13px] vs:text-[17px] md:text-[20px] font-normal text-white">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
            </div>
            <Link
              to="/register"
              className="mt-6 vs:mt-14 mx-auto vs:mx-0 flex h-[53px] w-[172px] items-center justify-center rounded-[4px] bg-button text-white"
            >
              Register
            </Link>
            <div className="relative mt-6 vs:mt-20 flex w-[270px] vs:w-[300px] mx-auto vs:mx-0 items-end text-white">
              <p className="font-unica text-[38px] xs:text-[48px] vs:text-[64px] font-normal">
                {formattedCurrentTime.split(":")[0]}
              </p>
              <p className="mr-4 vs:mr-6 pb-3 xs:pb-4 vs:pb-6 text-[12px] xs:text-[14px]">D</p>
              <p className="font-unica text-[38px] xs:text-[48px] vs:text-[64px] font-normal">
                {formattedCurrentTime.split(":")[1]}
              </p>
              <p className="mr-4 vs:mr-6 pb-3 xs:pb-4 vs:pb-6 text-[12px] xs:text-[14px]">H</p>
              <p className="font-unica text-[38px] xs:text-[48px] vs:text-[64px] font-normal">
                {formattedCurrentTime.split(":")[2]}
              </p>
              <p className="mr-4 vs:mr-6 pb-3 xs:pb-4 vs:pb-6 text-[12px] xs:text-[14px]">M</p>
              <p className="font-unica text-[38px] xs:text-[48px] vs:text-[64px] font-normal">
                {formattedCurrentTime.split(":")[3]}
              </p>
              <p className="mr-4 vs:mr-6 pb-3 xs:pb-4 vs:pb-6 text-[12px] xs:text-[14px]">S</p>
              <img
                className="animate-bigpulse absolute w-2 vs:w-auto right-0 vs:-right-32 -top-10"
                src={star}
                alt=""
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 h-[850px] w-full vs:w-[500px] lg:w-[800px] overflow-hidden">
            <img className="absolute hidden md:block right-0 lg:-right-32 top-0 z-[2]" src={hpl} alt="" />
            <img className="absolute bottom-0 z-[1]" src={mwsgtvs} alt="" />
            <img
              className="absolute right-0 lg:right-16 bottom-0 vs:bottom-[20px] w-[450px] lg:w-auto lg:bottom-[85px] z-[3] animate-pulse"
              src={glowing_sphere}
              alt=""
            />
          </div>
        </SectionWrapper>
      </div>

      {/* Overview */}
      <div className="pt-10 pb-20 border-b border-b-[#FFFFFF2E]">
        <SectionWrapper className="flex flex-wrap justify-center items-center gap-20">
          <img src={tbi} alt=""/>
          <div className="w-1/2 mt-10">
            <h3 data-aos="fade-up" className="text-white text-[32px] font-bold font-clash leading-[42px]">
              Introduction to getlinked <br />
              <span className="text-purple">tech Hackathon 1.0</span>
            </h3>
            <p className="text-white w-[535px] text-sm mt-5 leading-[27px] text-center vs:text-left">
                Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a 
                design maverick, or a concept wizard, you'll have the chance to transform 
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!
              </p>
          </div>
        </SectionWrapper>
      </div>

      {/* Rules and Guidelines */}
      <div className="pt-10 pb-10 border-b border-b-[#FFFFFF2E]">
        <SectionWrapper className="flex flex-wrap flex-row-reverse justify-center  items-center gap-5">
          <img src={rules} alt=""/>
          <div className="w-1/2 mt-10">
            <h3 className="text-white text-[32px] font-bold font-clash leading-[42px]">
              Rules and<br />
              <span className="text-purple">Guidelines</span>
            </h3>
            <p className="text-white w-[535px] text-sm mt-5 leading-[27px] text-center vs:text-left">
                Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a 
                design maverick, or a concept wizard, you'll have the chance to transform 
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!
              </p>
          </div>
        </SectionWrapper>
      </div>

      {/* Judging Criteria */}
      <div className="pt-10 pb-20 border-b border-b-[#FFFFFF2E]">
        <SectionWrapper className="flex flex-wrap justify-center items-center gap-20">
          <img src={criteria} alt=""/>
          <div className="w-1/2 mt-10">
            <h3 className="text-white text-[32px] font-bold font-clash leading-[42px]">
              Judging Criteria <br />
              <span className="text-purple">Key attributes</span>
            </h3>
            <p className="text-white w-[535px] text-sm mt-5 leading-[27px] text-center vs:text-left">
              <span className="text-pink2">Innovation and Creativity</span>: Evaluate the uniqueness and creativity of the
              solution. Consider whether it addresses a real-world problem in a novel 
              way or introduces innovative features.
            </p>
            <p className="text-white w-[535px] text-sm mt-5 leading-[27px] text-center vs:text-left">
              <span className="text-pink2">Functionality:</span> Assess how well the solution works. Does it perform its 
              intended functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
              </p>
            <p className="text-white w-[535px] text-sm mt-5 leading-[27px] text-center vs:text-left">
              <span className="text-pink2">Impact and Relevance:</span> Determine the potential impact of the solution 
              in the real world. Does it address a significant problem, and is it relevant 
              to the target audience? Judges would assess the potential social, 
              economic, or environmental benefits.
            </p>
            <p className="text-white w-[535px] text-sm mt-5 leading-[27px] text-center vs:text-left">
              <span className="text-pink2">Technical Complexity:</span> Evaluate the technical sophistication of the solution. 
              Judges would consider the complexity of the code, the use of advanced 
              technologies or algorithms, and the scalability of the solution.
            </p>
            <p className="text-white w-[535px] text-sm mt-5 leading-[27px] text-center vs:text-left">
              <span className="text-pink2">Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered 
              to the rules and guidelines of the hackathon, including deadlines, use of 
              specific technologies or APIs, and any other competition-specific requirements.v
            </p>
            <Link
              to="/register"
              className="mt-6 vs:mt-14 mx-auto vs:mx-0 flex h-[53px] w-[172px] items-center justify-center rounded-[4px] bg-button text-white"
            >
              Register
            </Link>
          </div>
        </SectionWrapper>
      </div>

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
