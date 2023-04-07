/*TODO: CROP IMAGES TO SAME ASPECT RATIO
 */

import React, { useEffect, useRef } from 'react';
import './Carousel.scss';
import { register } from 'swiper/element/bundle';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import img4 from './Images/img4.jpg';

register();

const Carousel = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <swiper-container
      className="carousel"
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="true"
      // loop="true"
      fill="column"
      // scrollbar="true"
    >
      <swiper-slide>
        <img src={img1} alt="Logo" width={'100%'} height={'100%'} />
      </swiper-slide>
      <swiper-slide>
        {' '}
        <img src={img2} alt="Logo" width={'100%'} height={'100%'} />
      </swiper-slide>
      <swiper-slide>
        {' '}
        <img src={img3} alt="Logo" width={'100%'} height={'100%'} />
      </swiper-slide>
      <swiper-slide>
        {' '}
        <img src={img4} alt="Logo" width={'100%'} height={'100%'} />
      </swiper-slide>
      ...
    </swiper-container>
  );
};

export default Carousel;
