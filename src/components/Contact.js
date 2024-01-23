import React from "react";
import { Calender, Mobile, WhatsApp } from "./Icons";

export const Contact = () => {
  return (
    <div className="flex justify-between w-1/2 text-[white] text-center m-auto mt-10">
      <div className="flex flex-col items-center">
        <Mobile />
        <h1>Contact us at</h1>
        <p>1800-890-2102</p>
      </div>

      <div className="flex flex-col items-center">
        <WhatsApp />
        <h1>WhatsApp at</h1>
        <p>+91-960-778-8208</p>
      </div>

      <div className="flex flex-col items-center">
        <Calender />
        <h1>We're available!</h1>
        <p className="font-bold">8 AM - 9 PM</p>
        <p>7 days every week</p>
      </div>
    </div>
  );
};
