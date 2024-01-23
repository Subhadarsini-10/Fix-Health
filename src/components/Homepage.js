import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExpertsCarousel } from "./ExpertsCarousel";
import { Chat, Count, Smile, User } from "./Icons";
import { Contact } from "./Contact";
import FAQsSection from "./FAQItem";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { BookingForm } from "./BookingForm";
import { Modalpop } from "./Modalpop";

export const Homepage = () => {
  const backgroundImageUrl =
    "https://media.istockphoto.com/id/587528274/photo/pensive-doctor-with-hand-on-chin.jpg?s=612x612&w=0&k=20&c=WzVDAe-qGyk_jiD9cYMp_k6xwtjnrspS8muAStkpys0=";

  const [scrollBg, setScrollBg] = useState("transparent");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const RecoveryCard = ({ detail1, detail2, detail3 }) => {
    return (
      <div className="bg-[#317773] p-10 rounded-lg mb-6 mt-16 w-4/5 h-2/5 align-middle text-center">
        <div className="flex justify-between text-white px-20">
          <div className="flex flex-col items-center">
            <User />
            <p className="font-bold">20000+</p>
            <p>{detail1}</p>
          </div>
          <div className="flex flex-col items-center">
            <Count />
            <p className="font-bold">1 lakh +</p>
            <p>{detail2}</p>
          </div>
          <div className="flex flex-col items-center">
            <Smile />
            <p className="font-bold">9.6/10</p>
            <p>{detail3}</p>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 50; // Increase this value based on your design

      // Change background color when scrolled down
      if (scrollPosition > threshold) {
        setScrollBg("bg-[#317773] transition-all"); // Add transition property
      } else {
        setScrollBg("bg-transparent transition-all"); // Add transition property
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <div className="bg-gray-700 h-full relative">
      <nav className="text-white text-center font-semibold p-2 sticky top-0 z-50">
        YourPhysio is now FixHealth
      </nav>

      {/* Wrapper for sticky elements with a fixed height */}
      <div className="sticky-wrapper h-[700px]">
        {/* Image background below nav with a height of 700px */}
        <div
          className="h-[700px] bg-cover"
          style={{
            backgroundImage: `url('${backgroundImageUrl}')`,
          }}
        >
          {/* Only the below div changes background color */}
          <div
            className={`flex justify-between sm:p-8 p-2 sm:px-36 px-2 items-center sticky top-0 ${scrollBg}`}
          >
            <div className="text-white text-center">
              <h2 className="bg-[#317773] text-2xl font-bold p-2">
                Fix Health
              </h2>
              <p className="text-xs">
                previously <b>YourPhysio</b>
              </p>
            </div>

            <div className="flex gap-6 text-[#493539] font-bold items-center">
              <Link to="/">Home</Link>
              <div className="relative">
                <h2 onClick={toggleServicesDropdown} className="cursor-pointer">
                  Services
                </h2>
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 bg-gray-700 p-2 w-full">
                    <ul>
                      <li>
                        <Link to="/service1" className="text-white">
                          Knee pain
                        </Link>
                      </li>
                      <li>
                        <Link to="/service2" className="text-white">
                          Back pain
                        </Link>
                      </li>
                      <li>
                        <Link to="/service2" className="text-white">
                          Ankle pain
                        </Link>
                      </li>
                      <li>
                        <Link to="/service2" className="text-white">
                          Shoulder pain
                        </Link>
                      </li>
                      <li>
                        <Link to="/service2" className="text-white">
                          All Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
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
                <h2 className="text-2xl font-bold mb-4">Book Now</h2>
              </Modalpop>
            </div>
          </div>
          <BookingForm />
        </div>
      </div>
      <section>
        <div className="flex flex-col text-[white] text-center gap-5">
          <h1 className="font-semibold text-4xl mt-10">Meet Our Experts</h1>
          <p className="text-2xl">
            Experience the Benefits of Advanced Technology and Expert Care
          </p>
        </div>
        <ExpertsCarousel />
      </section>

      <div className="text-center mt-10">
        <button className="bg-[#DC143C] px-20 py-3 text-[white] rounded-lg">
          Meet Team
        </button>
      </div>

      <section>
        <div className="text-center text-[white] mt-10 flex flex-col gap-5">
          <h1 className="text-4xl font-semibold">Patient Recovery Stories</h1>
          <p className="font-bold text-xl">Don't just take our word for it</p>
        </div>

        {/* Card Section */}
        <div className="flex justify-center gap-5">
          {/* Example card data */}
          <RecoveryCard
            title="Recovery Story 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            detail1="Detail 1 Value"
            detail2="Detail 2 Value"
            detail3="Detail 3 Value"
          />
        </div>

        <ExpertsCarousel />

        <div className="mt-10 flex flex-col">
          <div className="text-[white] text-center text-4xl font-semibold">
            <h2>Our Process</h2>
            <p className="font-normal text-xl">
              Backed by study in International Journal of Physiotherapy and
              Research
            </p>
          </div>

          <ExpertsCarousel />
        </div>

        <div>
          <h2 className="font-bold text-4xl text-[white] text-center mt-20">
            250+ Conditions Treated
          </h2>
          <ExpertsCarousel />
        </div>
      </section>

      <div className="text-center text-[white] flex flex-col gap-3 mt-10">
        <h2 className="text-4xl font-bold">Heart warming patient stories</h2>
        <p className="font-normal text-xl">
          Tales of patients overcoming chronic pains and getting back to their
          normal lives
        </p>

        <p className="font-normal text-xl">
          "Has anyone tried the online physiotherapy service of Fix Health?
          Would like to know your first-hand experience.
        </p>

        <div className="text-center mt-10">
          <button className="bg-[#DC143C] px-20 py-3 text-[white] rounded-lg">
            Meet Team
          </button>
        </div>
      </div>

      <Contact />

      <div className="bg-[#317773] h-[520px] mt-20">
        <div className="flex flex-col gap-3 text-[white] text-center mt-10">
          <h2 className="text-3xl font-semibold mt-5">Download The App Now</h2>
          <p className="font-semibold text-sm">
            India's most trusted online physiotherapy clinic
          </p>
          <p className="font-semibold text-sm">Now at your fingertips</p>

          <div className="flex w-1/3 m-auto justify-between items-center">
            <div className="flex flex-col">
              <img src="./Appstore.svg" alt="" className="w-full h-36" />
              <img src="./Googlestore.svg" alt="" className="w-full h-36" />
            </div>

            <div>
              <img src="image.webp" alt="" className="w-full h-96" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <FAQsSection />
      </div>

      <div className="flex flex-col items-start bg-[#3c5757] w-2/3 m-auto mt-24 p-5 text-white gap-2 mb-10">
        <h2>Still have questions?</h2>
        <p>
          Can't find the answer you're looking for? Please chat with our
          friendly team.
        </p>
        <div className="flex gap-3 bg-[#317773] p-2 mt-5">
          <button>Get in Touch</button>
          <Chat />
        </div>
      </div>

      <Footer />
    </div>
  );
};
