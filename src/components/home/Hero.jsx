const Hero = () => {
  return (
    <div className='min-h-screen bg-gray-100 '>
      <main>
        <section className='relative h-[calc(100vh-80px)] bg-gray-900 text-white'>
          <img
            src='/assets/hero.png'
            alt='Fashion model'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 flex flex-col justify-center items-center px-8 md:px-16'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
              Elevate Your Everyday Style
            </h1>
            <p className='text-xl md:text-2xl mb-8'>
              Discover the Latest Trends in Sustainable Fashion
            </p>
            <div className='flex space-x-1'>
              <button className='bg-purple-600 text-white px-8 py-1.5 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300'>
                Shop Now
              </button>
              <button className='bg-purple-600 text-white px-3 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 -rotate-45 transition duration-300'>
                <svg
                  className='inline-block ml-2 w-5 h-5'
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
          </div>
        </section>

        <section className='bg-purple-600 text-white py-6'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap justify-between items-center text-center'>
              <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                <svg
                  className='h-8 w-8 mx-auto mb-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
                  />
                </svg>
                <h3 className='font-semibold'>FREE SHIPPING</h3>
                <p className='text-sm'>BUY BDT 3000+ & GET FREE DELIVERY</p>
              </div>
              <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                <svg
                  className='h-8 w-8 mx-auto mb-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                  />
                </svg>
                <h3 className='font-semibold'>7 DAYS EXCHANGE</h3>
                <p className='text-sm'>
                  EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
                </p>
              </div>
              <div className='w-full md:w-1/3'>
                <svg
                  className='h-8 w-8 mx-auto mb-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                  />
                </svg>
                <h3 className='font-semibold'>100% PAYMENT SECURE</h3>
                <p className='text-sm'>
                  CASH ON DELIVERY AND SECURED ONLINE PAYMENT
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Hero;
