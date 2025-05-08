import React, { useEffect, useState } from 'react';

const FaqSection = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch('/FaqData.json')
      .then(res => res.json())
      .then(data => setFaqs(data));
  }, []);

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>

      <div className="join join-vertical bg-base-100 w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow join-item border border-base-300 transition-all duration-300"
          >
            <input
              type="radio"
              name="faq-accordion"
              className="peer"
              defaultChecked={index === 0}
            />
            <div className="collapse-title font-semibold peer-checked:bg-base-200 peer-checked:text-primary transition-colors duration-300">
              {faq.question}
            </div>
            <div className="collapse-content text-sm transition-all duration-300">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
