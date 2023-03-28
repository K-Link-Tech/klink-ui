import React, { useEffect, useState } from 'react';
import { CarouselCardsDemos } from '@klink-ui/demos';
import { Embla } from '@klink-ui/carousel';

export function Carousel() {
  const [embla, setEmbla] = useState<Embla>(null);

  // required to fix incorrect carousel slides position after animation
  useEffect(() => {
    if (embla) {
      window.setTimeout(() => {
        embla.reInit();
      }, 200);
    }
  }, [embla]);

  return (
    <div>
      <CarouselCardsDemos loop getEmblaApi={setEmbla} />
    </div>
  );
}
