"use client";

import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";

/*Create Array of item which will contain Ques & ans */

const items = [
  {
    question: "How do i apply for a loan?",
    answer:
      "Clients must comply with our requirements to submit relevant information such as business details, IDs, bank statements, and details of the car(s) they wish to collateralize. Eligibility criteria include being BIR-registered, operating in the secondhand car market in the Philippines for at least 1 year, and being based in Metro Manila (NCR).",
  },
  {
    question: "What is OneLot?",
    answer:
      "Clients must comply with our requirements to submit relevant information such as business details, IDs, bank statements, and details of the car(s) they wish to collateralize. Eligibility criteria include being BIR-registered, operating in the secondhand car market in the Philippines for at least 1 year, and being based in Metro Manila (NCR).",
  },
  {
    question: " interest rates offered?",
    answer:
      "Clients must comply with our requirements to submit relevant information such as business details, IDs, bank statements, and details of the car(s) they wish to collateralize. Eligibility criteria include being BIR-registered, operating in the secondhand car market in the Philippines for at least 1 year, and being based in Metro Manila (NCR).",
  },
  {
    question: " Kind of Vehicle can i upload?",
    answer:
      "Clients must comply with our requirements to submit relevant information such as business details, IDs, bank statements, and details of the car(s) they wish to collateralize. Eligibility criteria include being BIR-registered, operating in the secondhand car market in the Philippines for at least 1 year, and being based in Metro Manila (NCR).",
  },
];

export function Faqs() {
  return (
    <div className="bg-gray-50 px-8 py-20 text-center text-gray-500">
      <p className="text-4xl font-extrabold mb-8 text-center text-black">
        Frequently asked questions
      </p>
      <div className=" text-center">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="  mb-8 text-center text-black  flex flex-col gap-y-4 "
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className=" items-center p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="text-center flex w-full items-center justify-between">
                    <p className="text-center font-medium text-[#172026] ">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="See more"
                        className="h-10 w-10 lg:w-6 lg:h-6 text-center"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
        <button
          type="button"
          className="bg-[#57009C]   text-white rounded-[0.5rem] lg:w-fit group items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-[#57009C] border border-transparent focus:ring-transparent dark:enabled:hover:bg-purple-900 dark:focus:ring-purple- rounded-lg focus:ring-2  sm:inline mx-auto mt-2 mb-5"
        >
          <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
            See all -&gt;
          </span>
        </button>
      </div>
    </div>
  );
}
/*Go to Radix UI for Faqs*/
