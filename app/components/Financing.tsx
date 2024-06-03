import Image from "next/image";
import carfinancing from "../../public/assets/carfinancing.png";

export function Financing() {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-50 sm:py-16 py-5 pb-4 px-4 sm:px-0">
      <div className="jsx-6ec48602707081eb flex-none order-2 sm:order-1 mb-4 sm:mb-0">
        <Image
          src={carfinancing}
          alt="Left Image"
          className="jsx-6ec48602707081eb"
        ></Image>
      </div>
      <div className="flex-1 order-1 md:order-2">
        <div className="w-full md:w-3/4 md:ml-20">
          <div className="py-3 sm:py-0">
            <p className="sm:text-4xl text-3xl font-extrabold text-black">
              Car Financing
            </p>
            <p className="text-xl font-semibold my-4 text-black">
              Dealer Inventory Loans
            </p>
            <p className="text-gray-500 font-normal sm:text-xl">
              OneLot's working capital loans allows car dealer to buy more cars
              and capitalize on car purchase opportunities you would otherwise
              have missed. We transfer the money to your account within 6 hours.
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
                  Interest as low as 1.5% per month with daily calculation of
                  interest
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
                <p>Financing up to 70% of the vehicle purchase</p>
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
                  Financing period up to 90 days with flexible repayment
                  schedule at any point
                </p>
              </div>
            </div>
            <p className="text-gray-500 font-normal sm:text-xl mt-5">
              Use OneLot's financing solution today, grow the number of cars in
              your lot and increase your profits
            </p>
          </div>
          <button
            type="button"
            className="bg-[#57009C]   text-white rounded-[0.5rem] lg:w-fit group items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-[#57009C] border border-transparent focus:ring-transparent dark:enabled:hover:bg-purple-900 dark:focus:ring-purple- rounded-lg focus:ring-2  sm:inline mx-auto mt-2 mb-5"
          >
            <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
              View Loans -&gt;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
