import { useState } from 'react';
import Container from './container';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xyzgpdkb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-10 md:py-20">
      <Container className="max-w-2xl">
        <div className="text-left mb-12">
          <h2 className="text-3xl mb-2">Drop a Message</h2>
          <p className="text-sm text-slate-600">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div className="border border-slate-200 rounded-2xl p-8 md:p-8">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                Thank You!
              </h3>
              <p className="text-slate-600 text-sm">
                Your message has been sent successfully. I'll get back to you
                soon!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                  placeholder="Enter your message here"
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm bg-red-50 p-3 rounded-xl">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-500 py-3 px-10 rounded-full text-white flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="mt-10 text-center">
          <div className="flex items-center text-sm justify-center gap-2 text-slate-600">
            <span>Or email me directly at</span>
            <a
              href="mailto:israeljuri0@gmail.com"
              className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              israeljuri0@gmail.com
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
