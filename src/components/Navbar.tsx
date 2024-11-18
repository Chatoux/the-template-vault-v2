'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#383838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={50} 
                height={50} 
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="text-[#FFFFFF] hover:text-[#EC5C39] px-4 py-2">Home</Link>
            <Link href="/ai-generated-websites" className="text-[#FFFFFF] hover:text-[#EC5C39] px-4 py-2">AI Generated Websites</Link>
            <Link href="/templates-&-subscriptions" className="text-[#FFFFFF] hover:text-[#EC5C39] px-4 py-2">Templates &amp; Subscriptions</Link>
            <Link href="/contact-us" className="text-[#FFFFFF] hover:text-[#EC5C39] px-4 py-2">Contact Us</Link>
            <Link href="/portfolio" className="text-[#FFFFFF] hover:text-[#EC5C39] px-4 py-2">Portfolio</Link>
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FFFFFF] hover:text-[#EC5C39] focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-[#FFFFFF] hover:text-[#EC5C39] px-4 py-2">Home</Link>
            <Link href="/ai-generated-websites" className="block text-[#FFFFFF] hover:text-[#EC5C39] px-4 py-2">AI Generated Websites</Link>
            <Link href="/templates-&-subscriptions" className="block text-[#FFFFFF] hover:text-[#EC5C39] px-4 py-2">Templates &amp; Subscriptions</Link>
            <Link href="/contact-us" className="block text-[#FFFFFF] hover:text-[#EC5C39] px-4 py-2">Contact Us</Link>
            <Link href="/portfolio" className="block text-[#FFFFFF] hover:text-[#EC5C39] px-4 py-2">Portfolio</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;