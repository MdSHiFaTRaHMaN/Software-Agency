import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode, FaRegLightbulb } from "react-icons/fa";

const AboutWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false, // Animation happens only once
    });
  }, []);

  return (
    <div className="w-full lg:w-10/12 mx-auto my-7">
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
        <div
          className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#AF986F]"
          data-aos="fade-up"
        >
          <span className="text-center text-5xl group-hover:text-white">
            <FaLaptopCode />
          </span>
          <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize text-center group-hover:text-white">
            MODERN <br /> DESIGN
          </h1>
        </div>

        <div
          className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#AF986F]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <span className="text-center text-5xl group-hover:text-white">
            <FaRegLightbulb />
          </span>
          <h1 className="mt-4 text-2xl font-semibold text-gray-700 text-center capitalize group-hover:text-white">
            FAST <br /> LOADING
          </h1>
        </div>

        <div
          className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#AF986F]"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <span className="text-center text-5xl group-hover:text-white">
            <FaRegLightbulb />
          </span>
          <h1 className="mt-4 text-2xl font-semibold text-gray-700 text-center capitalize group-hover:text-white">
            100% <br /> RESPONSIVE
          </h1>
        </div>

        <div
          className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#AF986F]"
          data-aos="flip-left"
          data-aos-delay="600"
        >
          <span className="text-center text-5xl group-hover:text-white">
            <FaRegLightbulb />
          </span>
          <h1 className="mt-4 text-2xl font-semibold text-gray-700 text-center capitalize group-hover:text-white">
            SAVE & <br /> SECURE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutWork;