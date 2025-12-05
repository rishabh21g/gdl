import { MainLayout } from '../layouts/MainLayout';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <MainLayout>
      <section className="bg-primary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Have questions? We'd love to hear from you
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-theme">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-theme mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-theme font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-theme w-full"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-theme font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-theme w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-theme font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-theme w-full"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-theme font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-theme w-full resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full py-3">
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-theme mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-theme mb-1">Email</h3>
                      <p className="text-theme">support@godraw.com</p>
                      <p className="text-theme">sales@godraw.com</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-theme mb-1">Phone</h3>
                      <p className="text-theme">+1 (555) 123-4567</p>
                      <p className="text-theme text-sm">Mon-Fri 9am-6pm EST</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-theme mb-1">Live Chat</h3>
                      <p className="text-theme">Available 24/7</p>
                      <button className="text-primary font-semibold mt-2 hover:underline">
                        Start a conversation
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-theme mb-1">Office</h3>
                      <p className="text-theme">123 Innovation Street</p>
                      <p className="text-theme">San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-theme mb-6">
            Prefer to try it yourself?
          </h2>
          <p className="text-xl text-theme mb-8">
            Start using GoDraw today and see why teams love it
          </p>
          <button className="btn-primary px-8 py-3 text-lg">
            Get Started Free
          </button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
