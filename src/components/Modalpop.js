// Modal.js
import React, { useEffect, useRef } from "react";
import { BookingForm } from "./BookingForm";

export const Modalpop = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);
  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full text-center flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-md">
          <BookingForm />
          {children}
          <button
            className="bg-[#317773] text-white p-2 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};
