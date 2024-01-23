import React, { useState } from "react";
import { ArrowDown, ArrowUp } from "./Icons";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-5 w-2/3 m-auto">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAnswer}
      >
        <h3 className="text-md text-white font-semibold">{question}</h3>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </div>
      {isOpen && (
        <p className="mt-3 text-white text-sm bg-slate-600 p-2">{answer}</p>
      )}
    </div>
  );
};

const FAQsSection = () => {
  const faqsData = [
    {
      question: "I want to know More About Fix Health",
      answer:
        "Fix Health (YourPhysio previously) was started by Dr. Sheetal Mundhada who's a renowned physiotherapist with 33+ years of experience. The team has 60+ physiotherapists & has delivered 30,000+ online sessions with 96% patient satisfaction.The organization has been featured in Economic Times, Business World, Times of India for its effective online pain relief programs.Fix Health shares the same investors as companies like Ola, Snapdeal & Khatabook and the technology innovation is done by a team from IIT Bombay, IIT Madras & BITS Pilani.",
    },
    {
      question: "What will happen in the consultation?",
      answer:
        "During the consultation, the doctor will:Discuss your medical history, Make you do movements to evaluate your problem, Use 3D Anatomy technology to explain the root cause of the problem, Explain the time to recovery",
    },
    {
      question: "What are the requirements before the consultation starts?",
      answer:
        "You will need to be prepared with the following requirements before the consultation starts: 1. Share relevant medical documents & test reports on WhatsApp. 2. Zoom link for the session will be shared 1 hour before the consultation, 3. Connect Zoom via mobile or laptop, 4. Sit in a silent place with open space around (4ft x 4 ft) & good internet connection",
    },
    {
      question:
        "What to do if medical documents/test reports are not available?",
      answer:
        "It is completely fine if medical documents & test reports are not available. Our chief physiotherapist will diagnose your condition during the consultation.",
    },
    {
      question: "How can I share my X-Ray / MRI reports?",
      answer: "You can share it to us over whatsapp",
    },
    {
      question: "What is the expertise of the doctor?",
      answer:
        "We are 60+ certified physiotherapists across India: 1. Nanavati, Leelavati, Fortis, Sakra, Manipal, AktivOrtho are a few of the hospitals they have worked at, 2. Univ. of Pittsburgh (US), Univ. of Dundee (UK), Teesside Univ. (UK), are some of the colleges they have completed their graduation from, 3. Sania Mirza, Indian Olympic players are few of the athletes they have treated, 4. 11+ yrs average experience",
    },
    {
      question: "What will be the duration of the consultation?",
      answer:
        "The consultation duration may vary according to the condition. It generally take 30 - 45 mins.",
    },
    {
      question: "Why is the consultation Free?",
      answer:
        "Our approach is new and we want you to experience it first before starting the treatment. Hence, the detailed consultation is FREE, Having said this, our approach has proven to work. Our online pain relief & recovery program is research-backed & published in the International Journal of Physiotherapy. Link to the research paper. We are passionate about helping as many people recover from joint and back pain as possible.",
    },
    {
      question: "Where will the consultation happen?",
      answer:
        "The consultation will happen online over Zoom video call. It is important that you are in a quite room and appropriately dressed for our physiotherapists to carry out the consultation properly.",
    },
    {
      question: "Do you have any physical clinics nearby?",
      answer:
        "Clinics mean travel & wait time, one doctor for many patients & only a limited choice of doctors is available nearby, With YourPhysio, our experts have consulted 10,000+ patients from 100+ cities & 10+ countries. Take a Free consultation with the BEST & then decide!. Click here to listen what our patients say.",
    },
    {
      question: "What time will the consultation happen?",
      answer:
        "You can choose a consultation slot after filling in our form. If you didn't find a slot with a suitable timing, rest assured our team will connect with you and you can schedule the consultation at an appropriate time. Please ensure that you'd be available for 30-45 mins in a quite room during your consultation. This gives the best environment for our experts to diagnose your condition accurately.",
    },
    {
      question: "What is the pricing?",
      answer:
        "The first consultation is FREE. The charges after that depend on the problem and the duration of the treatment required. Pricing plans will be explained immediately after the consultation. The BONUS is, personalized treatment at ZERO travelling cost and ZERO waiting time. Click here to listen what our patients say.",
    },
    {
      question: "Can I change the timing of my consultation?",
      answer:
        "Yes, you can drop in a request to change your consultation timing in our whatsapp channel or call us directly. Our team will ensure to find a slot timing that suits your requirements.",
    },
    {
      question: "Can patients be treated online?",
      answer:
        "We have treated patients across 200+ conditions through our innovative pain relief programs. Click on the link below to hear an actual patient share their recovery experience for the condition they were suffering from: 1. Back Pain. 2. Neck Pain. 3. Shoulder Pain. 4. Knee Pain. 5. Post Surgery Rehab. Complete your free consultation & then decide!",
    },
    {
      question: "Can someone visit my home?",
      answer:
        "Home visits leave you with a limited choice of physios from your area & are very expensive. With YourPhysio, you have access to  experts who have consulted 10,000+ patients from 100+ cities & 10+ countries. Take a Free consultation with the BEST & then decide!. Click here to listen to what our patients say.",
    },
    {
      question: "I have been recommended machine treatment, can you help?",
      answer:
        "Machines help with temporary pain relief but do not fix the root cause of the pain. Advanced countries like the USA, Canada have minimal use of machines & focus on exercise therapy. In the last 1 year, via 30,000+ sessions, YourPhysio has treated patients with a satisfaction rate of 96%. Try our unique approach & decide!",
    },
  ];

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-2 text-[white] text-center mt-10">
        <h2 className="text-3xl font-bold mt-5 text-[#317773]">FAQs</h2>
        <p className="font-semibold text-xl">Have Questions?</p>
        <p className="font-semibold text-xl">We're here to help</p>
      </div>

      {faqsData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQsSection;
