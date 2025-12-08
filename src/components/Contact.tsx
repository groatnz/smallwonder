import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      // Web3Forms endpoint - get your access key from https://web3forms.com
      // Replace YOUR_ACCESS_KEY with your actual access key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '2257fef1-5cc8-4b5d-b06b-73f900fe2cac', // Replace with your Web3Forms access key
          subject: `New contact from ${formData.name} - Small Wonder`,
          from_name: formData.name,
          email: formData.email || 'not provided',
          phone: formData.phone || 'not provided',
          babyAge: formData.babyAge || 'not provided',
          contactMethod: formData.contactMethod,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ 
          name: '', 
          email: '', 
          phone: '',
          babyAge: '', 
          contactMethod: 'email', 
          message: '' 
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const showEmailField = formData.contactMethod === 'email';
  const showPhoneField = formData.contactMethod === 'phone' || formData.contactMethod === 'whatsapp';

  return (
    <section id="contact" className="contact">
      <h2>Get in touch</h2>
      <p className="contact-intro">
        Ready to learn baby massage or still unsure if it's for you? Let's talk.
      </p>
      
      <div className="contact-methods">
        <div className="contact-buttons">
          <a href="tel:+64275480312" className="contact-button">
            📞 Call
          </a>
          <a href="sms:+64275480312" className="contact-button">
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

            {showEmailField && (
              <div className="form-group">
                <label htmlFor="email">Your email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required={showEmailField}
                  placeholder="your.email@example.com"
                />
              </div>
            )}

            {showPhoneField && (
              <div className="form-group">
                <label htmlFor="phone">Your phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required={showPhoneField}
                  placeholder="e.g., +64 21 123 4567"
                />
              </div>
            )}

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
