// // components/ApplePromoGrid.tsx
// 'use client';

// import { motion } from 'framer-motion';

// type PromoItem = {
//   id: string;
//   title: string;
//   description: string;
//   buttonText?: string;
//   buttonLink?: string;
//   image: string;
//   alt?: string;
// };

// const promoItems: PromoItem[] = [
//   {
//     id: 'bundle',
//     title: 'One',
//     description:
//       'Bundle Apple TV+ with up to five other great services. And enjoy more for less.',
//     buttonText: 'Try Apple One for Free',
//     buttonLink: '#',
//     image: '/poster/grid-1.jpg',
//     alt: 'Apple Bundle Icons',
//   },
//   {
//     id: 'student-plan',
//     title: 'The Apple Music Student Plan comes with Apple TV+ for free.',
//     description: '',
//     buttonText: 'Try Apple Music for Free',
//     buttonLink: '#',
//     image: '/poster/grid-2.jpg',
//     alt: 'Student Plan iPhones',
//   },
//   {
//     id: 'tv4k',
//     title: 'tv 4K',
//     description: 'The Apple experience. Cinematic in every sense.',
//     buttonText: 'Buy',
//     buttonLink: '#',
//     image: '/poster/grid-3.jpg',
//     alt: 'Apple TV 4K device',
//   },
//   {
//     id: 'airplay',
//     title: 'AirPlay',
//     description: 'Bring Apple TV+ to a screen near you.',
//     buttonText: 'Learn more.',
//     buttonLink: '#',
//     image: '/poster/grid-4.jpg',
//     alt: 'Airplay on iPhone',
//   },
// ];

// const ApplePromoGrid = () => {
//   return (
//     <section className='py-12 px-4 bg-white'>
//       <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6'>
//         {promoItems.map((item, index) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className='bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center gap-4'
//           >
//             <div className='flex-1 space-y-2'>
//               <h3 className='text-xl font-semibold text-gray-900'>
//                 {item.title}
//               </h3>
//               {item.description && (
//                 <p className='text-gray-700 text-sm'>{item.description}</p>
//               )}
//               {item.buttonText && (
//                 <a
//                   href={item.buttonLink}
//                   className='inline-block mt-2 text-sm font-medium text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition'
//                 >
//                   {item.buttonText}
//                 </a>
//               )}
//             </div>
//             <div className='w-full sm:w-40'>
//               <img
//                 src={item.image}
//                 alt={item.alt || item.title}
//                 width={300}
//                 height={200}
//                 className='w-full object-contain'
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ApplePromoGrid;
import { Apple } from 'lucide-react';

import { motion } from 'framer-motion';

const promoItems = [
  {
    id: 'bundle',
    subtitle: 'One',
    title: 'Bundle Apple TV+ with up to five other great services.',
    description: 'And enjoy more for less.',
    buttonText: 'Try Apple One for Free',
    buttonLink: '#',
    image: '/poster/grid-1.jpg',
    alt: 'Apple Bundle Icons',
    size: 'full',
    backgroundColor: 'bg-gray-100',
    textColor: 'text-black',
    buttonColor: 'bg-black text-white hover:bg-gray-800',
  },
  {
    id: 'student-plan',
    title: 'The Apple Music Student Plan comes with Apple TV+ for free.',
    description: '',
    buttonText: 'Try Apple Music for Free',
    buttonLink: '#',
    image: '/poster/grid-2.jpg',
    alt: 'Student Plan iPhones',
    size: 'full',
    backgroundColor: 'bg-gray-100',
    textColor: 'text-black',
    buttonColor: 'bg-black text-white hover:bg-gray-800',
  },
  {
    id: 'tv4k',
    subtitle: 'tv 4K',
    title: 'The Apple experience. Cinematic in every sense.',
    description: '',
    buttonText: 'Buy',
    buttonLink: '#',
    image: '/poster/grid-3.jpg',
    alt: 'Apple TV 4K device',
    size: 'half',
    backgroundColor: 'bg-gray-100',
    textColor: 'text-black',
    buttonColor: 'bg-blue-500 text-white hover:bg-blue-600',
  },
  {
    id: 'airplay',
    subtitle: 'AirPlay',
    title: 'Bring Apple TV+ to a screen near you.',
    description: '',
    buttonText: 'Learn more',
    buttonLink: '#',
    image: '/poster/grid-4.jpg',
    alt: 'Airplay on iPhone',
    size: 'half',
    backgroundColor: 'bg-gray-100',
    textColor: 'text-black',
    buttonColor: 'bg-blue-500 text-white hover:bg-blue-600',
  },
];

const ApplePromoGrid = () => {
  return (
    <section className='py-8 px-4 bg-white'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          {promoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className={`
                ${
                  item.size === 'full'
                    ? 'lg:col-span-2 flex flex-col md:flex-row  justify-center'
                    : 'lg:col-span-1 flex flex-col text-center'
                }
                ${item.backgroundColor} rounded-2xl overflow-hidden relative
                ${
                  item.size === 'full'
                    ? 'min-h-[200px]'
                    : 'min-h-auto flex flex-col  text-left'
                }
                group hover:shadow-lg transition-shadow duration-300
              `}
            >
              <div
                className={`
                p-8 h-full flex
                ${
                  item.size === 'full'
                    ? 'flex-col md:flex-row  justify-between'
                    : 'flex-col justify-between'
                }
              `}
              >
                {/* Text Content */}
                <div
                  className={`
                  ${item.textColor} space-y-3
                  ${
                    item.size === 'full'
                      ? 'flex-1 pr-8 flex-col md:flex-row'
                      : 'flex-1'
                  }
                `}
                >
                  {item.subtitle && (
                    <div className='flex items-center space-x-2'>
                      <Apple size={16} className='text-gray-800 ' />
                      <span className='text-sm font-semibold '>
                        {item.subtitle}
                      </span>
                    </div>
                  )}

                  <h3
                    className={`
                    font-semibold leading-tight
                    ${
                      item.size === 'full'
                        ? 'text-2xl lg:text-3xl max-w-md'
                        : 'text-xl lg:text-2xl'
                    }
                  `}
                  >
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className='text-base opacity-80 leading-relaxed'>
                      {item.description}
                    </p>
                  )}

                  {item.buttonText && (
                    <div className='pt-2 pb-8 md:pb-0'>
                      <a
                        href={item.buttonLink}
                        className={`
                          inline-block px-6 py-2.5 rounded-full font-medium text-sm
                          ${item.buttonColor} transition-all duration-200
                          hover:transform hover:scale-105
                        `}
                      >
                        {item.buttonText}
                      </a>
                    </div>
                  )}
                </div>

                {/* Image */}
                <div
                  className={`
                  flex-shrink-0
                  ${item.size === 'full' ? 'w-64 h-32' : 'w-full h-40 mt-4'}
                `}
                >
                  <img
                    src={item.image}
                    alt={item.alt || item.title}
                    className='w-full h-full md:h-[250px] object-contain'
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplePromoGrid;
