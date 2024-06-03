import Image from "next/image";
import Lourice from "../../public/assets/Lourice.webp";
import PMB from "../../public/assets/PMB.webp";
import Avatar_1 from "../../public/assets/Avatar_1.webp";
import Avatar_2 from "../../public/assets/Avatar_2.png";

export function Testimonials() {
  return (
    <div className="jsx-d9c8a22ba0ccf268 bg-gray-50 text-center px-14 py-14">
      <p className="jsx-d9c8a22ba0ccf268 text-2xl font-bold 4xl:-mb-5">
        Testimonials
      </p>
      <div className="jsx-d9c8a22ba0ccf268 h-96 sm:h-64 xl:h-80 2xl:h-96">
        <div className="relative h-full w-full" data-testid="carousel">
          <div className="flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg snap-x indiana-scroll-container indiana-scroll-container--hide-scrollbars indiana-scroll-container--native-scroll">
            <div
              className="w-full flex-shrink-0 transform cursor-grab snap-center"
              data-active="false"
              data-testid="carousel-item"
            >
              <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 jsx-d9c8a22ba0ccf268 flex flex-col justify-center text-center">
                <div className="w-32 h-32 rounded-full mx-auto overflow-hidden">
                  <Image
                    src={Lourice}
                    alt="Lourice Trading"
                    loading="lazy"
                    width="128"
                    height="128"
                    decoding="async"
                    data-nimg="1"
                    className="rounded-full"
                  ></Image>
                </div>
                <p className="jsx-d9c8a22ba0ccf268 my-4 font-semibold sm:text-2xl sm:w-1/2 mx-auto clamp-3-lines">
                  “OneLot helped me to replace my previous financier and buy
                  more car loans with their dealer inventory loan solutions”
                </p>
                <div className="jsx-d9c8a22ba0ccf268 flex flex-col sm:flex-row items-center justify-center">
                  <p className="jsx-d9c8a22ba0ccf268 text-black font-bold sm:mr-4 text-xl">
                    Lourice Trading
                  </p>
                  <p className="jsx-d9c8a22ba0ccf268 text-gray-500 sm:mt-0 mt-2">
                    Quezon City
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full flex-shrink-0 transform cursor-grab snap-center"
              data-active="false"
              data-testid="carousel-item"
            >
              <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 jsx-d9c8a22ba0ccf268 flex flex-col justify-center text-center">
                <div className="w-32 h-32 rounded-full mx-auto overflow-hidden">
                  <Image
                    src={PMB}
                    alt="Lourice Trading"
                    loading="lazy"
                    width="128"
                    height="128"
                    decoding="async"
                    data-nimg="1"
                    className="rounded-full"
                  ></Image>
                </div>
                <p className="jsx-d9c8a22ba0ccf268 my-4 font-semibold sm:text-2xl sm:w-1/2 mx-auto clamp-3-lines">
                  "OneLot was very supportive in providing a loan for the next
                  car auction when you need funds fast”
                </p>
                <div className="jsx-d9c8a22ba0ccf268 flex flex-col sm:flex-row items-center justify-center">
                  <p className="jsx-d9c8a22ba0ccf268 text-black font-bold sm:mr-4 text-xl">
                    PMB
                  </p>
                  <p className="jsx-d9c8a22ba0ccf268 text-gray-500 sm:mt-0 mt-2">
                    Quezon City
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full flex-shrink-0 transform cursor-grab snap-center"
              data-active="false"
              data-testid="carousel-item"
            >
              <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 jsx-d9c8a22ba0ccf268 flex flex-col justify-center text-center">
                <div className="w-32 h-32 rounded-full mx-auto overflow-hidden">
                  <Image
                    src={Avatar_1}
                    alt="Lourice Trading"
                    loading="lazy"
                    width="128"
                    height="128"
                    decoding="async"
                    data-nimg="1"
                    className="rounded-full"
                  ></Image>
                </div>
                <p className="jsx-d9c8a22ba0ccf268 my-4 font-semibold sm:text-2xl sm:w-1/2 mx-auto clamp-3-lines">
                  “The service of OneLot is top-notch, they act fast and can
                  provide dealers with the funds they need, when they need it.”
                </p>
                <div className="jsx-d9c8a22ba0ccf268 flex flex-col sm:flex-row items-center justify-center">
                  <p className="jsx-d9c8a22ba0ccf268 text-black font-bold sm:mr-4 text-xl">
                    Mark Vergel de Dios
                  </p>
                  <p className="jsx-d9c8a22ba0ccf268 text-gray-500 sm:mt-0 mt-2">
                    Owner, MVD Auto Works
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full flex-shrink-0 transform cursor-grab snap-center"
              data-active="false"
              data-testid="carousel-item"
            >
              <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 jsx-d9c8a22ba0ccf268 flex flex-col justify-center text-center">
                <div className="w-32 h-32 rounded-full mx-auto overflow-hidden">
                  <Image
                    src={Avatar_2}
                    alt="Lourice Trading"
                    loading="lazy"
                    width="128"
                    height="128"
                    decoding="async"
                    data-nimg="1"
                    className="rounded-full"
                  ></Image>
                </div>
                <p className="jsx-d9c8a22ba0ccf268 my-4 font-semibold sm:text-2xl sm:w-1/2 mx-auto clamp-3-lines">
                  “OneLot's robust technology and appraisal system is providing
                  a boost to used car dealers in NCR. ”
                </p>
                <div className="jsx-d9c8a22ba0ccf268 flex flex-col sm:flex-row items-center justify-center">
                  <p className="jsx-d9c8a22ba0ccf268 text-black font-bold sm:mr-4 text-xl">
                    Felipe Estrella
                  </p>
                  <p className="jsx-d9c8a22ba0ccf268 text-gray-500 sm:mt-0 mt-2">
                    CFO, AC Industrials (Ayala)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute sm:bottom-0 xl:bottom-[-20px] 2xl:bottom-5 left-1/2 flex -translate-x-1/2 space-x-3">
            <button
              className="h-3 w-3 rounded-full bg-gray-500 hover:bg-black dark:bg-gray-800/50 dark:hover:bg-gray-800"
              data-testid="carousel-indicator"
              aria-label="Slide 1"
            ></button>
            <button
              className="h-3 w-3 rounded-full bg-black dark:bg-gray-800"
              data-testid="carousel-indicator"
              aria-label="Slide 2"
            ></button>
            <button
              className="h-3 w-3 rounded-full bg-gray-500 hover:bg-black dark:bg-gray-800/50 dark:hover:bg-gray-800"
              data-testid="carousel-indicator"
              aria-label="Slide 3"
            ></button>
            <button
              className="h-3 w-3 rounded-full bg-gray-500 hover:bg-black dark:bg-gray-800/50 dark:hover:bg-gray-800"
              data-testid="carousel-indicator"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none invisible sm:visible">
            <button
              className="group"
              data-testid="carousel-left-control"
              type="button"
              aria-label="Previous slide"
            >
              &lt;-
            </button>
          </div>
          <div className="absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none invisible sm:visible">
            <button
              className="group"
              data-testid="carousel-right-control"
              type="button"
              aria-label="Next slide"
            >
              -&gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
