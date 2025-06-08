import VideoCarouselWrapper from '@/app/components/VideoCarouselWrapper';
import AppleFooter from './components/AppleFooter';
import ApplePromoGrid from './components/ApplePromoGrid';
import AppleTVDevices from './components/AppleTvDevices';
import AppleTVPlusLanding from './components/AppleTVPlusLanding';
import Navbar from './components/Navbar';
import Hero from './components/section/Hero';
import Usps from './components/section/Usps';

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <main>
        <div className='bg-backgroundContrast relative z-10'>
          <Hero />
          <Usps />
        </div>
        {/* <VideoCarousel /> */}
        <VideoCarouselWrapper />
        <AppleTVDevices />
        <AppleTVPlusLanding />
        <ApplePromoGrid />
        <AppleFooter />
      </main>
    </>
  );
}
