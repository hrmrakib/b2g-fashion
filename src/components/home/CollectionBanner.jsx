import Image from "next/image";

const CollectionBanner = () => {
  return (
    <section className='py-12 px-4 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='h-[566px] flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='md:w-1/2 bg-[#EEECFB]'>
            <Image
              width={500}
              height={500}
              src='/assets/man-collection.png'
              alt='Man wearing blue denim shirt and sunglasses'
              className='w-full max-h-[566px] rounded-lg'
            />
          </div>

          <div className='md:w-1/2 space-y-6 text-center md:text-left'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900'>
              MEN COLLECTION
            </h2>

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
        </div>

        <div className='flex justify-center md:justify-center gap-2 mt-8'>
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`w-8 h-2 rounded-full ${
                index === 0 ? "bg-purple-600" : "bg-purple-200"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CollectionBanner;
