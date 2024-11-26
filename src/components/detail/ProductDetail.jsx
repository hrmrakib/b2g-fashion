"use client";

import { useState } from "react";

export default function ProductDetail() {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("Off White");

  const images = [
    "/assets/d1.png",
    "/assets/d2.png",
    "/assets/d3.png",
    "/assets/d4.png",
  ];

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Off White", "Black"];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {/* Image Section */}
          <div className='relative'>
            <div className='relative h-[600px] w-full overflow-hidden rounded-lg'>
              <img
                src={images[currentImage]}
                alt='Product image'
                // fill
                className='object-cover h-[520px]'
                // priority
              />
              <button
                onClick={previousImage}
                className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white hover:bg-gray-100 p-2 shadow-lg'
              >
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
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
                onClick={nextImage}
                className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white hover:bg-gray-100 p-2 shadow-lg'
              >
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
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
            <div className='-mt-10 grid grid-cols-4 gap-4'>
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative h-24 overflow-hidden rounded-lg ${
                    currentImage === index
                      ? "ring-2 ring-purple-600"
                      : "ring-1 ring-gray-200"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Product thumbnail ${index + 1}`}
                    // fill
                    className='object-cover'
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className='flex flex-col'>
            <div className='mb-6'>
              <span className='inline-block rounded-md bg-purple-900 px-3 py-1 text-sm text-white'>
                New Arrival
              </span>
            </div>
            <h1 className='mb-2 text-3xl font-bold'>White Hoodie</h1>
            <div className='mb-4 flex items-center'>
              <div className='flex'>
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`h-5 w-5 ${
                      index < 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
              <span className='ml-2 text-sm text-gray-600'>(4.0)</span>
              <span className='ml-2 text-sm text-purple-600'>121 reviews</span>
            </div>
            <p className='mb-6 text-2xl font-bold'>BDT 2500</p>

            <div className='border-y-2 border-dashed py-5 flex items-center justify-between'>
              {/* Size Selection */}
              <div className='mb-6'>
                <h2 className='mb-2 text-sm font-medium'>Available Size</h2>
                <div className='flex gap-4'>
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-10 w-10 rounded-full border ${
                        selectedSize === size
                          ? "border-purple-600 bg-purple-600 text-white"
                          : "border-gray-300 bg-white text-gray-900"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className='mb-6'>
                <h2 className='mb-2 text-sm font-medium'>Available Color</h2>
                <div className='flex gap-4'>
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`flex items-center gap-2 rounded-full border px-4 py-2 ${
                        selectedColor === color
                          ? "border-purple-600 bg-purple-600 text-white"
                          : "border-gray-300 bg-white text-gray-900"
                      }`}
                    >
                      <span
                        className={`h-4 w-4 rounded-full ${
                          color === "Off White" ? "bg-gray-100" : "bg-black"
                        }`}
                      />
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* Quantity Selection */}
            <div className='mb-6 mt-8'>
              <h2 className='mb-2 text-sm font-medium'>Quantity</h2>
              <div className='flex items-center'>
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className='rounded-l-3xl border border-r-0 border-gray-300 bg-gray-100 px-4 py-2 text-gray-600 text-lg font-bold hover:bg-gray-200'
                >
                  -
                </button>
                <input
                  type='text'
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className='w-14 border border-gray-300 px-2 py-2 text-center text-lg'
                />
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className='rounded-r-3xl border border-l-0 border-gray-300 bg-gray-100 px-4 py-2 text-gray-600 text-lg font-bold hover:bg-gray-200'
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-4'>
              <button className='flex-1 rounded-md bg-purple-600 py-3 text-white hover:bg-purple-700'>
                Buy Now
              </button>
              <button className='flex-1 rounded-md border border-purple-600 py-3 text-purple-600 hover:text-white hover:bg-purple-600'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* cart */}
      <div className='absolute top-[36%] right-0 bg-[#581FC1] rounded-s-2xl px-8 py-4 flex flex-col items-center justify-center gap-1'>
        <svg
          className='h-6 w-6 text-white'
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
        <h3 className='text-white text-sm font-bold'>Your Bag</h3>
        <p className='text-white text-sm font-bold'>0</p>
      </div>
    </div>
  );
}
