"use client";

import { newArrivals } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FeaturedProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 4 : prevIndex - 1
    );
  };

  return (
    <section className='py-12 px-4 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <div>
            <p className='text-purple-600 text-sm font-medium mb-2'>
              FEATURED PRODUCT
            </p>
            <h2 className='text-2xl font-bold text-gray-900'>New Arrivals</h2>
          </div>
          <div className='flex gap-2'>
            <button
              onClick={prevSlide}
              className='p-2 rounded-full border border-gray-300 hover:border-purple-600 transition-colors'
              aria-label='Previous products'
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
              onClick={nextSlide}
              className='p-2 rounded-full border border-gray-300 hover:border-purple-600 transition-colors'
              aria-label='Next products'
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
          {newArrivals.slice(currentIndex, currentIndex + 4).map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className='bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'
            >
              <div className='relative'>
                <Image
                  width={500}
                  height={288}
                  src={product.image}
                  alt={product.name}
                  className='object-fill w-full h-[288px]'
                />
              </div>
              <div className='p-4'>
                <div className='flex justify-between items-center mb-2'>
                  <h3 className='text-gray-900 font-medium'>{product.name}</h3>
                  <p className='text-gray-900 font-medium'>
                    BDT {product.price}
                  </p>
                </div>
                <button
                  className='w-full py-2 px-4 bg-white text-purple-600 border border-purple-600 rounded hover:bg-purple-600 hover:text-white transition-colors'
                  onClick={() => console.log(`Added ${product.name} to cart`)}
                >
                  Add to Cart
                </button>
              </div>
            </Link>
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
};
export default FeaturedProduct;
