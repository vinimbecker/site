import React from "react";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Footer from "@/components/Footer/Footer";
import serviceData from "@/data/service.json";
import Partner from "@/components/Partner/Partner";
import Breadcrumb from "@/components/Section/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const ServiceDetails = ({ slug }) => {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>
      <main className="content">
        <Breadcrumb
          link="Our Services Details"
          img="/images/header.webp"
          title="Our Services Details"
          desc="We perform a full analysis of the clients website and collect information about all the competitors to formulate a proper strategy." 
        />
        <div className="content-detail-block lg:py-[100px] sm:py-16 py-10">
          <div className="container">
            <div className="flex max-xl:flex-col gap-y-8">
              <div className="w-full xl:w-3/4">
                <div className="w-full xl:pr-[80px]">
                  <div className="heading3">
                    Portfolio Management For Financial Growth
                  </div>
                  <div className="body2 text-secondary mt-4">
                    Our objective for this project was to develop a comprehensive financial management platform that provided users 
                    with a centralized dashboard for managing their finances.
                    We wanted to create a platform that was user-friendly, easy to navigate and offered a range of features to help 
                    users track their spending, monitor their investments and plan for their financial future.
                    Our goal was to provide users with the tools and resources they need to make informed financial decisions and achieve
                    their financial goals. 
                  </div>
                  <div className="bg-img mt-5 mb-5">
                    <Image 
                      width={5000}
                      height={5000}
                      alt=""
                      src="/images/gateway1.webp"
                      className="w-full h-full rounded-xl" 
                    />
                  </div>
                  <div className="heading6">
                    We Offer Diverse Business Solutions
                  </div>
                  <div className="body2 text-secondary mt-4">
                    At our company, we offer a comprehensive suite of business services tailored to meet our clients unique needs and goals.
                    Our services range from financial planning and accounting to marketing and brand management, delivered with exceptional 
                    value and expertise across various industries and business types.
                    Our customized approach ensures that our solutions fit your specific objectives, wheter you are a small startup or a large
                    multinational corporation.
                  </div>
                </div>  
              </div>
              <div className="w-full xl:w-1/4">
                <div className="more-infor border border-line rounded-xl py-8 px-8">
                  <div className="heading6">
                    The Best Our Services
                  </div>
                  <div className="body3 text-secondary mt-2">
                    Whether you have a team of 2 or 200, our shared team inboxes 
                  </div>
                  <div className="list-nav mt-4">
                    <Link className="nav-item rounded-lg flex-between p-12" href="/">
                      <div className="text-button text-secondary">
                        Financial Planning
                      </div>
                    </Link>
                    <Link className="nav-item rounded-lg flex-between p-12" href="/">
                      <div className="text-button text-secondary">
                        Payment Solution
                      </div>
                    </Link>
                    <Link className="nav-item rounded-lg flex-between p-12" href="/">
                      <div className="text-button text-secondary">
                        Cryptocurrency Financial
                      </div>
                    </Link>
                    <Link className="nav-item rounded-lg flex-between p-12" href="/">
                      <div className="text-button text-secondary">
                        Blockchain
                      </div>
                    </Link>
                    <Link className="nav-item rounded-lg flex-between p-12" href="/">
                      <div className="text-button text-secondary">
                        Online Banking
                      </div>
                    </Link>
                    <Link className="nav-item rounded-lg flex-between p-12" href="/">
                      <div className="text-button text-secondary">
                        Personal Financial
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="ads-block rounded-lg md:mt-10 mt-6 relative">
                  <div className="bg-img">
                    <Image
                      width={5000}
                      height={5000}
                      alt=""
                      src="/images/ads.webp"
                      className=""
                    />
                  </div>
                  <div className="text flex flex-col justify-between absolute left-0 top-0 w-full h-full p-8">
                    <div className="title">
                      <div className="heading5 text-white">
                        Lets Talk
                      </div>
                      <div className="body3 text-white mt-4">
                        If you have a project,<br/> contact us
                      </div>
                    </div>
                    <div className="button-block md:mt-10 mt-6">
                      <Link className="button-main hover:bg-black hover:text-white inline-block bg-white text-button" href="/contact">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );  
};

export default ServiceDetails;