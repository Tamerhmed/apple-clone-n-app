'use client';

import { useEffect, useState } from 'react';
import VideoCarousel from './section/VideoCarousel';

export default function VideoCarouselWrapper() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) return null; // Avoid SSR mismatch

  return <VideoCarousel />;
}
