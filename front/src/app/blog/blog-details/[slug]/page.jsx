import React from "react";
import TopNav from "@/components/Header/TopNav/TopNav";
import Menu from "@/components/Header/Menu/Menu";
import Partner from "@/components/Partner/Partner";
import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/Section/Breadcrumb";

const BlogDetails = () => {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>
      <main className="content">
        <Breadcrumb 
          link="Blog Details"
          img="/images/header.webp"
          title="Blog Details"
          desc="Discover valuable insights and expert advice on budgeting, investing and retirement planning in our financial blogs section"
        />
        
      </main>
      <Partner className="lg:mt-[100px] sm:mt-16 mt-10"/>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default BlogDetails;