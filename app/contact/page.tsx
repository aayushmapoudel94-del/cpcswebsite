'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+977 9851191131 / 9852021844',
    details: 'Call or WhatsApp for inquiries',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'cpcsnepal2023@gmail.com',
    details: 'Primary email for support and donations',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Suryabinayak-4, Dadhikot, Kathmandu',
    details: 'Visit our center for consultations',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-primary text-white py-16 px-8 mt-6">
        <div className="w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg opacity-90">
            We&apos;d love to hear from you. Contact us today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-8">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {info.label}
                  </h3>
                  <p className="font-medium text-foreground mb-1">
                    {info.value}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {info.details}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="w-full bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Send us a Message
            </h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-green-800">
                Thank you for your message! We&apos;ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+977 9851191131"
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a subject</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="services">Services Information</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-foreground mb-2">
                How can I enroll my child in your programs?
              </h3>
              <p className="text-muted-foreground">
                Contact us via phone or email to schedule an initial consultation. Our team will assess your child&apos;s needs and discuss available programs.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-foreground mb-2">
                What are your service hours?
              </h3>
              <p className="text-muted-foreground">
                We are open Monday through Friday, 9:00 AM to 5:00 PM. Emergency services may be available. Please contact us for more information.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-foreground mb-2">
                How much do your services cost?
              </h3>
              <p className="text-muted-foreground">
                Our pricing is flexible and based on individual needs. We offer scholarship opportunities for families in need. Contact us to discuss your specific situation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-foreground mb-2">
                Can I volunteer with CPCS Nepal?
              </h3>
              <p className="text-muted-foreground">
                Yes! We welcome volunteers from all backgrounds. Please reach out to us through this form or call us directly to learn about available volunteer opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
