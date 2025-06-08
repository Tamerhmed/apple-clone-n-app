'use client';
import React, { useState } from 'react';
import FAQAccordion from './FAQAccordion'; // adjust the path as needed

const AppleTVPlusLanding = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqItems = [
    {
      question: 'What is Apple TV+?',
      answer:
        "Apple TV+ is Apple's streaming service featuring original shows, movies and documentaries from the world's most creative storytellers.",
    },
    {
      question: 'How can I watch it?',
      answer:
        'You can watch on Apple devices, smart TVs, streaming devices, gaming consoles, and through web browsers at tv.apple.com.',
    },
    {
      question: 'What does it cost?',
      answer:
        'Apple TV+ costs $9.99 per month with a 7-day free trial. Students get it for $4.99/month.',
    },
    {
      question: 'Can I share with my family?',
      answer:
        'Yes, Apple TV+ supports Family Sharing for up to 6 family members at no additional cost.',
    },
    {
      question: 'Are there commercials? And can I watch on demand?',
      answer:
        'Apple TV+ is completely ad-free and all content is available on-demand whenever you want to watch.',
    },
    {
      question: 'Do I need an Apple TV 4K?',
      answer:
        'No, you can watch Apple TV+ on many devices, not just Apple TV hardware. It works on most smart TVs and streaming devices.',
    },
    {
      question: 'Can I download to watch offline?',
      answer:
        'Yes, you can download movies and shows for offline viewing on iPhone, iPad, and Mac.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className='py-20 px-4 bg-gradient-to-b from-gray-10 to-gray-40'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Questions?
            <span className='bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'>
              {' '}
              Answers.
            </span>
          </h2>
          <p className='text-gray-600 text-lg'>
            Everything you need to know about Apple TV+
          </p>
        </div>

        <div className='space-y-4'>
          {faqItems.map((item, index) => (
            <FAQAccordion
              key={index}
              item={item}
              index={index}
              isOpen={openFAQ === index}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppleTVPlusLanding;
