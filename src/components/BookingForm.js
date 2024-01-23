import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

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
  // eslint-disable-next-line no-unused-vars
  const [cityOverride, setCityOverride] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [matchingDoctors, setMatchingDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors data from the fake API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setDoctors(data));
  }, []);

  useEffect(() => {
    // Filter doctors based on cityOverride or entered city
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

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // eslint-disable-next-line no-unused-vars
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
          <label className="block mb-2">
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="phone number"
            />
          </label>
          <button
            onClick={handleNextStep}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-2xl text-black font-bold mb-4 text-center flex flex-col">
            Book an Appointment for Rs 1000 FREE
          </h2>
          <p className="text-center text-black mb-10">
            60+ Expert Physiotherapists for 200+ Conditions
          </p>
          <label className="block mb-2">
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="age"
            />
          </label>
          <br />
          <label className="block mb-2">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="city"
            />
          </label>
          {formData.age > 40 && (
            <label className="block text-black mb-2">
              <input
                type="checkbox"
                name="previousExperience"
                checked={formData.previousExperience}
                onChange={handleInputChange}
                className="mr-2"
              />
              Previous experience with physiotherapy
            </label>
          )}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handlePreviousStep}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleNextStep}
          >
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-2xl text-black font-bold mb-4 text-center flex flex-col">
            Book an Appointment for Rs 1000 FREE
          </h2>
          <p className="text-center text-black mb-10">
            60+ Expert Physiotherapists for 200+ Conditions
          </p>
          <h2 className="text-2xl text-black bg-white font-bold mb-4 text-center flex flex-col">
            Matching Doctors
          </h2>
          {filteredDoctors.length > 0 ? (
            <ul>
              {filteredDoctors.map((doctor) => (
                <li key={doctor.id}>
                  <h2 className="text-xl text-black font-semibold">
                    Name - {doctor.name}{" "}
                  </h2>
                  <p className="text-md text-black">City - {doctor.address.city}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-black">No matching doctors found.</p>
          )}
          {filteredDoctors.length > 1 ? (
            <p className="text-green-500 text-center mt-5">
              Found a match! Proceed to the next step.
            </p>
          ) : (
            <button
              onClick={handlePreviousStep}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 mt-5"
            >
              Previous
            </button>
          )}
        </div>
      )}
    </div>
  );
};
