"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div>
          {/* Logo */}
          <div className='flex flex-wrap justify-between'>
            <div className='flex items-center w-full md:w-1/4 mb-6 md:mb-0'>
              <Image
                width={90}
                height={90}
                src='/assets/footer-logo.png'
                alt='We5ive Logo'
              />
              <p className='ml-2 text-xl font-bold'>
                We<span className='text-purple-600'>5</span>ive
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className='w-full md:w-2/4 mb-6 md:mb-0'>
              <h3 className='text-lg font-semibold mb-2'>
                Sign Up For Our Newsletter!
              </h3>
              <p className='text-gray-400 mb-4'>
                Get notified about updates and be the first to get early access
                to new Podcast episodes.
              </p>
              <form onSubmit={handleSubmit} className='flex'>
                <input
                  type='email'
                  placeholder='Your email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-purple-600'
                  required
                />
                <button
                  type='submit'
                  className='bg-purple-600 hover:bg-purple-700 px-8 py-2 rounded-r-md'
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Footer Links */}
          <div className='w-full mt-10'>
            <div className='flex items-center justify-between gap-4'>
              <div>
                <h4 className='font-semibold mb-2'>Contact Us</h4>
                <p className='text-gray-400'>support@we5ive.com</p>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>About Us</h4>
                <ul className='text-gray-400'>
                  <li>
                    <a href='#' className='hover:text-white'>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-white'>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>Legal</h4>
                <ul className='text-gray-400'>
                  <li>
                    <a href='#' className='hover:text-white'>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-white'>
                      Terms & Condition
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>Social Link</h4>
                <div className='flex space-x-2'>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    <span className='sr-only'>Facebook</span>
                    <svg
                      className='h-6 w-6'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    <span className='sr-only'>Twitter</span>
                    <svg
                      className='h-6 w-6'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                    </svg>
                  </a>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    <span className='sr-only'>LinkedIn</span>
                    <svg
                      className='h-6 w-6'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-purple-600 py-4 text-center'>
        <p>&copy; 2024 | We5ive</p>
      </div>
    </footer>
  );
}
