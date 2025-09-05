import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  return (
    <div className="footer-block bg-[#0f1e33] pt-[60px]">
      <div className="container">
        <div className="flex max-lg:flex-col max-lg:items-start gap-y-10 pb-10">
          <div className="lg:w-1/4">
            <div className="footer-company-infor flex flex-col justify-between gap-5">
              <Image
                src="/images/LogoWhite.png"
                alt="Company Logo"
                width={4000}
                height={4000}
                className="footer-logo w-[145px]"
              />
              <div className="text caption1 text-white">
                We are a diversified company specialized in providing comprehensive financial solutions for individuals and businesses.
              </div>
              <div className="list-social flex items-center gap-2">
                <Link href="https://www.facebook.com/" className="item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center" target="_blank">
                  <i className="icon-facebook text-sm"></i>
                </Link>
                <Link href="https://twitter.com/" className="item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center" target="_blank">
                  <i className="icon-twitter text-sm"></i>
                </Link>
                <Link href="https://www.linkedin.com/" className="item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center" target="_blank">
                  <i className="icon-in text-sm"></i>
                </Link>
                <Link href="https://www.instagram.com/" className="item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center" target="_blank">
                  <i className="icon-insta text-sm"></i>
                </Link>
                <Link href="https://www.youtube.com/" className="item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center" target="_blank">
                  <i className="icon-youtube text-sm"></i>
                </Link>
              </div>
            </div>
          </div>  
          <div className="lg:w-1/2">
            <div className="footer-navigate flex items-center justify-center gap-20">
              <div className="footer-nav-item">
                <div className="item-heading text-button-sm text-white">
                  Quick Links
                </div>
                <ul className="list-nav mt-1 text-white">
                  <li className="mt-3">
                    <Link className="caption1 has-line-before line-white text-surface hover-underline" href="/"> 
                      About Us
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="caption1 has-line-before line-white text-surface hover-underline" href="/"> 
                      Services
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="caption1 has-line-before line-white text-surface hover-underline" href="/"> 
                      Case Studies
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="caption1 has-line-before line-white text-surface hover-underline" href="/"> 
                      Contact
                    </Link>
                  </li>
              </ul>
              </div>
              <div className="footer-nav-item max-sm:hidden">
                <div className="item-heading text-button-sm text-white">
                  Pages
                </div>
                <ul className="list-nav mt-1 text-white">
                  <li className="mt-3">
                    <Link className="caption1 has-line-before line-white text-surface hover-underline" href="/"> 
                      FAQs
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="caption1 has-line-before line-white text-surface hover-underline" href="/"> 
                      Pricing
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="caption1 has-line-before line-white text-surface hover-underline" href="/"> 
                      Partners
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="caption1 has-line-before line-white text-surface hover-underline" href="/"> 
                      Support Center
                    </Link>
                  </li>
              </ul>
              </div>
              <div className="footer-nav-item">
                <div className="item-heading text-button-sm text-white">
                  Blog
                </div>
                <ul className="list-nav mt-1 text-white">
                  <li className="mt-3">
                    <Link className="caption1 has-line-before line-white text-surface hover-underline" href="/"> 
                      Blog List
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="caption1 has-line-before line-white text-surface hover-underline" href="/"> 
                      Blog Grid
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="caption1 has-line-before line-white text-surface hover-underline" href="/"> 
                      Masonry
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link className="caption1 has-line-before line-white text-surface hover-underline" href="/"> 
                      Blog Detail
                    </Link>
                  </li>
              </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4">
            <div className="company-contact">
              <div className="heading text-button-sm text-white">
                NewsLetter
              </div>
              <div className="mt-3 flex items-start">
                <div className="text">
                  <div className="caption2 text-surface text-white">
                    Need Help? 24/7 Support
                  </div>
                  <div className="fw-700 text-white mt-1">
                    +123 456 7890
                  </div>
                </div>
              </div>
              <div className="locate mt-3 flex items-center">
                <div className="caption1 flex flex-items text-surface text-white">
                  <Icon.MapPin className="text-white text-xl" />
                  101 E 129th St, East Chicago, IL 46312, US 
                </div>
              </div>
              <form className="send-block mt-5 flex items-center h-[45px] rounded-lg overflow-hidden">
                <input 
                  type="email"
                  className=" caption1 text-secondary h-full w-full pr-4 pl-3"
                  placeholder="Your email address"
                />
                <button className="flex items-center justify-center w-[45px] h-[45px] bg-blue-800 flex-shrink-0">
                  <Icon.PaperPlaneTilt className="text-white" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-line"></div>
        <div className="footer-bottom flex items-center justify-between pt-3 pb-3">
          <div className="left-block flex items-center">
            <div className="copy-right caption1 text-surface text-white">
              © 2023 EasyTech. All rights reserved.
            </div>
          </div>
          <div className="nav-link flex items-center gap-3 text-white">
            <a className="text-surface caption1 hover-underline" href="#">Terms of Service</a>
            <span> | </span>
            <a className="text-surface caption1 hover-underline" href="#">Privacy Policy</a>
            <span> | </span>
            <a className="text-surface caption1 hover-underline" href="#">Cookies Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
