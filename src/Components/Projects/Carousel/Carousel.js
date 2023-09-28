/*TODO:
 */
import React, { useEffect, useRef } from 'react';
import './Carousel.scss';
import { register } from 'swiper/element/bundle';
import binder from './Images/binder.webp';
import pepperLawson from './Images/pepperLawson.webp';
import safetyPoster from './Images/safetyPoster.webp';
import sec2 from './Images/sec2.webp';

register();

const Carousel = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [progress] = e.detail;
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {});
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="auto"
      navigation="true"
      pagination="true"
      grab-cursor="true"
    >
      <swiper-slide>
        <img
          src={binder}
          alt="Onboarding binder"
          className="project-img"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src={sec2}
          alt="Onboarding Sec 1"
          className="project-img"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src={pepperLawson}
          alt="Lawson Values Poster"
          className="project-img"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src={safetyPoster}
          alt="Safety Poster"
          className="project-img"
        />
      </swiper-slide>
    </swiper-container>
  );
};

export default Carousel;
