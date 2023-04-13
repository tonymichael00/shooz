/*TODO: CROP IMAGES TO SAME ASPECT RATIO
 */

import React, { useEffect, useRef } from 'react';
import './Carousel.scss';
import { register } from 'swiper/element/bundle';
import img1 from './Images/img1.jpg';
import img1Webp from './Images/img1.webp';
import img13 from './Images/img13.webp';
import img14 from './Images/img14.webp';

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
        <img src={img1} alt="Logo1" className="project-img" />
        {/* {img1} */}
      </swiper-slide>
      <swiper-slide>
        <img src={img1Webp} alt="Logo2" className="project-img" />
        {/* {img2} */}
      </swiper-slide>
      <swiper-slide>
        <img src={img13} alt="Logo3" className="project-img" />
        {/* {img3} */}
      </swiper-slide>
      <swiper-slide>
        <img src={img14} alt="Logo4" className="project-img" />
        {/* {img4} */}
      </swiper-slide>
    </swiper-container>
  );
};

export default Carousel;
