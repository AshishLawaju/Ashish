"use client";

import { RxCrossCircled } from "react-icons/rx";

const GetInTouch = ({ setShowGetInTouch }) => {
  return (
    <>
      {
        <div className="absolute z-50 backdrop-blur-sm top-0 right-0 w-[100vw] h-[100vh] flex justify-end ">
          <div className="bg-[#E3E0DE] dark:bg-primary-dark w-[500px] mt-4 rounded-3xl h-[95vh] py-5 px-7 ">
            <p className="text-4xl flex   gap-1">
              Hello, I&apos;d love to hear from you!{" "}
              <RxCrossCircled
                className="text-5xl hover:text-primary cursor-pointer "
                onClick={() => setShowGetInTouch(false)}
              />
            </p>

            <form action="">
              <div className="flex flex-col mt-5 ">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="w-full rounded h-10 p-1 outline-none"
                  placeholder="Full Name"
                />
              </div>
              <div className="flex flex-col mt-3 ">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="w-full rounded h-10 p-1 outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col mt-3 ">
                <label htmlFor="">Description</label>
                <textarea
                  className="w-full rounded h-40 p-1 outline-none"
                  placeholder="I need help with..."
                />
              </div>

              <button
                type="submit"
                className="px-7 mt-7 py-[10px] rounded-3xl bg-primary dark:bg-btn text-main-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      }
    </>
  );
};

export default GetInTouch;
