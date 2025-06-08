'use client';
import Button from '../Button';
import Container from '../Container';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const videoContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  return (
    <div className='bg-black relative  text-white'>
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className='absolute left-0 -top-[--header-height] w-full h-[200vh]'
      >
        <img
          src='/poster/napoleon.webp'
          className='sticky h-screen object-cover top-0 left-0 w-full'
        />
      </motion.div>
      <Container className='relative z-10 h-[80svh] gap-y-8'>
        <motion.div
          className='flex flex-col items-start justify-end h-full'
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: 'easeOut',
              },
            },
          }}
          whileInView='visible'
          exit='hidden'
          animate='hidden'
          viewport={{ amount: 0.9 }}
        >
          <h1 className='text-4xl md:text-7xl font-bold'>
            All Apple Originals.
            <span className='block'>Only on Apple TV+.</span>
          </h1>
          <Button className='mb-16 mt-8' size='large'>
            Stream now
          </Button>
          <div className='text-2xl font-semibold flex w-full gap-x-2 flex-wrap items-center'>
            Watch on the
            <img
              src='/poster/apple-tv.svg'
              className='max-w-[50px] inline-block'
            />
            <span className='inline-block'>app.</span>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
