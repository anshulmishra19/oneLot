import Image from "next/image";
import trust from "../../public/assets/trust.webp";
import easy from "../../public/assets/easy.webp";
import fast from "../../public/assets/fast.webp";
import flexible from "../../public/assets/flexible.png";
import high_amount from "../../public/assets/high_amount.webp";

export function WhyOneLot() {
  return (
    <div className="bg-white text-center px-16 sm:py-24 py-8 border-t border-b">
      <p className="text-4xl font-extrabold mb-8">Why Onelot?</p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center items-center">
        <div
          data-testid="flowbite-card"
          className="bg-white shadow-md  flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80"
        >
          <div className="flex h-full flex-col justify-center gap-4 p-5">
            <div className="h-1/3 flex items-center justify-center mb-0">
              <div className="p-0">
                <Image
                  src={trust}
                  alt="image"
                  loading="lazy"
                  width="64"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                ></Image>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-0 h-1/3 overflow-hidden w-full">
              <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">
                Trust
              </p>
              <p className="text-sm text-gray-500 text-center px-4 overflow-hidden">
                Regulated by Securities and Exchange Commission (SEC)
                Philippines
              </p>
            </div>
          </div>
        </div>
        <div
          data-testid="flowbite-card"
          className="bg-white shadow-md  flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80"
        >
          <div className="flex h-full flex-col justify-center gap-4 p-5">
            <div className="h-1/3 flex items-center justify-center mb-0">
              <div className="p-0">
                <Image
                  src={high_amount}
                  alt="image"
                  loading="lazy"
                  width="64"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                ></Image>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-0 h-1/3 overflow-hidden w-full">
              <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">
                High Amount
              </p>
              <p className="text-sm text-gray-500 text-center px-4 overflow-hidden">
                Get the highest loan amounts compared to other banks and lenders
              </p>
            </div>
          </div>
        </div>
        <div
          data-testid="flowbite-card"
          className="bg-white shadow-md  flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80"
        >
          <div className="flex h-full flex-col justify-center gap-4 p-5">
            <div className="h-1/3 flex items-center justify-center mb-0">
              <div className="p-0">
                <Image
                  src={fast}
                  alt="image"
                  loading="lazy"
                  width="64"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                ></Image>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-0 h-1/3 overflow-hidden w-full">
              <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">
                Fast
              </p>
              <p className="text-sm text-gray-500 text-center px-4 overflow-hidden">
                Get the money within a few hours on the same day
              </p>
            </div>
          </div>
        </div>
        <div
          data-testid="flowbite-card"
          className="bg-white shadow-md  flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80"
        >
          <div className="flex h-full flex-col justify-center gap-4 p-5">
            <div className="h-1/3 flex items-center justify-center mb-0">
              <div className="p-0">
                <Image
                  src={flexible}
                  alt="image"
                  loading="lazy"
                  width="64"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                ></Image>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-0 h-1/3 overflow-hidden w-full">
              <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">
                Flexible
              </p>
              <p className="text-sm text-gray-500 text-center px-4 overflow-hidden">
                Loans are tailored to your needs
              </p>
            </div>
          </div>
        </div>
        <div
          data-testid="flowbite-card"
          className="bg-white shadow-md  flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80"
        >
          <div className="flex h-full flex-col justify-center gap-4 p-5">
            <div className="h-1/3 flex items-center justify-center mb-0">
              <div className="p-0">
                <Image
                  src={easy}
                  alt="image"
                  loading="lazy"
                  width="64"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                ></Image>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-0 h-1/3 overflow-hidden w-full">
              <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">
                Easy
              </p>
              <p className="text-sm text-gray-500 text-center px-4 overflow-hidden">
                Run through an easy process and get your first loans within days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
