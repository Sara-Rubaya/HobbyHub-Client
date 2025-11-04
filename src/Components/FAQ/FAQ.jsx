import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const faqs = [
    {
      question: "What is HobbyHub?",
      answer:
        "HobbyHub is a platform where you can join, create, and explore groups based on your favorite hobbies and interests.",
    },
    {
      question: "How do I join a group?",
      answer:
        "Go to the Group Details page and click the 'Join Group' button. Some groups may require admin approval.",
    },
    {
      question: "Can I create my own hobby group?",
      answer:
        "Yes! Use the 'Create Group' option to start your own community, set rules, and invite members.",
    },
    {
      question: "Is HobbyHub free to use?",
      answer:
        "Absolutely! All core features are free. Some premium features may be added in the future.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 ">
      <h2
        className="text-5xl font-bold text-center mb-8 text-gray-700"
        data-aos="fade-up"
      >
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group  shadow-md rounded-2xl p-8 bg-blue-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <summary className="cursor-pointer flex justify-between items-center font-semibold text-lg">
              {faq.question}
              <span className="transition-transform group-open:rotate-45 text-2xl">+</span>
            </summary>
            <p className="mt-3 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
