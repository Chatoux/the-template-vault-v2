import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function AIGeneratedWebsitesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Introduction Section */}
        <section className="w-full bg-[#383838] text-[#000000] flex flex-col justify-center items-center">
          <div className="relative w-full h-[70vh]">
            <Image
              src="/image-home-hero-section.jpg"
              alt="Hero"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="mb-8"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold">Welcome to the template vault v2</h1>
              <p className="mt-4 text-lg text-[#F4F4F3]">Explore and purchase AI-generated websites, templates, and comprehensive subscriptions for SEO handling, domain management, and more!</p>
              <Link href="/book">
                <button className="bg-[#F4F4F3] text-[#EC5C39] px-4 py-2 rounded font-semibold hover:bg-[#EC5C39] hover:text-[#FFFFFF] mt-4">
                  Browse Templates
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 px-4 bg-[#F4F4F3] text-[#383838] text-center">
          <h2 className="text-3xl font-bold mb-6">Features of Our AI Generated Websites</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-4 bg-white shadow-sm rounded hover:shadow-md transition">
              <h3 className="text-2xl font-semibold mb-2">Easy Customization</h3>
              <p>Effortlessly personalize your website with intuitive tools and settings.</p>
            </div>
            <div className="p-4 bg-white shadow-sm rounded hover:shadow-md transition">
              <h3 className="text-2xl font-semibold mb-2">Fast Delivery</h3>
              <p>Receive your website swiftly, allowing you to launch your brand with minimal delay.</p>
            </div>
            <div className="p-4 bg-white shadow-sm rounded hover:shadow-md transition">
              <h3 className="text-2xl font-semibold mb-2">Decentralized Hosting</h3>
              <p>Enjoy higher security and reliability with our state-of-the-art hosting solutions.</p>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="w-full bg-[#EC5C39] text-[#EC5C39] py-12 text-center">
          <h2 className="text-3xl font-bold text-[#FFFFFF] mb-6">Sample AI-Generated Website Gallery</h2>
          <div className="flex justify-center">
            <Image
              src="/image-ai-generated-websites-image-gallery.jpg"
              alt="AI Generated Websites Gallery"
              width={800}
              height={450}
              className="rounded-md shadow-md"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}