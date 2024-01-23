import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Footer } from "./Footer";
import { Modalpop } from "./Modalpop";

export const Blogs = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
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
                <h2 className="text-2xl text-black font-bold mb-4">Book Now</h2>
              </Modalpop>
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5 m-auto my-10">
        <h2 className="text-white text-2xl">Recent Stories</h2>

        <div className="flex flex-wrap gap-5 mt-5">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-gray-800 p-5 rounded-lg w-[calc(33.3333%-2rem)]"
            >
              <img
                src={`https://i.pravatar.cc/150?img=${user.id}`}
                alt={user.name}
                className="w-full h-40 mb-3 object-cover rounded-md"
              />
              <h3 className="text-white text-xl">{user.name}</h3>
              <p className="text-gray-400">{user.email}</p>
              <p className="text-gray-400">{user.username}</p>
              <p className="text-gray-400">{user.phone}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
