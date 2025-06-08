import { motion } from 'framer-motion';
import Breadcrumb from './Breadcrumb';
import FooterSection from './FooterSection';
// Main Footer Component
const AppleFooter = () => {
  const footerData = [
    {
      title: 'Shop and Learn',
      links: [
        { href: '#', text: 'Store' },
        { href: '#', text: 'Mac' },
        { href: '#', text: 'iPad' },
        { href: '#', text: 'iPhone' },
        { href: '#', text: 'Watch' },
        { href: '#', text: 'AirPods' },
      ],
    },

    {
      title: 'Entertainment',
      links: [
        { href: '#', text: 'Apple One' },
        { href: '#', text: 'Apple TV+' },
        { href: '#', text: 'Apple Music' },
        { href: '#', text: 'Apple Arcade' },
        { href: '#', text: 'Apple Fitness+' },
        { href: '#', text: 'Apple News+' },
      ],
    },
    {
      title: 'Apple Store',
      links: [
        { href: '#', text: 'Find a Store' },
        { href: '#', text: 'Genius Bar' },
        { href: '#', text: 'Today at Apple' },

        { href: '#', text: 'Apple Camp' },
        { href: '#', text: 'Financing' },
        { href: '#', text: 'Order Status' },
      ],
    },

    {
      title: 'Apple Values',
      links: [
        { href: '#', text: 'Accessibility' },
        { href: '#', text: 'Education' },
        { href: '#', text: 'Environment' },
        { href: '#', text: 'Privacy' },
        { href: '#', text: 'Racial Equity and Justice' },
        { href: '#', text: 'Supply Chain' },
      ],
    },
    {
      title: 'About Apple',
      links: [
        { href: '#', text: 'Newsroom' },
        { href: '#', text: 'Apple Leadership' },
        { href: '#', text: 'Career ' },
        { href: '#', text: 'Investors' },
        { href: '#', text: 'Events' },
        { href: '#', text: 'Contact Apple' },
      ],
    },
  ];

  return (
    <footer className='bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <Breadcrumb />

        {/* Footer Links Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12'>
          {footerData.map((section, index) => (
            <FooterSection
              key={section.title}
              title={section.title}
              links={section.links}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Copyright and Legal Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className='border-t border-gray-200 pt-8'
        >
          <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
            <div className='mb-4 md:mb-0'>
              <p className='text-sm text-gray-600'>
                Copyright © 2025 Apple Inc. All rights reserved.
              </p>
            </div>

            <div className='flex flex-wrap items-center space-x-4 text-sm'>
              <a
                href='#'
                className='text-gray-600 hover:text-blue-600 transition-colors'
              >
                Privacy Policy
              </a>
              <span className='text-gray-400'>|</span>
              <a
                href='#'
                className='text-gray-600 hover:text-blue-600 transition-colors'
              >
                Terms of Use
              </a>
              <span className='text-gray-400'>|</span>
              <a
                href='#'
                className='text-gray-600 hover:text-blue-600 transition-colors'
              >
                Sales and Refunds
              </a>
              <span className='text-gray-400'>|</span>
              <a
                href='#'
                className='text-gray-600 hover:text-blue-600 transition-colors'
              >
                Legal
              </a>
              <span className='text-gray-400'>|</span>
              <a
                href='#'
                className='text-gray-600 hover:text-blue-600 transition-colors'
              >
                Site Map
              </a>
              <span className='text-gray-400 hidden md:inline'>|</span>
              <span className='text-gray-600 font-medium'>Australia</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default AppleFooter;
