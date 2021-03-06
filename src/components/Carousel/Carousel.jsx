import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '../Assets/Images/avengers.jpeg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: '../Assets/Images/justice.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;