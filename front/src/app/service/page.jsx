import React from "react";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Partner from "@/components/Partner/Partner";
import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/Section/Breadcrumb";
import serviceData from "@/data/service.json";
import Service from "@/components/Service/Service";
import Image from "next/image";

const ServicePage = () => {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>
      <main className="content">
        <Breadcrumb
          link="Our Services"
          img="/images/header.webp" 
          title="Our Services" 
          desc="We perform a full analysis of the clients website and collect information about all the competitors to formulate a proper strategy."
        />

        <div className="mt-[100px]">
          <div className="container">
            <div className="flex gap-8 max-lg:flex-col-reverse">
              <div className="w-full lg:w-1/2 flex flex-col justify-between gap-5 pr-10">
                <div className="heading3">
                  Effective Risk Management Solutions For Financial Stability

                  <div className="body2 text-secondary mt-4">
                    We offer reliable Risk Management services to safeguard your assets, ensure financial stability and navigate rapidly changing business environments.
                    We understand that managing risks is crucial for the sustainability and success of your enterprise.
                  </div> 
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-img w-full overflow-hidden rounded-xl">
                  <Image 
                    width={5000}
                    height={5000}
                    src="/images/bottom-slider-three.webp"
                    className="w-full h-full block"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        <Service data={ serviceData }/>
      </main>
      <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );  
};

export default ServicePage;