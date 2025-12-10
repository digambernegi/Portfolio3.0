import { useEffect, useRef, type ReactNode } from 'react';
import Lenis from 'lenis';

type LenisScrollProviderProps = {
  children: ReactNode;
};

const LenisScrollProvider = ({ children }: LenisScrollProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2.5,
      infinite: false,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisScrollProvider;

