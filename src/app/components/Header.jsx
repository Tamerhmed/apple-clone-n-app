import { FaApple } from 'react-icons/fa';
import Container from './Container';
import Button from './Button';

export default function Header() {
  return (
    <>
      <header className='bg-backgroundContrast text-secondary'>
        <Container className='flex items-center  min-h-[var(--header-row-height)] pt-2'>
          <a
            href='/'
            className='-ml-6 h-[var(--header-row-height)] flex items-center px-6 text-xl'
          >
            <div className='flex items-center gap-1 text-xl'>
              <FaApple size={25} />
              <span className='sr-only'>Back to homepage</span>
            </div>
          </a>
        </Container>
      </header>
      <div className='sticky  top-0 z-20 bg-backgroundContrast text-secondary'>
        <Container className='flex items-center  min-h-[var(--header-row-height)] justify-between py-4'>
          <p className='text-xl font-semibold'>Apple TV+</p>
          <Button size='small'>Stream now</Button>
        </Container>
      </div>
    </>
  );
}
