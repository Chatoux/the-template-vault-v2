import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const TemplatesAndSubscriptions = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#F4F4F3] min-h-screen">
                <header className="bg-[#383838] text-white p-8 text-center">
                    <h1 className="text-4xl font-bold">Welcome to the Template Vault v2</h1>
                    <p className="mt-4 text-xl">Sell AI generated websites, more templates, and get subscriptions for SEO handling, Domain management, and more to streamline your business.</p>
                </header>

                <section className="px-8 py-16 bg-[#F4F4F3]">
                    <h2 className="text-3xl font-bold text-[#000000] mb-8 text-center">Template Types</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <Image src="/images/social-media-template.jpg" alt="Social Media Template" width={400} height={200} className="w-full h-auto rounded" />
                            <h3 className="text-2xl font-semibold mt-4">Social Media Templates</h3>
                            <p className="mt-2">Customize your social media presence with our unique templates designed by AI.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <Image src="/images/logo-template.jpg" alt="Logo Design Template" width={400} height={200} className="w-full h-auto rounded" />
                            <h3 className="text-2xl font-semibold mt-4">Logo Design Templates</h3>
                            <p className="mt-2">Create stunning logos that stand out and define your brand&apos;s identity.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <Image src="/images/website-template.jpg" alt="Website Template" width={400} height={200} className="w-full h-auto rounded" />
                            <h3 className="text-2xl font-semibold mt-4">Website Templates</h3>
                            <p className="mt-2">AI-generated website designs to take your business online with ease.</p>
                        </div>
                    </div>
                </section>

                <section className="px-8 py-16 bg-[#383838] text-white">
                    <h2 className="text-3xl font-bold mb-8 text-center">Subscription Plans</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#EC5C39] shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-semibold">Basic Plan</h3>
                            <p className="mt-2">Includes domain management and basic SEO tools.</p>
                            <Link href="/subscribe">
                                <button className="mt-4 bg-white text-[#EC5C39] py-2 px-4 rounded">Subscribe Now</button>
                            </Link>
                        </div>
                        <div className="bg-[#383838] shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-semibold">Standard Plan</h3>
                            <p className="mt-2">Get advanced SEO handling and unlimited domain features.</p>
                            <Link href="/subscribe">
                                <button className="mt-4 bg-[#EC5C39] text-white py-2 px-4 rounded">Subscribe Now</button>
                            </Link>
                        </div>
                        <div className="bg-[#EC5C39] shadow-lg rounded-lg p-6">
                            <h3 className="text-2xl font-semibold">Premium Plan</h3>
                            <p className="mt-2">All features plus 24/7 customer support for seamless operations.</p>
                            <Link href="/subscribe">
                                <button className="mt-4 bg-white text-[#EC5C39] py-2 px-4 rounded">Subscribe Now</button>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="px-8 py-16 bg-[#F4F4F3]">
                    <h2 className="text-3xl font-bold text-[#000000] mb-8 text-center">Benefits</h2>
                    <ul className="list-disc list-inside space-y-2 text-xl text-[#000000]">
                        <li>Enhance your online presence with AI-generated templates.</li>
                        <li>Effortless management with our domain and SEO services.</li>
                        <li>Flexible subscription plans to suit your business needs.</li>
                        <li>Boost your brand with premium, ultra-elegant designs.</li>
                    </ul>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default TemplatesAndSubscriptions;