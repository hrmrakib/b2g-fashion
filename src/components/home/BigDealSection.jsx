"use client";

import { useState } from "react";
import { products } from "../constants";

export default function BigDealSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill='currentColor'
        viewBox='0 0 20 20'
      >
        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
      </svg>
    ));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % 2);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <section className='py-12 px-4 md:px-8 bg-[#F8F5FF]'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <div>
            <p className='text-purple-600 text-sm font-medium mb-2'>SUMMER</p>
            <h2 className='text-2xl font-bold text-[#1D1D1D]'>Big Deal</h2>
          </div>
          <div className='flex gap-2'>
            <button
              onClick={prevPage}
              className='p-2 rounded-full border border-gray-300 hover:border-purple-600 transition-colors'
              aria-label='Previous page'
            >
              <svg
                className='w-5 h-5 text-gray-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <button
              onClick={nextPage}
              className='p-2 rounded-full border border-gray-300 hover:border-purple-600 transition-colors'
              aria-label='Next page'
            >
              <svg
                className='w-5 h-5 text-gray-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <div
              key={product.id}
              className='bg-white rounded-lg overflow-hidden'
            >
              <div className='relative'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-[300px] object-cover'
                />
                <div className='absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm'>
                  Up to 40%
                </div>
              </div>
              <div className='p-4'>
                <div className='flex items-center gap-1 mb-2'>
                  {renderStars(product.rating)}
                  <span className='text-gray-500 text-sm'>
                    ({product.reviews})
                  </span>
                </div>
                <h3 className='text-gray-900 font-medium mb-2'>
                  {product.name}
                </h3>
                <p className='text-gray-900 font-medium mb-4'>
                  BDT {product.price}
                </p>
                <button
                  className='w-full py-2 px-4 border border-purple-600 text-purple-600 rounded hover:bg-purple-600 hover:text-white transition-colors'
                  onClick={() => console.log(`Added ${product.name} to cart`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-8'>
          <button className='px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors'>
            See more
          </button>
        </div>
      </div>
    </section>
  );
}
