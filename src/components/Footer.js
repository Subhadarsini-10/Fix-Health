import React, { useEffect, useState } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "./Icons";

export const Footer = () => {
  // eslint-disable-next-line no-unused-vars
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    // Show or hide the scroll-to-top button based on the scroll position
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setShowScrollButton(scrollTop > 100); // Adjust the value based on when you want to show the button
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="flex flex-col">
      <button
        className="text-white bg-gray-800 px-3 py-2 rounded hover:bg-gray-600"
        onClick={handleScrollToTop}
      >
        Scroll to Top ⇑
      </button>

      <div className="bg-black flex justify-between sm:p-20 p-0">
        <div className="text-white text-center">
          <h2 className="bg-[#317773] text-2xl font-bold p-2">Fix Health</h2>
          <p className="text-xs text-gray-600">
            previously <b>YourPhysio</b>
          </p>
        </div>
        <div className="flex text-white gap-12">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-400">Product</p>
            <h2>Blogs</h2>
            <h2>Privacy Policy</h2>
            <h2>Terms & Conditions</h2>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-400">Company</p>
            <h2>About Us</h2>
            <h2>Careers</h2>
            <h2>Contact</h2>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-400">Services</p>
            <h2>Knee Pain</h2>
            <h2>Neck Pain</h2>
            <h2>Back Pain</h2>
            <h2>Shoulder Pain</h2>
            <h2>Ankle and Foot Pain</h2>
            <h2>All Services</h2>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-400">Conditions</p>
            <h2>Spondylosis</h2>
            <h2>ACL Tear</h2>
            <h2>Achilles Tendonitis</h2>
            <h2>Plantar Fasciitis</h2>
            <h2>All Conditions</h2>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800">
        <div className="flex justify-between sm:px-20 px-0 items-center sm:p-4 p-0">
          <div className="flex gap-5 text-gray-500 text-sm">
            <h1>© 2023. FixHealth.com</h1>
            <h1>Illustrations designed by freepik</h1>
          </div>

          <div className="text-white flex gap-3">
            <Facebook />
            <Instagram />
            <Youtube />
            <Twitter />
          </div>
        </div>
      </footer>
    </section>
  );
};
