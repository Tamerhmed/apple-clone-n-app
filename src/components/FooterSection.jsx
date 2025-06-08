import FooterLink from './FooterLink';
import { motion } from 'framer-motion';
// Footer Section Component

const FooterSection = ({ title, links, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className='mb-8 md:mb-0'
  >
    <h3 className='font-semibold text-gray-900 mb-4 text-sm'>{title}</h3>
    <ul className='space-y-2'>
      {links.map((link, index) => (
        <li key={index}>
          <FooterLink href={link.href}>{link.text}</FooterLink>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default FooterSection;
