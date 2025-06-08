// components/FAQAccordion.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = ({ item, index, isOpen, toggleFAQ }) => {
  return (
    <div className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100'>
      <button
        onClick={() => toggleFAQ(index)}
        className='w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-200 group'
      >
        <span className='font-semibold text-gray-900 text-base group-hover:text-black transition-colors'>
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-all duration-300 ease-out group-hover:text-gray-700 ${
            isOpen ? 'rotate-180 text-blue-500' : ''
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { height: 'auto', opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className='overflow-hidden'
          >
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className='px-6 pb-5'
            >
              <p className='text-gray-600 leading-relaxed'>{item.answer}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQAccordion;
