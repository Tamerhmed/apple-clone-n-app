// app/video-carousel/page.js (for Next.js 13+ with App Router)
'use client';

import { useRef, useState, useMemo } from 'react';
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from 'framer-motion';
import { useWindowSize } from 'react-use';
import Image from 'next/image';
import { movies, randomMoviesSet1, randomMoviesSet2 } from '@/data/movies.js';

// const movies = [
//   { poster: '/poster/bad-monkey-1.jpg', name: 'Bad Monkey' },
//   {
//     poster: '/poster/presumed_innocent-1.jpg',
//     name: 'presumed innocent',
//   },
//   {
//     poster: '/poster/fly-me.jpg',
//     name: 'fly me',
//   },
//   { poster: '/poster/silo.jpg', name: 'Silo' },
//   {
//     poster: '/poster/smoke.jpg',
//     name: 'Smoke',
//   },
//   {
//     poster: '/poster/planet.png',
//     name: 'plant',
//   },
//   { poster: '/poster/jane.jpg', name: 'Jane' },
// ];

// const randomMoviesSet1 = [
//   { poster: '/poster/bad-monkey-1.jpg', name: 'Bad Monkey' },
//   {
//     poster: '/poster/presumed_innocent-1.jpg',
//     name: 'presumed innocent',
//   },
//   {
//     poster: '/poster/fly-me.jpg',
//     name: 'fly me',
//   },
//   { poster: '/poster/silo.jpg', name: 'Silo' },
//   {
//     poster: '/poster/smoke.jpg',
//     name: 'Smoke',
//   },
//   {
//     poster: '/poster/planet.png',
//     name: 'plant',
//   },
//   { poster: '/poster/jane.jpg', name: 'Jane' },
// ];
// const randomMoviesSet2 = [
//   { poster: '/poster/bad-monkey-1.jpg', name: 'Bad Monkey' },
//   {
//     poster: '/poster/presumed_innocent-1.jpg',
//     name: 'presumed innocent',
//   },
//   {
//     poster: '/poster/fly-me.jpg',
//     name: 'fly me',
//   },
//   { poster: '/poster/silo.jpg', name: 'Silo' },
//   {
//     poster: '/poster/smoke.jpg',
//     name: 'Smoke',
//   },
//   {
//     poster: '/poster/planet.png',
//     name: 'plant',
//   },
//   { poster: '/poster/jane.jpg', name: 'Jane' },
// ];

export default function VideoCarousel() {
  const [carouselVariant, setCarouselVariant] = useState('inactive');
  const { width, height } = useWindowSize();
  const videoCarouselRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoCarouselRef,
    offset: ['start start', 'end start'],
  });

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1]
  );
  const posterOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    setCarouselVariant(progress >= 0.67 ? 'active' : 'inactive');
  });

  return (
    <motion.div
      animate={carouselVariant}
      className='bg-neutral-950 text-white pb-16'
    >
      <div
        className='mt-[-100vh] h-[300vh] overflow-clip'
        ref={videoCarouselRef}
      >
        <div className='sticky top-0 h-screen flex items-center'>
          <div className='relative flex gap-5 mb-5 left-1/2 -translate-x-1/2'>
            <motion.div
              style={{ opacity: posterOpacity, x: posterTranslateXLeft }}
              className='hidden sm:block aspect-[9/16] md:aspect-video shrink-0 w-[300px] sm:w-[60vw] rounded-2xl overflow-clip'
            >
              <div className='relative w-full h-full'>
                <Image
                  src={movies[0].poster}
                  alt={movies[0].name}
                  fill
                  className='object-center object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>
            </motion.div>

            <motion.div
              style={{ scale: width >= 769 ? scale : 1 }}
              className='relative aspect-[9/16] md:aspect-video shrink-0 w-full sm:w-[60vw] rounded-2xl overflow-clip'
            >
              <div className='relative w-full h-full'>
                <Image
                  src={movies[1].poster}
                  alt={movies[1].name}
                  fill
                  className='object-center object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>
              <motion.div
                variants={{ active: { opacity: 1 }, inactive: { opacity: 0 } }}
                className='hidden sm:flex md:justify-between gap-4 md:gap-0 items-center text-white md:text-lg absolute left-0 bottom-0 w-full p-5'
              >
                <p>
                  <strong>Travel</strong> - There are thrill seekers
                </p>
                <button className='bg-white text-black rounded px-4 py-1 text-sm font-medium'>
                  Stream now
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ opacity: posterOpacity, x: posterTranslateXRight }}
              className='aspect-[9/16] md:aspect-video shrink-0 w-[300px] sm:w-[60vw] rounded-2xl overflow-clip'
            >
              <div className='relative w-full h-full'>
                <Image
                  src={movies[2].poster}
                  alt={movies[2].name}
                  fill
                  className='object-center object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 1, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className='-mt-[calc((100vh-(300px*(16/9))/2)] md:-mt-[calc((100vh-(60vw*(9/16))/2)] space-y-4 pt-5'
      >
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div className='[animate-duration] [--carousel-offset:-32px]'>
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
}

function SmallVideoCarousel({ movies }) {
  return (
    <div className='overflow-clip'>
      <div className='flex gap-3 relative left-[var(--carousel-offset,0px)] animate-carousel-move'>
        {movies.map((movie, index) => (
          <div
            key={`${movie.name}-${index}`}
            className='aspect-video w-[40vw] md:w-[23vw] shrink-0'
          >
            <Image
              src={movie.poster}
              alt={movie.name}
              width={300}
              height={169}
              className='rounded-xl object-cover w-full h-full'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
