import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-primary text-text_primary flex flex-col justify-center items-center">
        <div className="relative w-full h-[70vh]">
          <Image
            src="/image-home-hero-section.jpg"
            alt="Hero"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="mb-8"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text_primary">Welcome to the template vault v2</h1>
            <p className="mt-4 text-lg text-text_secondary">
              Discover the future of website templates powered by AI. Enhance your online presence with our top-notch offerings.
            </p>
            <Link href="/services">
              <button className="bg-secondary text-text_accent px-4 py-2 rounded font-semibold hover:bg-accent">
                Explore Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full bg-secondary text-text_primary py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-lg mb-4">
            At the template vault v2, we are driven by innovation and creativity. With a mission to deliver AI-generated websites and
            efficient template solutions, our expert team is dedicated to providing exceptional services that set us apart in the industry.
          </p>
          <p className="text-lg">
            Our commitment to excellence ensures that our clients receive unparalleled support in areas such as SEO handling, domain management,
            and more. Join us as we redefine the digital design landscape.
          </p>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="w-full bg-accent text-text_secondary py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg">AI-Generated Websites to take your business to the next level.</li>
            <li className="text-lg">Exclusive Template Designs tailored for your brand.</li>
            <li className="text-lg">Comprehensive SEO Handling for optimal visibility.</li>
            <li className="text-lg">Domain Management services to secure your brand identity.</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary text-text_primary py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-text_accent">Client Testimonials</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="p-6 max-w-md bg-white rounded shadow-md text-center mb-6 lg:mb-0">
            <p className="text-text_secondary">&quot;Collaborating with the template vault v2 has revolutionized my business!&quot;</p>
            <span className="block mt-4 text-text_accent">- Satisfied Client</span>
          </div>
          <div className="p-6 max-w-md bg-white rounded shadow-md text-center">
            <p className="text-text_secondary">&quot;Their services are unparalleled and truly elevate my brand!&quot;</p>
            <span className="block mt-4 text-text_accent">- Happy Customer</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;