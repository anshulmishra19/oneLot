import Image from "next/image";
import announcement from "../../public/assets/announcement.webp";
import loanicon from "../../public/assets/loanicon.svg";

export function Loandeal() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 px-4 sm:px-20 2xl:px-40 mt-10 py-5 border-t border-b">
      <div className="mb-3 sm:pr-20 sm:pt-10">
        <div className="2xl:pl-32 2xl:pr-8">
          <p className="text-black text-3xl sm:text-4xl font-extrabold">
            Everything you need to grow your business
          </p>
          <p className="text-gray-500 sm:text-xl mt-4 sm:mt-10">
            OneLot is your trusted lending and financing partner, exclusively
            tailored for used car dealership. We also offer digital tools for
            streamlined operations and growth of your dealership.
          </p>
          <p className="text-[#57009C] mt-3 font-medium sm:ml-0">
            <a href="#">Learn more -&gt;</a>
          </p>
        </div>
      </div>

      <div className="mb-3 2xl:pr-40 sm:pt-10">
        <div className="flex items-center mb-4">
          <Image
            src={loanicon}
            loading="lazy"
            alt="icon"
            width={25}
            height={40}
            data-nimg="1"
            className="mr-2"
            decoding="async"
          ></Image>
          <p className="text-xl font-bold">Dealer Inventory Loans</p>
        </div>
        <p className="text-[#7E3AF2] my-4 font-medium sm:ml-10">
          Accelerate your growth with tailored loan solutions
        </p>
        <p className="text-gray-500 mb-4 sm:ml-10">
          Get comprehensive car financing solutions, unlock the potential of
          your dealership and take it to new heights.
        </p>

        <div className="mb-3 2xl:pr-40 sm:pt-10">
          <div className="flex items-center mb-4">
            <Image
              src={announcement}
              loading="lazy"
              alt="icon"
              width={25}
              height={40}
              data-nimg="1"
              className="mr-2"
              decoding="async"
            ></Image>
            <p className="text-xl font-bold">Dealership Management System</p>
          </div>
          <p className="text-[#7E3AF2] my-4 font-medium sm:ml-10">
            Enhance Efficiency and Sales with free digital tools for car
            dealerships
          </p>
          <p className="text-gray-500 mb-4 sm:ml-10">
            OneLot offers a suite of powerful digital tools designed to optimize
            your dealership's operations.
          </p>
        </div>
      </div>
    </div>
  );
}
