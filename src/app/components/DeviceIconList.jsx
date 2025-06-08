// components/DeviceIconList.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const brandVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

const DeviceIconList = ({ deviceIcons, smartTVBrands }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className='py-20 px-4 bg-white'>
      <div className='max-w-5xl mx-auto text-center'>
        <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-12'>
          Watch on your favorite devices
        </h3>

        {/* Device Icons */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center'>
          {deviceIcons.map((device, i) => (
            <motion.div
              key={i}
              custom={i}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              variants={iconVariants}
              whileHover={{ scale: 1.1, rotate: -2 }}
              className='flex flex-col items-center p-4 transition-colors duration-300 hover:bg-gray-50 rounded-xl'
            >
              <div className='text-4xl'>{device.icon}</div>
              <div className='mt-2 font-medium text-gray-800'>
                {device.name}
              </div>
              {device.subtitle && (
                <div className='text-sm text-gray-500'>{device.subtitle}</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* TV Brands */}
        <div className='mt-20'>
          <h4 className='text-xl font-semibold text-gray-800 mb-6'>
            Also available on:
          </h4>
          <div className='flex flex-wrap justify-center gap-3'>
            {smartTVBrands.map((brand, i) => (
              <motion.span
                key={i}
                custom={i}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                variants={brandVariants}
                whileHover={{ scale: 1.05, backgroundColor: '#e2e8f0' }}
                className='text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full cursor-pointer'
              >
                {brand.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceIconList;
