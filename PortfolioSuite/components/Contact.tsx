
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { resumeData } from '../data/resumeData';
import { Icon } from './icons/Icon';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;
    if (!formData.name) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted:', formData);
      setIsSubmitted(true);
      // Here you would typically send the form data to a backend service.
    }
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">Let's Connect</h3>
          <p className="text-light-text/80 dark:text-dark-text/80 mb-6">
            I'm currently open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media.
          </p>
          <div className="flex space-x-4">
            <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-light-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-primary-light transition-colors"><Icon name="github" className="w-8 h-8"/></a>
            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-light-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-primary-light transition-colors"><Icon name="linkedin" className="w-8 h-8"/></a>
            <a href={`mailto:${resumeData.contact.email}`} aria-label="Email" className="text-light-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-primary-light transition-colors"><Icon name="email" className="w-8 h-8"/></a>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          {isSubmitted ? (
            <div className="text-center p-8 bg-secondary/10 rounded-lg">
              <h3 className="text-xl font-bold text-secondary-dark dark:text-secondary-light">Thank you!</h3>
              <p className="mt-2 text-light-text dark:text-dark-text">Your message has been received.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-4 py-2 bg-light-card dark:bg-dark-card border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full px-4 py-2 bg-light-card dark:bg-dark-card border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Your Message" required className="w-full px-4 py-2 bg-light-card dark:bg-dark-card border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light">
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
};
