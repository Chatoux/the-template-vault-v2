import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F4F4F3] text-[#000000] p-8 min-h-screen">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Contact Information Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-[#383838]">Contact Information</h2>
            <p className="text-lg">
              Have questions? Reach out to us and learn more about how we can help you sell AI-generated websites,
              templates, subscriptions, and more.
            </p>
            <div className="space-y-2">
              <p>Email: <a href="mailto:contact@templatevault.com" className="text-[#EC5C39]">contact@templatevault.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="text-[#EC5C39]">+1 (234) 567-890</a></p>
              <p>Address: 123 Template Street, Suite 100, WebCity, WC 12345</p>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="bg-[#383838] text-[#FFFFFF] p-8 rounded-lg space-y-4">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm">Name</label>
                <input type="text" id="name" className="w-full p-2 rounded" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm">Email</label>
                <input type="email" id="email" className="w-full p-2 rounded" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm">Message</label>
                <textarea id="message" className="w-full p-2 rounded" rows={4} required></textarea>
              </div>
              <button type="submit" className="bg-[#EC5C39] text-[#FFFFFF] px-4 py-2 rounded">Submit</button>
            </form>
          </section>

          {/* Map Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-[#383838]">Our Location</h2>
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for the map iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.691054562196!2d-122.08424968469291!3d37.4220656798246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba4d6d2fae1f%3A0x5bd9fef7f0d35adb!2sGoogleplex!5e0!3m2!1sen!2sus!4v1615230362113!5m2!1sen!2sus"
                width="100%"
                height="100%"
                loading="lazy"
                frameBorder="0"
                aria-hidden="false"
                tabIndex={0}
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}