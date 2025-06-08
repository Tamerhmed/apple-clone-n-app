import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Apple } from 'lucide-react';

// Breadcrumb Component
const Breadcrumb = () => {
  const breadcrumbItems = ['Entertainment', 'Apple TV+'];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className='border-b border-gray-200 pb-4 mb-8'
    >
      <div className='flex items-center space-x-2 text-sm text-gray-600'>
        <Apple size={16} className='text-gray-800' />
        <ChevronRight size={12} />
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item}>
            <a href='#' className='hover:text-blue-600 transition-colors'>
              {item}
            </a>
            {index < breadcrumbItems.length - 1 && <ChevronRight size={12} />}
          </React.Fragment>
        ))}
      </div>
    </motion.nav>
  );
};

export default Breadcrumb;
