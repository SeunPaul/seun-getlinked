import congratulation from "../assets/png/congratulation.png";

function Success({ setShow }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#464054d6] text-white">
      <div className="w-full rounded-lg border border-pink px-10 py-10 sm:w-[700px]">
        <img src={congratulation} />
        <h3 className="text-center text-[28px] font-bold">
          Congratulations you have successfully Registered!
        </h3>
        <p className="mx-auto w-[400px] text-center">
          Yes, it was easy and you did it! check your mail box for next step
        </p>

        <button
          className="mx-auto mt-8 flex h-[53px] w-full cursor-pointer items-center justify-center rounded-[4px] bg-button text-white"
          onClick={() => setShow(false)}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Success;
