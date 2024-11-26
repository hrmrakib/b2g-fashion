"use client";

const PromotionalBanner = () => {
  return (
    <section className='bg-[#F8F5FF] py-12 px-4 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='space-y-4 md:w-1/2 text-center md:text-left mb-8 md:mb-0'>
            <h3 className='text-purple-600 font-cursive text-2xl'>Big Deal</h3>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
              <span className='text-purple-600'>30%</span>
              <span className='text-gray-900'> Off for New Customers</span>
            </h2>
            <button
              className='inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors'
              onClick={() => console.log("Shop Now clicked")}
            >
              Shop Now
              <svg
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </button>
          </div>

          <div className='md:w-1/2'>
            <img
              src='/assets/big-deal.png'
              alt='Happy couple wearing sunglasses and fashionable clothing'
              className='w-full h-[450px] object-fill rounded-lg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PromotionalBanner;
