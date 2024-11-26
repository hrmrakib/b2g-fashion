"use client";

import Link from "next/link";
import React, { useState } from "react";

const NavItem = ({ children, className }) => (
  <li
    className={`mx-4 cursor-pointer text-[#646464] hover:text-purple-500 ${className}`}
  >
    {children}
  </li>
);

const IconButton = ({ children, className, href }) => (
  <Link
    href={href || "#"}
    className={`ml-4 text-gray-700 hover:text-purple-500 ${className}`}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-[#F5F3FF] shadow-md'>
      <nav className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href={"/"} className='flex items-center'>
          <img src='/assets/logo.png' alt='We5ive Logo' className='' />
          <p className='ml-2 text-xl font-bold text-gray-800'>
            We<span className='text-purple-600'>5</span>ive
          </p>
        </Link>

        <ul className='hidden md:flex'>
          <NavItem href={"/"} className={"text-[#581FC1]"}>
            Home
          </NavItem>
          <NavItem href='/'>Shop</NavItem>
          <NavItem href='/'>Deals</NavItem>
          <NavItem href='/'>What's New</NavItem>
        </ul>

        <div className='flex items-center'>
          {/* Search bar */}
          <div className='relative hidden md:block'>
            <input
              type='text'
              placeholder='Search'
              className='pl-8 pr-2 py-2 rounded-full bg-white text-black placeholder:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
            <span className='absolute left-2 top-2.5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                color='#1E1E1E'
                width={"20"}
                height={"20"}
                fill='none'
                stroke='currentColor'
                strokeWidth='1'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-search'
              >
                <circle cx='11' cy='11' r='8'></circle>
                <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
              </svg>
            </span>
          </div>

          {/* Cart Icons */}
          <IconButton className={"relative"}>
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
              />
            </svg>
            <span className='absolute -top-1 -right-1 rounded-full w-4 h-4 bg-[#1E1E1E] text-white text-xs flex items-center justify-center'>
              0
            </span>
          </IconButton>

          {/* Profile Icon */}
          <IconButton>
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          </IconButton>
          <button
            className='md:hidden ml-4'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className='md:hidden bg-white p-4'>
          <ul className='flex flex-col space-y-2'>
            <NavItem>Home</NavItem>
            <NavItem>Shop</NavItem>
            <NavItem>Deals</NavItem>
            <NavItem>What's New</NavItem>
          </ul>
          <input
            type='text'
            placeholder='Search'
            className='mt-4 w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
