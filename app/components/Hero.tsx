import Image from "next/image";
import Banner from "../../public/assets/home_hero_image.webp";
import Secur from "../../public/assets/sec.webp";

export function Hero() {
  return (
    <div className="pt-1">
      <div className="px-2 py-2.5 bg-white text-center pb-4 mt-8 sm:mt-24">
        <p className="sm:text-5xl text-3xl  sm:mb-8 mb-3 font-extrabold px-4 sm:px-20 xl:px-20 2xl:px-72 text-black">
          Grow your dealership with working capital loans and digital tools from
          OneLot
        </p>
        <p className="text-gray-500 font-normal px-4 sm:px-20 2xl:px-20 sm:w-2/3 2xl:w-1/2 mx-auto mb-1 sm:text-xl">
          We enable dealers to buy more cars through our inventory loan
          solutions and sell cars more efficiently through our Dealership
          Management System with its inventory management, marketing solutions
          and market insights
        </p>
        <br></br>
        <button
          type="button"
          className="bg-[#57009C]   text-white rounded-[0.5rem] lg:w-fit group items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-[#57009C] border border-transparent focus:ring-transparent dark:enabled:hover:bg-purple-900 dark:focus:ring-purple- rounded-lg focus:ring-2  sm:inline mx-auto mt-2 mb-5"
        >
          <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
            Inquire Now
          </span>
        </button>
      </div>
      <Image
        src={Banner}
        alt="home hero"
        loading="lazy"
        width="1300"
        height="1000"
        decoding="async"
        data-nimg="1"
        className="mx-auto "
      />
      <div>
        <p className="text-gray-500 text-center">Regulated by</p>
        <Image
          src={Secur}
          alt="sec"
          loading="lazy"
          width="180"
          height="100"
          decoding="async"
          data-nimg="1"
          className="mx-auto"
        />
      </div>
    </div>
  );
}
