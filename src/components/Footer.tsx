'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#383838] text-[#FFFFFF] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex mt-2">
              <Link href="https://facebook.com" passHref>
                <a className="block p-2 rounded hover:bg-[#EC5C39] transition">
                  <Image
                    src="/icons/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
              <Link href="https://twitter.com" passHref>
                <a className="block p-2 rounded ml-2 hover:bg-[#EC5C39] transition">
                  <Image
                    src="/icons/twitter.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
              <Link href="https://instagram.com" passHref>
                <a className="block p-2 rounded ml-2 hover:bg-[#EC5C39] transition">
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="font-semibold">Contact Us</p>
            <p className="mt-1">Email: <a href="mailto:info@example.com" className="underline hover:text-[#EC5C39] transition">info@example.com</a></p>
            <p>Phone: <a href="tel:+123456789" className="underline hover:text-[#EC5C39] transition">+123 456 789</a></p>
          </div>
        </div>

        <div className="mt-8 border-t border-[#F4F4F3] pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;