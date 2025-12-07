import { useState } from 'react';
import './FAQs.css';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "When can we start?",
    answer: "Infant massage can typically begin once your baby is a few weeks old and you feel ready. It's best to wait until after your baby's first vaccinations, but we can discuss the right timing for your family during our initial chat."
  },
  {
    question: "What if my baby cries or sleeps during class?",
    answer: "That's completely normal! Babies have their own rhythms and needs. We adapt to whatever your baby is doing. If they're sleeping, we can discuss techniques. If they're crying, we pause and wait. The massage is always baby-led and respectful of their cues."
  },
  {
    question: "Can both parents come?",
    answer: "Absolutely! Both parents, partners, or primary caregivers are welcome. It's wonderful when both parents learn the techniques together. Just let me know when you book so I can ensure we have space."
  },
  {
    question: "What do I need to bring?",
    answer: "Just bring your baby, a change of clothes, and any feeding supplies you might need. I provide the massage oil and all materials. Wear comfortable clothes that you don't mind getting a bit of oil on."
  },
  {
    question: "What if my baby has reflux/colic or a medical condition?",
    answer: "Infant massage can be adapted for babies with various conditions, but it's important to discuss this with me first. I'll work with you and may recommend checking with your healthcare provider to ensure massage is appropriate. Some techniques can actually help with digestive discomfort when done correctly."
  },
  {
    question: "What oil do you use? Can I use my own?",
    answer: "I use a gentle, natural oil suitable for babies' sensitive skin (typically a light, cold-pressed vegetable oil). If your baby has sensitive skin or you prefer a specific oil, we can discuss alternatives. It's important to avoid oils with fragrances or additives that might irritate delicate skin."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="faqs-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${openIndex === index ? 'faq-open' : ''}`}
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{faq.question}</span>
              <span className="faq-icon" aria-hidden="true">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`faq-answer ${openIndex === index ? 'faq-answer-open' : ''}`}
              aria-hidden={openIndex !== index}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="faqs-cta">
        <p>
          If your question isn't listed, send me a quick message and I'll reply personally.
        </p>
        <a href="#contact" className="button">Get in touch</a>
      </div>
    </section>
  );
}

