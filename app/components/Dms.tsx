import Image from "next/image";
import dmscontent from "../../public/assets/dmscontent.png";

export function Dms() {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-50 sm:py-16 py-5 pb-4 px-4 sm:px-0">
      <div className="flex-1 order-1 md:order-2">
        <div className="=w-full md:w-3/4 md:ml-20">
          <div>
            <p className="sm:text-4xl text-3xl font-extrabold sm:w-5/6 mb-4 text-black">
              Dealership Management System
            </p>
            <p className="text-gray-500 font-normal sm:text-xl">
              OneLot’s digital platform has been build with the single goal to
              help used car dealers to operate their business more efficiently.
            </p>
            <div className="font-medium text-black    mt-10 py-5 border-t border-b">
              <div className="flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="mr-2 flex-shrink-0"
                  style={{ color: "#57009C" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
                <p>
                  <span className="font-bold">Inventory Management:</span> Track
                  all details about your cars and sales in one place - from car
                  details to buyers. All you need to now in one place
                </p>
              </div>
              <div className="flex items-center my-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="mr-2 flex-shrink-0"
                  style={{ color: "#57009C" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
                <p>
                  <span className="font-bold">Marketing Tools:</span> Promote
                  your cars across all the different platforms. Write a
                  marketing text and upload on Facebook Marketplace, Groups,
                  Pages and Instagram with a single click of a button&nbsp;
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="mr-2 flex-shrink-0"
                  style={{ color: "#57009C" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
                <p>
                  <span className="font-bold">
                    Marketing Insights (Coming Soon):
                  </span>{" "}
                  Get insights on prices and volumes for all cars in the market.
                  We provide you all the date by combining data from various
                  sources with a single click of a button.&nbsp;
                </p>
              </div>
            </div>
            <p className="text-gray-500 font-normal sm:text-xl mt-5">
              Sign-up OneLot's dealer platform today, and your cars easier.
            </p>
          </div>
          <button
            type="button"
            className="bg-[#57009C]   text-white rounded-[0.5rem] lg:w-fit group items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-[#57009C] border border-transparent focus:ring-transparent dark:enabled:hover:bg-purple-900 dark:focus:ring-purple- rounded-lg focus:ring-2  sm:inline mx-auto mt-2 mb-5"
          >
            <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
              Explpore Now -&gt;
            </span>
          </button>
        </div>
      </div>
      <div className="jsx-38367939e324de66 flex-none order-3 md:order-3">
        <Image
          src={dmscontent}
          alt="Right Image"
          className="jsx-38367939e324de66"
        ></Image>
      </div>
    </div>
  );
}
