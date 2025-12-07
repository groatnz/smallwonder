import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    babyAge: '',
    contactMethod: 'email',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Formspree endpoint - replace with actual endpoint after setup
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', babyAge: '', contactMethod: 'email', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Get in touch</h2>
      <p className="contact-intro">
        Ready to learn baby massage or still unsure if it's for you? Let's talk.
      </p>
      
      <div className="contact-methods">
        <div className="contact-buttons">
          <a href="tel:+64XXXXXXXXX" className="contact-button">
            📞 Call
          </a>
          <a href="sms:+64XXXXXXXXX" className="contact-button">
            💬 Text / WhatsApp
          </a>
          <a href="mailto:millie@smallwonder.nz" className="contact-button">
            ✉️ Email
          </a>
        </div>

        <div className="contact-form-wrapper">
          <h3>Or send a message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
              />
            </div>

            <div className="form-group">
              <label htmlFor="babyAge">Baby's age (optional)</label>
              <input
                type="text"
                id="babyAge"
                name="babyAge"
                value={formData.babyAge}
                onChange={handleChange}
                placeholder="e.g., 3 months"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactMethod">Preferred contact method</label>
              <select
                id="contactMethod"
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                required
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                minLength={10}
              />
            </div>

            <button type="submit" className="button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>

            {submitStatus === 'success' && (
              <div className="form-message form-success">
                Thank you! I'll respond within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-message form-error">
                Something went wrong. Please try emailing directly at millie@smallwonder.nz
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

