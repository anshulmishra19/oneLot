import Image from "next/image";

export function Contact() {
  return (
    <div className="bg-white">
      <div className="text-center px-8 py-20">
        <p className="sm:text-4xl text-3xl mb-8 font-extrabold">
          Get started today
        </p>
        <p className="text-gray-500 font-normal text-xl sm:w-1/2 mx-auto">
          We look forward to serving the needs of used car dealers across the
          Philippines and helping them thrive in this dynamic market.
        </p>
        <button
          type="button"
          className="bg-[#57009C]   text-white rounded-[0.5rem] lg:w-fit group items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-[#57009C] border border-transparent focus:ring-transparent dark:enabled:hover:bg-purple-900 dark:focus:ring-purple- rounded-lg focus:ring-2  sm:inline mx-auto mt-5 mb-5"
        >
          <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
            Inquire Now
          </span>
        </button>
      </div>
    </div>
  );
}
