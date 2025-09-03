import React from "react";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const CaseStudy = () => {
  return (
    <div>
      <section className="case-study-block style-one lg:pt-[100px] sm:pt-16 pt-10">
        <div className="container">
          <div className="heading text-center">
            <h3 className="heading3">Case Studies</h3>
            <div className="right flex flex-col items-center gap-2 mt-3">
              <div className="body3">
                Exploring In-Depth and Inspiring Case Studies of Success Stories
              </div>
              <Link className="flex items-center gap-2 hover:text-blue duration-300" href="/">
                <div className="text-button">
                  View Our Case Studies
                </div>
                <Icon.CaretDoubleRight className="text-xs mt-1" weight="bold" />
              </Link>
            </div>
          </div>
        </div>
        <div className="list-case-study md:mt-10 mt-6">
          <div className="list grid lg:grid-cols-4 sm:grid-cols-2">
            <div className="w-full">
              <div className="case-study-item">
                <div className="bg-img">
                  <Image
                    src="/images/casefour.webp"
                    alt="img"
                    width={5000}
                    height={5000}
                    objectFit="cover"
                    className="w-full h-full block"
                  />
                </div>
                <div className="text flex flex-col justify-between gap-3">
                  <div className="heading5">
                    <Link className="text-white" href="/">
                      payment solution
                    </Link>
                  </div>
                  <div className="body2 text-white">
                    A comprehensive payment solution for businesses of all sizes.
                  </div>
                  <Link className="flex items-center gap-1" href="/">
                    <div className="text-button text-white">Read More</div>
                    <Icon.CaretDoubleRight className="text-xs text-white mt-1" weight="bold" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
