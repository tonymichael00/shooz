/*TODO: CROP IMAGES TO SAME ASPECT RATIO
 */

import React, { useEffect, useRef } from 'react';
import './Carousel.scss';
import { register } from 'swiper/element/bundle';
import binder from './Images/binder.webp';
import pepperLawson from './Images/pepperLawson.webp';
import safetyPoster from './Images/safetyPoster.webp';
import sec2 from './Images/sec2.webp';
import sec4 from './Images/sec4.webp';

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
      ref={swiperElRef}
      slides-per-view="auto"
      navigation="true"
      pagination="true"
      // auto-height="true"
      // height="100%"
      // loop="true"
      // fill="column"
      grab-cursor="true"
      // scrollbar="true"
    >
      <swiper-slide>
        <img src={binder} alt="Logo2" className="project-img" />
        {/* {img2} */}
      </swiper-slide>
      <swiper-slide>
        <img src={pepperLawson} alt="Logo2" className="project-img" />
        {/* {img2} */}
      </swiper-slide>
      <swiper-slide>
        <img src={safetyPoster} alt="Logo2" className="project-img" />
        {/* {img2} */}
      </swiper-slide>
      <swiper-slide>
        <img src={sec2} alt="Logo2" className="project-img" />
        {/* {img2} */}
      </swiper-slide>
      <swiper-slide>
        <img src={sec4} alt="Logo2" className="project-img" />
        {/* {img2} */}
      </swiper-slide>
    </swiper-container>
  );
};

export default Carousel;
