"use client";

import { useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import { Plus, Minus } from "lucide-react";

// Fonts configuration
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

// Type definitions
interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Can I afford a new home?",
    answer:
      "Building a new home depends on various factors including location, size, and finishes. We offer a range of plans to suit different budgets. Contact our financial advisors for a preliminary assessment.",
  },
  {
    question: "How long will it take to build my home?",
    answer:
      "Typically, construction takes between 6 to 10 months depending on the complexity of the design and weather conditions.",
  },
  {
    question: "What is the cost of building a new home?",
    answer:
      "Costs vary significantly based on the house design, land conditions, and inclusions. We provide a detailed tender so there are no hidden surprises.",
  },
  {
    question: "How do I find your display homes?",
    answer:
      "You can view our list of display home locations on our 'Locations' page, open daily from 10am to 5pm.",
  },
  {
    question: "Should I pick a land or home design block first?",
    answer:
      "Ideally, having a block of land helps us recommend a design that fits perfectly. However, we also offer House & Land packages if you haven't purchased land yet.",
  },
  {
    question: "Where do you build?",
    answer:
      "Bella Green Homes builds across the greater metropolitan area and selected regional districts. Check our build map for specific zones.",
  },
  {
    question: "Can I make changes to a floor plan?",
    answer:
      "Yes, we offer flexible floor plans. You can make structural changes or select from our predetermined design options.",
  },
  {
    question: "Is it better to knockdown and rebuild or renovate?",
    answer:
      "Knockdown rebuild is often more cost-effective than a major renovation and gives you a brand new home with a structural guarantee.",
  },
  {
    question: "What is a House and Land Package?",
    answer:
      "A House and Land package bundles the purchase of the block of land and the construction of the home into two contracts, streamlining the process.",
  },
];

export default function FaqSection() {
  // State for managing open accordion item
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`bg-[#F9F4EF] py-20 px-4 md:px-8 border-t border-b border-[#E5E0DB] ${playfair.variable} ${inter.variable}`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-20">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-start pt-2">
            <h2 className="font-serif text-4xl md:text-[42px] text-[#1a1a1a] mb-8 leading-[1.15]">
              New home builders frequently asked questions
            </h2>
            <div className="font-sans text-[#4a4a4a] text-[13px] leading-7 tracking-wide space-y-6 max-w-md">
              <p>
                Building your dream home should be an enjoyable experience, and
                with quite a few things to consider, a key step in this process
                is undertaking your initial research.
              </p>
              <p>
                Getting the right information upfront is really important, as we
                appreciate that it can get a little overwhelming initially.
                That’s where we can make it easier for you. The experienced team
                at{" "}
                <span className="font-semibold text-black">
                  Bella Green Homes
                </span>{" "}
                have gathered many useful and insightful materials to help get
                you into your new home sooner.
              </p>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 w-full">
            {/* Top Border */}
            <div className="border-t border-[#D3CEC9]" />

            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#D3CEC9]">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 flex items-center justify-between text-left group transition-colors hover:bg-black/5 px-2"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-serif text-[19px] text-[#1a1a1a] pr-6">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <Minus className="w-3 h-3 text-black stroke-[3]" />
                    ) : (
                      <Plus className="w-3 h-3 text-black stroke-[3]" />
                    )}
                  </span>
                </button>

                {/* Accordion Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] pb-6 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans text-[#4a4a4a] text-[13px] leading-6 px-2 pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
