import {
  Smartphone,
  Tablet,
  Laptop,
  Tv,
  SatelliteDish,
  PcCase,
  Headset,
} from 'lucide-react';
import { motion } from 'framer-motion';

const devices = [
  { name: 'Apple TV', icon: <Tv size={50} /> },
  { name: 'iPhone', icon: <Smartphone size={50} /> },
  { name: 'iPad', icon: <Tablet size={50} /> },
  { name: 'Mac', icon: <Laptop size={50} /> },
  { name: 'Apple Vision Pro', icon: <Headset size={50} /> },
  { name: 'AirPlay', icon: <SatelliteDish size={50} /> },
  {
    name: 'Android',
    icon: <Smartphone size={50} />,
    subtitle: (
      <a
        href='#'
        className='text-xs text-blue-600 underline hover:text-blue-800 transition-colors'
      >
        Download on Google Play
      </a>
    ),
  },
  {
    name: 'PC',
    icon: <PcCase size={50} />,
    subtitle: (
      <a
        href='#'
        className='text-xs text-blue-600 underline hover:text-blue-800 transition-colors'
      >
        Download on Microsoft Store
      </a>
    ),
  },
];

const smartTVBrands = [
  { name: 'SAMSUNG TV', logo: 'SAMSUNG' },
  { name: 'LG SMART TV', logo: 'LG TV' },
  { name: 'Roku', logo: 'Roku' },
  { name: 'SONY', logo: 'SONY' },
  { name: 'fetch', logo: 'fetch' },
  { name: 'fire tv', logo: 'fire tv' },
  { name: 'Google TV', logo: 'Google TV' },
  { name: 'PlayStation', logo: 'PlayStation' },
  { name: 'XBOX', logo: 'XBOX' },
  { name: 'Hubbl', logo: 'Hubbl' },
  { name: 'FOXTEL', logo: 'FOXTEL' },
];

const AppleTVDevices = () => {
  return (
    <section className='bg-white py-16 text-center px-4'>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='max-w-2xl mx-auto mb-16'
      >
        <div className='mx-auto w-12 h-12 mb-6 bg-black rounded-lg flex items-center justify-center'>
          <Tv size={24} className='text-white' />
        </div>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight mb-6'>
          Watch Apple TV+ <br />
          anywhere <br />
          <span className='text-black'>on the Apple TV app.</span>
        </h1>
        <p className='text-sm text-gray-600 leading-relaxed'>
          Find the Apple TV app on your favorite Apple devices. <br />
          Or watch Apple TV+ online at{' '}
          <a
            href='https://tv.apple.com'
            className='text-blue-600 underline hover:text-blue-800 transition-colors'
          >
            tv.apple.com
          </a>
          .
        </p>
      </motion.div>

      {/* Devices Grid */}
      <div className='max-w-2xl mx-auto mb-20'>
        <div className='grid grid-cols-4 gap-8 md:gap-10'>
          {devices.map((device, index) => (
            <motion.div
              key={index}
              className='flex flex-col items-center group cursor-pointer'
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className='w-16 h-16 mb-3 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors duration-200'>
                <div className='text-gray-800 group-hover:text-black transition-colors'>
                  {device.icon}
                </div>
              </div>
              <span className='text-sm font-medium text-gray-900 mb-1'>
                {device.name}
              </span>
              {device.subtitle && <div className='mt-1'>{device.subtitle}</div>}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Smart TV Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='max-w-5xl mx-auto'
      >
        <div className='mb-8'>
          <p className='text-3xl font-semibold text-black mb-1'>
            See it on your
          </p>
          <h3 className='text-3xl font-semibold text-black mb-1'>smart TV</h3>
          <p className='text-3xl font-semibold mb-4'>or streaming device.</p>
          <a
            href='#'
            className='text-sm text-blue-600 underline hover:text-blue-800 transition-colors inline-block'
          >
            Explore compatible devices
          </a>
        </div>

        {/* Brand logos grid */}
        <div className='max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center'>
          {smartTVBrands.map((brand, i) => (
            <motion.div
              key={i}
              className='flex items-center justify-center h-12 w-24 group cursor-pointer'
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`text-center ${
                  brand.name === 'SAMSUNG TV'
                    ? 'text-md'
                    : brand.name === 'LG SMART TV'
                    ? 'text-md'
                    : brand.name === 'Roku'
                    ? 'text-md font-bold'
                    : brand.name === 'SONY'
                    ? 'text-md font-bold'
                    : brand.name === 'fetch'
                    ? 'text-md lowercase font-bold'
                    : brand.name === 'fire tv'
                    ? 'text-md lowercase'
                    : brand.name === 'Google TV'
                    ? 'text-md'
                    : brand.name === 'PlayStation'
                    ? 'text-md'
                    : brand.name === 'XBOX'
                    ? 'text-md font-bold'
                    : brand.name === 'Hubbl'
                    ? 'text-md font-bold'
                    : 'text-md font-bold'
                } text-gray-800 group-hover:text-black transition-colors font-bold leading-tight`}
              >
                {brand.logo.split('\n').map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AppleTVDevices;
