import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Build, Device, Users } from "./Icons";
import { Footer } from "./Footer";
import { Contact } from "./Contact";
import { Modalpop } from "./Modalpop";

export const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
    console.log("opened modal");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBookNowClick = (event) => {
    event.preventDefault();
    openModal();
  };
  return (
    <div className="bg-black h-full text-white">
      <div className="nav sticky top-0 z-50">
        <div className="bg-gray-700 bg-cover bg-center">
          <div
            className={`flex justify-between sm:p-8 p-2 sm:px-36 px-2 items-center`}
          >
            <div className="text-white text-center">
              <h2 className="bg-[#317773] text-2xl font-bold p-2">
                Fix Health
              </h2>
              <p className="text-xs">
                previously <b>YourPhysio</b>
              </p>
            </div>

            <div className="flex gap-6 text-white items-center">
              <Link to="/">Home</Link>
              <h2>Services</h2>
              <Link to="/blogs">Blogs</Link>
              <Link to="/about">About</Link>
              <Link to="/book">
                <button
                  className="bg-[#317773] text-white p-2 rounded-lg"
                  onClick={handleBookNowClick}
                >
                  Book Now
                </button>
              </Link>
              <Modalpop isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-2xl font-bold text-black mb-4">Book Now</h2>
              </Modalpop>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-20">
        <div className="text-[white] text-center">
          <h2 className="text-3xl font-semibold mb-28">
            On a mission to make people's lives pain free
          </h2>
          <p className="font-normal text-xl text-[#317773]">About Fix Health</p>
        </div>

        {/* New div with three cards */}
        <div className="flex justify-between w-2/3 m-auto text-center text-[#317773]">
          <div className="bg-gray-800 p-5 rounded-lg w-[calc(33.3333%-2rem)] flex flex-col items-center gap-3">
            <Device />
            <h3 className="text-white text-2xl">1,00,000+</h3>
            <p className="text-gray-400">Sessions</p>
            <p className="text-xs">Convenient & Effective care.</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg w-[calc(33.3333%-2rem)] flex flex-col items-center gap-3">
            <Build />
            <h3 className="text-white text-2xl">100+</h3>
            <p className="text-gray-400">Cities</p>
            <p className="text-xs">Patients from metro to taluka places.</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg w-[calc(33.3333%-2rem)] flex flex-col items-center gap-3">
            <Users />
            <h3 className="text-white text-2xl">3.8/4</h3>
            <p className="text-gray-400">Patient Feedback</p>
            <p className="text-xs">Patient satisfaction is our primary goal.</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-white text-center">
          Expert Physiotherapists from across the country
        </h2>

        <div className="w-3/4 m-auto flex gap-10 mb-20">
          <div className="flex flex-col items-center text-center text-xs gap-5 text-white">
            <Build />
            <p>Gold Medalists in graduate & post-graduate physiotherapy.</p>
          </div>
          <div className="flex flex-col items-center text-center text-xs gap-5 text-white">
            <Device />
            <p>More than 30 years of physiotherapy experience.</p>
          </div>
          <div className="flex flex-col items-center text-center text-xs gap-5 text-white">
            <Users />
            <p>
              Worked with AIIMS, Fortis, CMC Vellore, Sancheti Hospital, etc.
            </p>
          </div>
          <div className="flex flex-col items-center text-center text-xs gap-5 text-white">
            <Build />
            <p>Treated more than 20,000 patients.</p>
          </div>
        </div>
      </div>

      <div>
        <div className="text-[white] text-center">
          <h2 className="text-xl font-semibold text-[#317773]">
            Investors & Advisors
          </h2>
          <p className="font-normal text-sm">
            Our investors have backed the likes of Ola, Urban Company, Snapdeal,
            Khatabook.
          </p>
          <div className="flex justify-between w-2/3 m-auto text-center my-10">
            <div className="bg-gray-800 p-5 rounded-lg w-[calc(33.3333%-2rem)] flex flex-col items-center gap-3">
              <button className="bg-black text-white p-3 px-3 text-xl">
                Better
              </button>
              <p className="text-lg">Better Capital</p>
            </div>

            <div className="bg-gray-800 p-5 rounded-lg w-[calc(33.3333%-2rem)] flex flex-col items-center gap-3">
              <div className="flex flex-col">
                <button className="bg-gray-800 p-3 px-3 text-xl text-[#317773]">
                  TITAN
                </button>
                <p className="text-xs text-[#317773]">Captial</p>
              </div>

              <p className="text-lg">Titan Capital</p>
            </div>

            <div className="bg-gray-800 p-5 rounded-lg w-[calc(33.3333%-2rem)] flex flex-col items-center gap-3">
              <button className="bg-[#317773] text-white p-3 px-3 text-xl">
                Bits Spark
              </button>
              <p className="text-lg">BITS Pilani Angel Investors</p>
            </div>
          </div>
        </div>

        <section className="text-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#317773] mb-20">
              Patient Testimonials
            </h2>
          </div>

          <div className="flex flex-col">
            <p className="font-normal text-sm">
              Our patients successfully recovered by trusting in
            </p>
            <p className="text-[#317773]">India's #1 Physiotherapy Clinic</p>
          </div>
        </section>

        <Contact />

        <div className="flex flex-col items-center bg-[#3c5757] w-2/3 m-auto my-24 p-5 text-white gap-2">
          <h2>Want to be a part of making people's lives pain free?</h2>
          <a href="/" className="underline">
            Apply to Fix Health today
          </a>
          <div className="bg-[#317773] p-2 mt-5">
            <button className="rounded-xl p-1">View positions</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
