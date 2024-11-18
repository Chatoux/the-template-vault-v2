import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <section className="bg-primary text-textPrimary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to the template vault v2</h1>
          <p className="mb-8">We specialize in AI generated websites, selling premium templates, and offering subscriptions like SEO handling and Domain management to help you grow your brand.</p>
          <Link href="/contact" className="btn bg-accent text-textSecondary hover:bg-opacity-90">Contact Us</Link>
        </div>
      </section>

      <section className="bg-secondary text-textSecondary py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative">
              <Image
                src="/image-portfolio-project-gallery.jpg"
                alt="Project Gallery"
                width={300}
                height={200}
                className="object-cover rounded"
              />
              <p className="mt-2">AI Generated Modern Website</p>
            </div>
            {/* Additional images can be added here in the same format */}
          </div>
        </div>
      </section>

      <section className="bg-primary text-textPrimary py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
          <ul className="list-inside list-disc">
            <li className="mb-2">Client One - Innovative Designs, Inc.</li>
            <li className="mb-2">Client Two - Data Science Solutions</li>
            <li className="mb-2">Client Three - Global Tech Enterprises</li>
            {/* Additional clients can be listed here */}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}