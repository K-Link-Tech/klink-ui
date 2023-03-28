import React from 'react';
import { Carousel } from '@klink-ui/carousel';
import { Image } from '@klink-ui/core';
import { MantineDemo } from '@klink-ui/ds';
import { images as _images } from './_images';

const code = `
import { Carousel } from '@klink-ui/carousel';
import { Image } from '@klink-ui/core';

const images = [/* ... urls of images */];

function Demo() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel maw={320} mx="auto" withIndicators>
      {slides}
    </Carousel>
  );
}
`;

function Demo() {
  const slides = _images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel maw={320} mx="auto" withIndicators>
      {slides}
    </Carousel>
  );
}

export const images: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
