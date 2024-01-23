/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "tailwindcss/tailwind.css";

export const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    previousExperience: false,
  });
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [cityOverride, setCityOverride] = useState(null);
  const [matchingDoctors, setMatchingDoctors] = useState([]);
  const [mobileNumberError, setMobileNumberError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setDoctors(data));
  }, []);

  useEffect(() => {
    const cityToFilter = cityOverride || formData.city;
    const filtered = doctors.filter(
      (doctor) => doctor.address.city === cityToFilter
    );
    setFilteredDoctors(filtered);
  }, [doctors, cityOverride, formData.city]);

  console.log(doctors);
  console.log(filteredDoctors);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateMobileNumber = () => {
    const phoneInput = document.querySelector(".react-tel-input input");
    if (!phoneInput) return;

    const isValid = phoneInput.validity.valid;
    setMobileNumberError(isValid ? "" : "Invalid mobile number");
    return isValid;
  };

  const handleNextStep = () => {
    if (step === 1 && !validateMobileNumber()) {
      return;
    }
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    const matchingDoctors = doctors.filter((doctor) => {
      const doctorNameLowerCase = doctor.name.toLowerCase();
      const formDataNameLowerCase = formData.name.toLowerCase();

      return (
        doctorNameLowerCase.includes(formDataNameLowerCase) &&
        doctor.phone === formData.phoneNumber
      );
    });
    setMatchingDoctors(matchingDoctors);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

  const getTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toDateString();
  };

  const getDayAfterTomorrow = () => {
    const dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
    return dayAfterTomorrow.toDateString();
  };

  const availableTimeSlots = [
    "10:00 AM",
    "2:00 PM",
    "4:00 PM",
    "11:00 AM",
    "3:00 PM",
    "5:00 PM",
  ];

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBookAppointment = () => {
    if (selectedDate && selectedSlot) {
      setIsAppointmentBooked(true);
      setStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <div className="p-10 ml-5 bg-white w-96 items-center ">
      {step === 1 && (
        <div>
          <h2 className="text-2xl text-black font-bold mb-4 text-center">
            Book an Appointment for Rs 1000 FREE
          </h2>
          <p className="text-center text-black mb-10">
            60+ Expert Physiotherapists for 200+ Conditions
          </p>
          <label className="block mb-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Your name"
            />
          </label>
          <label>
            <PhoneInput
              className="relative"
              country={"in"}
              value={formData.phoneNumber}
              onChange={(value) =>
                setFormData((prevData) => ({ ...prevData, phoneNumber: value }))
              }
            />
          </label>
          <button
            onClick={handleNextStep}
            className="bg-[#317773] text-white px-4 py-2 rounded hover:bg-[#56c8c2] text-center mt-10"
          >
            Start Your Recovery
          </button>
          {mobileNumberError && (
            <p className="text-red-500">{mobileNumberError}</p>
          )}
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl text-black font-bold mb-4 text-center flex flex-col">
            Help us understand you better
          </h2>
          <label className="block mb-2">
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Age"
            />
          </label>
          <label className="block mb-2">
            <input
              type="text"
              name="Occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Occupation"
            />
          </label>
          <label>
            <input
              type="text"
              name="problem"
              value={formData.problem}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Please describe your current problem"
            />
          </label>
          <button
            className="bg-[#317773] text-white px-4 py-2 rounded hover:bg-[#56c8c2] text-center mt-10"
            onClick={handleNextStep}
          >
            Continue
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-xl text-black font-bold mb-4 text-center flex flex-col">
            Help us choose the right physio for you
          </h2>
          <p className="text-center text-black mb-5">
            On a scale of 1 - 5 (5 being worst), what is the intensity of your
            pain?
          </p>

          <div className="flex justify-center items-center bg-slate-200 p-2 cursor-pointer shadow-md space-x-2 mb-5">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="flex items-center">
                <input
                  type="radio"
                  name="painIntensity"
                  value={value}
                  checked={parseInt(formData.painIntensity, 10) === value}
                  onChange={handleInputChange}
                  className="mr-1"
                />
                {value}
              </label>
            ))}
          </div>

          <p className="text-center text-black mb-5">
            How long have you been experiencing this pain?
          </p>

          <div className="flex flex-col justify-center bg-slate-200 p-2 shadow-md cursor-pointer  items-center space-x-2">
            {[
              "Less than 15 days",
              "15-30 days",
              "1-6 months",
              "6-12 months",
              "More than 1 year",
            ].map((duration) => (
              <label key={duration} className="flex items-center">
                <input
                  type="radio"
                  name="painDuration"
                  value={duration}
                  checked={formData.painDuration === duration}
                  onChange={handleInputChange}
                  className="mr-1"
                />
                {duration}
              </label>
            ))}
          </div>

          <button
            className="bg-[#317773] text-white px-4 py-2 rounded hover:bg-[#56c8c2] text-center mt-5"
            onClick={handleNextStep}
          >
            Continue
          </button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="text-xl text-black font-bold mb-4 text-center flex flex-col">
            Pick Your Consultation Slot
          </h2>
          <p className="text-xs text-center">
            Given slots are in IST (Indian Standard Time)
          </p>

          <div className="mt-4">
            {[getTomorrow(), getDayAfterTomorrow()].map((date) => (
              <div key={date} className="mb-4">
                <h3 className="text-lg text-center font-bold">{date}</h3>
                <div className="flex space-x-4 items-center justify-center">
                  {availableTimeSlots.map((slot) => (
                    <button
                      key={slot}
                      className={`px-2 py-2 rounded ${
                        selectedDate === date && selectedSlot === slot
                          ? "bg-[#317773] text-white"
                          : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                      }`}
                      onClick={() => {
                        handleDateSelection(date);
                        handleSlotSelection(slot);
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-center">
            Please Choose a slot when you will be in a comfortable space to do
            movements (preferably home)
          </p>

          <button
            className="bg-[#317773] text-white px-4 py-2 rounded hover:bg-[#56c8c2] text-center mt-4"
            onClick={handleBookAppointment}
          >
            Book Appointment
          </button>
        </div>
      )}

      {step === 5 && isAppointmentBooked && (
        <div>
          <h2 className="text-2xl text-[#317773] font-bold text-center flex flex-col">
            Thank You, {formData.name}!
          </h2>
          <p className="text-center text-[#317773] text-xl font-medium">
            Your Appointment is Booked
          </p>
          <p className="text-center my-6">
            We will <b>WhatsApp</b> you the appointment details on number
            provided.
          </p>
          {/* <p className="text-green-500 text-center">
            Appointment successfully booked for {selectedDate} at {selectedSlot}
            !
          </p> */}
        </div>
      )}
    </div>
  );
};
