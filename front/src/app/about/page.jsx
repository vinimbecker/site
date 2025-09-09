"use client"
import React, { useEffect, useState } from "react";
import TopNav from "@/components/Header/TopNav/TopNav";
import Menu from "@/components/Header/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import Partner from "@/components/Partner/Partner";
import Breadcrumb from "@/components/Section/Breadcrumb";
import AboutSection from "@/components/Section/AboutSection";
import Counter from "@/components/Section/Counter";
import serviceData from "@/data/service.json";
import Service from "@/components/Service/Service";
import Loader from "@/components/Loader/Loader";

const AboutPage = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  },[])

  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>
      <main className="content">
        {
          loading ? (
            <div className="flex justify-center items-center h-[500px]">
              <Loader />
            </div>
          ) : (
            <>
              <Breadcrumb 
                link="About Us" 
                img="/images/header.webp" 
                title="Abous Us" 
                desc="We perform a full analysis of the clients website and collect information about all the competitors to formulate a proper strategy."
              />
              <AboutSection />
              <Counter classname="lg:pb-[50px] sm:pb-16 pb-10" />
              <Service data={serviceData} />
            </>
          )
        }
      </main>
      <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />
      <footer id="footer">
        <Footer />
      </footer>
    </div>  
  );
};

export default AboutPage;