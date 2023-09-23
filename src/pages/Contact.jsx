import { useState } from "react";
import { useForm } from "react-hook-form";
import DesktopNavigation from "../components/DesktopNavigation";
import blur from "../assets/png/purple_blur.png";
import instagram from "../assets/png/instagram.png";
import twitter from "../assets/png/twitter.png";
import facebook from "../assets/png/facebook.png";
import linkedin from "../assets/png/linkedin.png";

// api service
import ApiService from "../utils/apiServices";

function Contact() {
  const [formLoading, setFormLoading] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm();

  const onSubmitForm = (formData) => {
    const data = {
      email: formData.mail,
      first_name: formData.firstName,
      message: formData.message,
    };

    setFormLoading(true);

    ApiService.contact(data)
      .then((res) => {
        if (res.status) {
          setFormLoading(false);
          alert("SUccess");
        } else {
          setFormLoading(false);
          alert(res.message);
        }

        reset();
      })
      .catch(() => {
        setFormLoading(false);
        alert("error");
      });
  };

  return (
    <div className="overflow-hidden pt-[91px] md:pt-[121px]">
      <DesktopNavigation page="contact" />
      {/* contact body */}
      <div className="relative mx-auto mt-4 flex max-w-[1400px] items-center justify-center gap-10 px-4 pb-32 xs:px-8 sm:mt-32 md:px-10 lg:px-16 xl:gap-64 xl:px-24">
        <img
          className="absolute -left-96 top-1/2 -translate-y-1/2"
          src={blur}
          alt=""
        />
        <img
          className="absolute -bottom-[400px] -right-[450px]"
          src={blur}
          alt=""
        />
        <div className="relative z-10 hidden text-white lg:block">
          <h3 className="mb-5 text-[32px] font-semibold text-purple">
            Get in touch
          </h3>
          <p className="mb-4 w-[96px]">Contact Information</p>
          <p className="mb-4 w-[119px]">
            27,Alara Street Yaba 100012 Lagos State
          </p>
          <p className="mb-4">Call Us : 07067981819</p>
          <p className="mb-4 w-[272px]">
            we are open from Monday-Friday 08:00am - 05:00pm
          </p>
          <p className="mt-10 text-purple">Share on</p>
          <div className="mt-2 flex items-center gap-4">
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
        <div className="rounded-[8px] px-1 py-12 vs:px-20 lg:bg-[#906b9a1f]">
          <h3 className="mb-2 w-full text-[20px] font-semibold text-purple vs:w-[350px]">
            Questions or need assistance? Let us know about it!
          </h3>
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="relative w-full vs:w-[400px]"
          >
            <input
              className="mt-8 h-12 w-full rounded border bg-transparent px-4 text-white outline-none"
              placeholder="First Name"
              {...register("firstName", { required: "Enter your first name" })}
            />
            {formState.errors.firstName && (
              <>
                <br />
                <p className="text-xs text-pink2">
                  {formState.errors.firstName.message}
                </p>
              </>
            )}
            <input
              className="mt-8 h-12 w-full rounded border bg-transparent px-4 text-white outline-none"
              placeholder="Mail"
              {...register("mail", { required: "Enter your mail" })}
            />
            {formState.errors.mail && (
              <>
                <br />
                <p className="text-xs text-pink2">
                  {formState.errors.mail.message}
                </p>
              </>
            )}
            <textarea
              className="mt-8 h-40 w-full rounded border bg-transparent px-4 py-2 text-white outline-none"
              placeholder="Message"
              {...register("message", { required: "Enter your message" })}
            ></textarea>
            {formState.errors.message && (
              <>
                <br />
                <p className="text-xs text-pink2">
                  {formState.errors.message.message}
                </p>
              </>
            )}
            <button
              className={`mx-auto mt-8 flex h-[53px] w-[172px] cursor-pointer items-center justify-center rounded-[4px] bg-button text-white ${
                formLoading ? "cursor-progress" : ""
              }`}
              type="submit"
              disabled={formLoading}
            >
              {formLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
          <div className="mx-auto flex flex-col items-center lg:hidden">
            <p className="mt-10 text-purple">Share on</p>
            <div className="mt-2 flex items-center gap-4">
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
