import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DesktopNavigation from "../components/DesktopNavigation";
import blur from "../assets/png/purple_blur.png";
import reg from "../assets/png/register.png";
import walk from "../assets/png/walk.png";
import Success from "../components/Success";

// api service
import ApiService from "../utils/apiServices";

function Register() {
  const [categoryOptions, setcategoryOptions] = useState([]);
  const [formLoading, setFormLoading] = useState(false);
  const [show, setShow] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm();

  const onSubmitForm = (formData) => {
    const data = {
      email: formData.email,
      phone_number: formData.phone,
      team_name: formData.teamName,
      group_size: formData.size,
      project_topic: formData.topic,
      category: formData.category,
      privacy_poclicy_accepted: formData.policy,
    };

    setFormLoading(true);

    ApiService.register(data)
      .then((res) => {
        if (res.status) {
          setFormLoading(false);
          setShow(true);
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

  useEffect(() => {
    ApiService.category()
      .then((res) => {
        if (res.status) {
          setcategoryOptions(res.data);
        }
      })
      .catch(() => {
        alert("error");
      });
  }, []);

  return (
    <div className="overflow-hidden pt-[91px] md:pt-[121px]">
      <DesktopNavigation page="register" />
      {show && <Success setShow={setShow} />}
      {/* register body */}
      <div className="relative mx-auto mt-4 flex max-w-[1400px] flex-col items-center justify-center gap-10 px-4 pb-32 xs:px-8 sm:mt-32 md:px-10 lg:flex-row lg:px-16 xl:gap-64 xl:px-24">
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
        <div className="relative z-10 text-white">
          <img className="animate-floating w-[300px] lg:w-[700px]" src={reg} />
        </div>
        <div className="rounded-[8px] px-1 py-12 vs:px-10 lg:bg-[#906b9a1f]">
          <h3 className="mb-2 w-full text-[32px] font-semibold text-purple vs:w-[350px]">
            Register
          </h3>
          <p className="flex items-end text-sm text-white">
            Be part of the movement <img src={walk} alt="" />
          </p>
          <h2 className="mt-6 text-[24px] text-white">CREATE YOUR ACCOUNT</h2>
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="relative w-full text-[14px]"
          >
            <div className="flex flex-wrap gap-4 sm:flex-nowrap">
              <div className="mt-8 w-[270px]">
                <p className="mb-1 text-white">Team's Name</p>
                <input
                  className="h-12 w-full rounded border bg-transparent px-4 text-white outline-none"
                  placeholder="Enter the name of your group"
                  {...register("teamName", {
                    required: "Enter your team name",
                  })}
                />
                {formState.errors.teamName && (
                  <>
                    <br />
                    <p className="text-xs text-pink2">
                      {formState.errors.teamName.message}
                    </p>
                  </>
                )}
              </div>
              <div className="mt-8 w-[270px]">
                <p className="mb-1 text-white">Phone</p>
                <input
                  className="h-12 w-full rounded border bg-transparent px-4 text-white outline-none"
                  placeholder="Enter your phone number"
                  {...register("phone", {
                    required: "Enter your phone number",
                  })}
                />
                {formState.errors.phone && (
                  <>
                    <br />
                    <p className="text-xs text-pink2">
                      {formState.errors.phone.message}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 sm:flex-nowrap">
              <div className="mt-8 w-[270px]">
                <p className="mb-1 text-white">Email</p>
                <input
                  className="h-12 w-full rounded border bg-transparent px-4 text-white outline-none"
                  placeholder="Enter your email address"
                  {...register("email", {
                    required: "Enter your email address",
                  })}
                />
                {formState.errors.email && (
                  <>
                    <br />
                    <p className="text-xs text-pink2">
                      {formState.errors.email.message}
                    </p>
                  </>
                )}
              </div>
              <div className="mt-8 w-[270px]">
                <p className="mb-1 text-white">Project Topic</p>
                <input
                  className="h-12 w-full rounded border bg-transparent px-4 text-white outline-none"
                  placeholder="What is your group project topic"
                  {...register("topic", {
                    required: "Enter your group project topic",
                  })}
                />
                {formState.errors.topic && (
                  <>
                    <br />
                    <p className="text-xs text-pink2">
                      {formState.errors.topic.message}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 sm:flex-nowrap">
              <div className="mt-8 w-[270px]">
                <p className="mb-1 text-white">Category</p>
                <select
                  className="h-12 w-full rounded border bg-transparent px-4 text-white outline-none"
                  placeholder="Select you category"
                  {...register("category", {
                    required: "select your category",
                  })}
                >
                  <option value="">Select you category</option>
                  {categoryOptions.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                {formState.errors.category && (
                  <>
                    <br />
                    <p className="text-xs text-pink2">
                      {formState.errors.category.message}
                    </p>
                  </>
                )}
              </div>
              <div className="mt-8 w-[270px]">
                <p className="mb-1 text-white">Group Size</p>
                <input
                  className="h-12 w-full rounded border bg-transparent px-4 text-white outline-none"
                  placeholder="What is your group size"
                  {...register("size", {
                    required: "Enter your group size",
                  })}
                />
                {formState.errors.size && (
                  <>
                    <br />
                    <p className="text-xs text-pink2">
                      {formState.errors.size.message}
                    </p>
                  </>
                )}
              </div>
            </div>
            <p className="mt-6 text-sm italic text-pink2">
              Please review your registration details before submitting
            </p>
            <div className="mt-2 flex gap-2">
              <input
                {...register("policy", {
                  required: "Accept policy",
                })}
                className="border bg-transparent"
                type="checkbox"
              />
              <p className="text-sm text-white">
                I agreed with the event terms and conditions and privacy policy
              </p>
            </div>
            <button
              className={`mx-auto mt-8 flex h-[53px] w-full cursor-pointer items-center justify-center rounded-[4px] bg-button text-white ${
                formLoading ? "cursor-progress" : ""
              }`}
              type="submit"
              disabled={formLoading}
            >
              {formLoading ? "Registering..." : "Register Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
