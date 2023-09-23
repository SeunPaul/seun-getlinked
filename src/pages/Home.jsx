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
import faq from "../assets/png/faq.png";
import timeline from "../assets/png/Timeline.png";
import timelineM from "../assets/png/Timeline_mobile.png";
import trophy from "../assets/png/trophy.png";
import prizes from "../assets/png/prizes.png";
import green_check from "../assets/png/green_check.png";
import privacy from "../assets/png/privacy.png";
import partners from "../assets/png/partners.png";
import Footer from "../components/Footer";

function Home() {
  const [intervalId, setIntervalId] = useState();
  const [formattedCurrentTime, setFormattedCurrentTime] =
    useState("00 : 00 : 00 : 00");
  const announcementDate = new Date(2023, 8, 26, 12, 0, 0).getTime();

  const location = useLocation();
  const page = location.pathname.split("/")[1];

  const [faqs, setFaqs] = useState([
    {
      id: 1,
      show: false,
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
      id: 2,
      show: false,
      question: "What happens if I need help during the hackathon?",
      answer:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
      id: 3,
      show: false,
      question: "What happens if I don't have an idea for a project?",
      answer:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
      id: 4,
      show: false,
      question: "Can I join a team or do I have to come with one?",
      answer:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
      id: 5,
      show: false,
      question: "What happens after the hackathon ends",
      answer:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
      id: 6,
      show: false,
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
  ]);

  const toggleFaq = (id) => {
    setFaqs((prev) => {
      const newFaqs = prev.map((p) =>
        p.id === id ? { ...p, show: !p.show } : p
      );

      return newFaqs;
    });
  };

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
          <img
            src={tbi}
            alt=""
            className="animate-floating w-[264px] vs:w-[300px] xl:w-auto "
          />
          <div className="mt-0 text-center vs:mt-10 vs:text-start">
            <h3
              data-aos="fade-up"
              className="font-clash text-[20px] font-bold leading-[30px] text-white vs:text-[32px] vs:leading-[42px]"
            >
              Introduction to getlinked <br />
              <span className="text-purple">tech Hackathon 1.0</span>
            </h3>
            <p
              data-aos="fade-up"
              className="mt-5 w-full text-center text-[13px] leading-[27px] text-white vs:text-left vs:text-sm vs:leading-[30px] sm:w-[515px]"
            >
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
            className="animate-floating w-[294px] vs:w-[360px] xl:w-auto"
            alt=""
          />
          <div className="text-center vs:text-start">
            <h3
              data-aos="fade-up"
              className="font-clash text-[20px] font-bold leading-[30px] text-white vs:text-[32px] vs:leading-[42px]"
            >
              Rules and
              <br />
              <span className="text-purple">Guidelines</span>
            </h3>
            <p
              data-aos="fade-up"
              className="mt-5 w-full text-center text-[12px] leading-[27px] text-white vs:text-left vs:text-sm vs:leading-[30px] sm:w-[515px]"
            >
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
            className="animate-floating mt-0 w-[332px] vs:w-[340px] xl:mt-64 xl:w-[680px]"
            src={criteria}
            alt=""
          />
          <div className="mt-0 vs:mt-4">
            <h3
              data-aos="fade-up"
              className="text-center font-clash text-[20px] font-bold leading-[30px] text-white  vs:text-start vs:text-[32px] vs:leading-[42px]"
            >
              Judging Criteria <br />
              <span className="text-purple">Key attributes</span>
            </h3>
            <div className="w-full text-center text-[12px] leading-[27px] text-white vs:text-left vs:text-sm sm:w-[515px]">
              <p data-aos="fade-up" className="mt-5">
                <span className="text-pink2">Innovation and Creativity</span>:
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </p>
              <p data-aos="fade-up" className="mt-5">
                <span className="text-pink2">Functionality:</span> Assess how
                well the solution works. Does it perform its intended functions
                effectively and without major issues? Judges would consider the
                completeness and robustness of the solution.
              </p>
              <p data-aos="fade-up" className="mt-5">
                <span className="text-pink2">Impact and Relevance:</span>{" "}
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>
              <p data-aos="fade-up" className="mt-5">
                <span className="text-pink2">Technical Complexity:</span>{" "}
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </p>
              <p data-aos="fade-up" className="mt-5">
                <span className="text-pink2">
                  Adherence to Hackathon Rules:
                </span>{" "}
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.v
              </p>
            </div>
            <p
              data-aos="fade-up"
              className="mx-auto mt-6 flex h-[53px] w-[172px] cursor-pointer items-center justify-center rounded-[4px] bg-button text-white vs:mx-0 vs:mt-14"
            >
              Read More
            </p>
          </div>
        </SectionWrapper>
      </div>

      {/* FAQs */}
      <div className="border-b border-b-[#FFFFFF2E] pb-10 pt-10">
        <SectionWrapper className="flex flex-wrap items-center  justify-center gap-5">
          <div className="w-full sm:w-[515px]">
            <h3
              data-aos="fade-up"
              className="font-clash text-[20px] font-bold leading-[30px] text-white vs:text-[32px] vs:leading-[42px]"
            >
              Frequently Ask
              <br />
              <span className="text-purple">Question</span>
            </h3>
            <p
              data-aos="fade-up"
              className="mt-5 w-full text-[12px] leading-[27px] text-white vs:text-left vs:text-sm vs:leading-[30px] sm:w-[515px]"
            >
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </p>
            <div data-aos="fade-up" className="mt-16 text-white">
              {faqs.map((fa) => (
                <div
                  key={fa.id}
                  className={`mb-6 overflow-hidden border-b border-b-purple pb-2 transition-all ${
                    fa.show ? "h-34" : "h-10 vs:h-8"
                  }`}
                >
                  <div className="flex justify-between">
                    <p className="text-[12px] vs:text-[14px]">{fa.question}</p>
                    <p
                      className={`cursor-pointer text-[22px] text-purple transition-all ${
                        fa.show ? "rotate-45" : "rotate-0"
                      }`}
                      onClick={() => {
                        toggleFaq(fa.id);
                      }}
                    >
                      +
                    </p>
                  </div>
                  <p className="mt-1 text-[12px]">{fa.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={faq}
            className="animate-floating w-[294px] vs:w-[360px] xl:w-auto"
            alt=""
          />
        </SectionWrapper>
      </div>

      {/* Timelines */}
      <div className="pb-20 pt-20">
        <SectionWrapper className="">
          <h3
            data-aos="fade-up"
            className="text-center font-clash text-[20px] font-bold leading-[30px] text-white vs:text-[32px] vs:leading-[42px]"
          >
            Timeline
          </h3>
          <p
            data-aos="fade-up"
            className="mx-auto mt-5 w-full text-center text-[12px] leading-[27px] text-white xs:w-[300px] vs:w-[425px] vs:text-sm vs:leading-[30px]"
          >
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
          <div className="rounded-[5px] px-8 py-10 vs:px-28 vs:py-16">
            <img src={timeline} alt="" className="mx-auto hidden md:block " />
            <img src={timelineM} alt="" className="mx-auto md:hidden " />
          </div>
        </SectionWrapper>
      </div>

      {/* Prizes and Rewards */}
      <div className="pb-20 pt-10">
        <SectionWrapper>
          <div className="w-full text-center vs:text-start sm:w-[550px] lg:ml-auto">
            <h3
              data-aos="fade-up"
              className="font-clash text-[20px] font-bold leading-[30px] text-white vs:text-[32px] vs:leading-[42px]"
            >
              Prizes and
              <br />
              <span className="text-purple">Rewards</span>
            </h3>
            <p
              data-aos="fade-up"
              className="mt-5 w-full text-center text-[12px] leading-[27px] text-white vs:text-left vs:text-sm vs:leading-[30px] sm:w-[400px]"
            >
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
          <div className="flex flex-wrap items-end  justify-center gap-5">
            <img
              src={trophy}
              className="animate-floating w-[294px] vs:w-[360px] xl:w-[540px]"
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
      <div className="border-b border-b-[#FFFFFF2E] pb-20 pt-20">
        <SectionWrapper className="">
          <h3
            data-aos="fade-up"
            className="text-center font-clash text-[20px] font-bold leading-[30px] text-white vs:text-[32px] vs:leading-[42px]"
          >
            Partners and Sponsors
          </h3>
          <p
            data-aos="fade-up"
            className="mx-auto mt-5 w-full text-center text-[12px] leading-[27px] text-white vs:w-[425px] vs:text-sm vs:leading-[30px]"
          >
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
          <div
            data-aos="fade-up"
            className="mt-4 rounded-[5px] border border-purple px-8 py-10 vs:mt-20 vs:px-28 vs:py-32"
          >
            <img src={partners} alt="" className="mx-auto " />
          </div>
        </SectionWrapper>
      </div>

      {/* Privacy Policy and terms */}
      <div className="pb-10 pt-10">
        <SectionWrapper className="flex flex-wrap items-center  justify-center gap-5">
          <div className="text-center vs:text-start">
            <h3
              data-aos="fade-up"
              className="font-clash text-[20px] font-bold leading-[30px] text-white vs:text-[32px] vs:leading-[42px]"
            >
              Privacy Policy and
              <br />
              <span className="text-purple">Terms</span>
            </h3>
            <p
              data-aos="fade-up"
              className="text-[12px] text-[#FFFFFFBF] vs:text-sm"
            >
              Last updated on September 12, 2023
            </p>
            <p
              data-aos="fade-up"
              className="mt-5 w-full text-center text-[12px] leading-[27px] text-white vs:text-left vs:text-sm vs:leading-[30px] sm:w-[438px]"
            >
              Below are our privacy & policy, which outline a lot of goodies.
              it's our aim to always take of our participant
            </p>
            <div
              data-aos="fade-up"
              className="mt-16 w-full rounded-[5px] border border-purple bg-[#906b9a1f] px-4 py-10 text-start leading-[27px] text-white vs:w-[450px] vs:px-14 vs:py-14 vs:leading-[30px] xl:w-[569px]"
            >
              <p className="vs:text[14px] text-center text-[12px] vs:text-start ">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <p className="mt-4 text-[13px] text-purple vs:text-[16px]">
                Licensing Policy
              </p>
              <p className="vs:text[14px] text-[12px]">
                Here are terms of our Standard License:
              </p>
              <div className="mt-4 flex gap-2 leading-[27px]">
                <div>
                  <img src={green_check} alt="" className="mt-2 w-4" />
                </div>
                <p className="vs:text[14px] text-[12px]">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="mt-4 flex gap-2 leading-[27px]">
                <div>
                  <img src={green_check} alt="" className="mt-2" />
                </div>
                <p className="vs:text[14px] text-[12px]">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
              <p className="mx-auto mt-6 flex h-[53px] w-[172px] cursor-pointer items-center justify-center rounded-[4px] bg-button text-white">
                Read More
              </p>
            </div>
          </div>
          <img
            src={privacy}
            className="animate-floating w-[294px] vs:w-[360px] xl:w-auto"
            alt=""
          />
        </SectionWrapper>
      </div>
      {/* Footer */}
      <Footer page={page || "home"} />
    </div>
  );
}

export default Home;
