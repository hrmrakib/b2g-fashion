"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductReviews() {
  const [activeTab, setActiveTab] = useState("Review & Rating");
  const [sortBy, setSortBy] = useState("Newest");

  const tabs = ["Details", "Review & Rating", "Discussion"];

  const reviews = [
    {
      id: 1,
      author: "Cameron Williamvvvson",
      avatar: "/assets/review-person.png",
      rating: 4,
      comment: "Very Nice!!",
      likes: 10,
      daysAgo: 3,
    },
    {
      id: 2,
      author: "Cameron Williamson",
      avatar: "/assets/review-person.png",
      rating: 4,
      comment: "Very Nice!!",
      likes: 10,
      daysAgo: 3,
    },
  ];

  const ratingStats = {
    average: 4.0,
    total: 121,
    distribution: [
      { stars: 5, count: 50 },
      { stars: 4, count: 5 },
      { stars: 3, count: 10 },
      { stars: 2, count: 30 },
      { stars: 1, count: 2 },
    ],
  };

  const StarRating = ({ rating }) => (
    <div className='flex'>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-5 w-5 ${
            star <= rating ? "text-yellow-400" : "text-gray-200"
          }`}
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
        </svg>
      ))}
    </div>
  );

  return (
    <div className='mx-auto max-w-7xl px-4 py-8'>
      {/* Tabs */}
      <div className='mb-8 border-b'>
        <div className='flex space-x-8'>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border-b-2 pb-4 text-sm font-medium ${
                activeTab === tab
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
        {/* Reviews List */}
        <div className='lg:col-span-2'>
          <div className='mb-4 flex items-center justify-between'>
            <button className='inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'>
              {sortBy}
              <svg
                className='ml-2 h-5 w-5 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
          </div>

          <div className='space-y-6'>
            {reviews.map((review) => (
              <div key={review.id} className='flex space-x-4'>
                <div className='flex-shrink-0'>
                  <Image
                    width={10}
                    height={10}
                    className='h-10 w-10 rounded-full'
                    src={review.avatar}
                    alt={`${review.author}'s avatar`}
                  />
                </div>
                <div className='flex-grow'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-sm font-medium text-gray-900'>
                      {review.author}
                    </h3>
                    <p className='text-sm text-gray-500'>
                      {review.daysAgo} days
                    </p>
                  </div>
                  <StarRating rating={review.rating} />
                  <p className='mt-2 text-sm text-gray-700'>{review.comment}</p>
                  <div className='mt-2 flex items-center space-x-2'>
                    <button className='inline-flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700'>
                      <svg
                        className='h-5 w-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
                        />
                      </svg>
                      <span>{review.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Summary */}
        <div className='lg:col-span-1'>
          <div className='rounded-lg bg-white p-6 shadow'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg font-medium text-gray-900'>
                Product Review
              </h3>
              <span className='text-sm text-purple-600'>
                {ratingStats.total} reviews
              </span>
            </div>

            <div className='mt-4 flex items-center'>
              <StarRating rating={Math.floor(ratingStats.average)} />
              <span className='ml-2 text-sm text-gray-500'>
                ({ratingStats.average})
              </span>
            </div>

            <div className='mt-6 space-y-2'>
              {ratingStats.distribution.map((stat) => (
                <div key={stat.stars} className='flex items-center'>
                  <span className='w-8 text-sm text-gray-600'>
                    {stat.stars}
                  </span>
                  <div className='ml-4 flex-grow'>
                    <div className='h-2 w-full overflow-hidden rounded-full bg-gray-200'>
                      <div
                        className='h-full bg-yellow-400'
                        style={{
                          width: `${(stat.count / ratingStats.total) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <span className='ml-4 w-12 text-sm text-gray-500'>
                    {stat.count}
                  </span>
                </div>
              ))}
            </div>

            <div className='mt-6 flex justify-end'>
              <span className='inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800'>
                Fazlul
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
