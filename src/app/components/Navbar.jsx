'use client';
import {
  FaApple,
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';
import Button from './Button';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Store', href: '/store' },
    { name: 'Mac', href: '/mac' },
    { name: 'iPad', href: '/ipad' },
    { name: 'iPhone', href: '/iphone' },
    { name: 'Watch', href: '/watch' },
    { name: 'Vision', href: '/vision' },
    { name: 'AirPods', href: '/airpods' },
    { name: 'TV & Home', href: '/tv-home' },
    { name: 'Entertainment', href: '/entertainment' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Support', href: '/support' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = async (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    await new Promise((res) => setTimeout(res, 400));
    window.location.href = href;
  };

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className='bg-backgroundContrast text-secondary z-40 relative'
      >
        <Container className='flex items-center justify-between min-h-[var(--header-row-height)] px-4'>
          {/* Apple Logo */}
          <motion.a
            href='/'
            className='flex items-center text-xl hover:text-white transition-colors'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaApple size={20} />
            <span className='sr-only'>Apple</span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className='hidden lg:flex items-center space-x-8'>
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className='text-sm hover:text-white transition-colors py-2'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Icons */}
          <div className='flex items-center space-x-4 lg:space-x-6'>
            <FaSearch className='hover:text-white transition' />
            <FaShoppingBag className='hover:text-white transition' />
            <div className='lg:hidden'>
              <button onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key='mobile-menu'
            className='fixed top-0 left-0 w-full h-full z-50 bg-black text-white px-6 pt-20'
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            {/* Close Button */}
            <div className='absolute top-6 right-6'>
              <button onClick={toggleMobileMenu} aria-label='Close menu'>
                <FaTimes size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className='flex flex-col space-y-6 mt-8'>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className='text-xl font-bold hover:text-gray-300 transition-colors'
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Apple TV+ */}
      <motion.div
        className='sticky top-0 z-20 bg-backgroundContrast text-secondary'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Container className='flex items-center justify-between py-4'>
          <motion.p
            className='text-xl font-semibold'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            Apple TV+
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size='small'>Stream now</Button>
          </motion.div>
        </Container>
      </motion.div>
    </>
  );
}
