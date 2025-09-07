import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Partner from "@/components/Partner/Partner";
import Breadcrumb from "@/components/Section/Breadcrumb";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav/>
        <Menu />
      </header>

      <main className="content">
        <Breadcrumb
          link="Contact Us"
          img="/images/header.webp"
          title="Contact Us"
          desc="Explore our contact us page for prompt assistance from our dedicated team" 
        />

        <div className="form-contact lg:py-[100px] sm:py-16 py-10">
          <div className="container flex items-center justify-center">
            <div className="xm:w-5/6 w-full flex max-lg:flex-col xl:items-center gap-y-8">
              <div className="w-full xl:w-2/5">
                <div className="infor bg-blue-500 rounded-xl p-10">
                  <div className="heading5 text-white">Get in Touch</div>
                  <div className="body3 text-white mt-2">
                    We will get back to you within 24 hours, or call us everyday
                  </div>
                  <div className="list-social flex flex-wrap items-center gap-3 md:mt-10 mt-6">
                    <Link className="item rounded-full w-10 h-10 flex items-center justify-center bg-slate-200" 
                    href="https://facebook.com" target="_blank">
                      <i className="icon-facebook text-black"></i>
                    </Link>
                    <Link className="item rounded-full w-10 h-10 flex items-center justify-center bg-slate-200" 
                    href="https://linkedin.com" target="_blank">
                      <i className="icon-in text-black"></i>
                    </Link>
                    <Link className="item rounded-full w-10 h-10 flex items-center justify-center bg-slate-200" 
                    href="https://twiter.com" target="_blank">
                      <i className="icon-twitter text-black"></i>
                    </Link>
                    <Link className="item rounded-full w-10 h-10 flex items-center justify-center bg-slate-200" 
                    href="https://instagram.com" target="_blank">
                      <i className="icon-insta text-black"></i>
                    </Link>
                    <Link className="item rounded-full w-10 h-10 flex items-center justify-center bg-slate-200" 
                    href="https://youtube.com" target="_blank">
                      <i className="icon-youtube text-black"></i>
                    </Link>
                  </div>
                  <div className="list-more-infor md:mt-10 mt-6">
                    <div className="item flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                        <Icon.Clock weight="bold" className="text-blue text-2xl" />
                      </div>
                      <div className="line-y"></div>
                      <div className="text-button normal-case text-white">8AM - 6PM</div>
                    </div>
                    <div className="item flex items-center gap-3 mt-5">
                      <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                        <Icon.Phone weight="bold" className="text-blue text-2xl" />
                      </div>
                      <div className="line-y"></div>
                      <div className="text-button normal-case text-white">123 456 7890</div>
                    </div>
                    <div className="item flex items-center gap-3 mt-5">
                      <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                        <Icon.EnvelopeSimple weight="bold" className="text-blue text-2xl" />
                      </div>
                      <div className="line-y"></div>
                      <div className="text-button normal-case text-white">hi.avitex@support.com</div>
                    </div>
                    <div className="item flex items-center gap-3 mt-5">
                      <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                        <Icon.MapPin weight="bold" className="text-blue text-2xl" />
                      </div>
                      <div className="line-y"></div>
                      <div className="text-button normal-case text-white">4140 Rd. Allentown, New Mexico 31134</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-3/5 xl:pl-20">
                <div className="form-block flex flex-col justify-between gap-5">
                  <div className="heading">
                    <div className="heading5">Request A Quote</div>
                    <div className="body3 text-secondary mt-2">
                      We will back to you within 24 hours
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="w-full">
                      <input type="text" name="name" className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg" placeholder="Name"/>
                    </div>
                    <div className="w-full">
                      <input type="text" name="subject" className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg" placeholder="Subject"/>
                    </div>
                    <div className="col-span-2">
                      <input type="email" name="email" className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg" placeholder="Email"/>
                    </div>
                    <div className="col-span-2">
                      <textarea name="message" id="message" rows={4} className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg" placeholder="Your Message"/>
                    </div>
                    <div className="button-block">
                      <button className="button-main hover:border-blue-800 bg-blue-500 text-white text-button rounded-full">Send Message</button>
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

export default ContactPage;