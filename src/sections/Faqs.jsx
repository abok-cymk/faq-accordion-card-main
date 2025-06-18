import { useState } from "react";
import Accordion from "../components/ui/Accordion";
import Illustration from "../components/Illustration";

const faqs = [
  {
    id: "1",
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    id: "2",
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: "3",
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    id: "4",
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    id: "5",
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const Faqs = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  return (
    <section id="faqs_section" className="grid grid-cols-1 gap-[3rem] bg-white rounded-4xl lg:grid-cols-2 md:max-w-2xl lg:max-w-4xl mx-auto items-center-safe px-4 md:px-14 py-6">
    <Illustration /> 
      <div>
          <h2 className="text-3xl font-bold text-veryDarkDesaturatedBlue uppercase mb-4 max-sm:text-center">
            Faq
          </h2>
          <div className="flex flex-col divide-y divide-lightGrayishBlue">
            {faqs.map((faq) => (
              <Accordion
                key={faq.id}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                activeAccordion={activeAccordion}
                setActiveAccordion={setActiveAccordion}
              />
            ))}
          </div>
      </div>
    </section>
  );
};

export default Faqs;
