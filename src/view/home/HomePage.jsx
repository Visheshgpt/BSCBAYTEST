import React from 'react';
import HomeSectionOne from './sections/HomeSectionOne';
import HomeSectionTwo from './sections/HomeSectionTwo';
import HomeSectionThree from './sections/HomeSectionThree';
import HomeSectionFour from './sections/HomeSectionFour';
import HomeSectionFive from './sections/HomeSectionFive';
import HomeSectionSix from './sections/HomeSectionSix';

const HomePage = () => {
  return (
    <section className='flex-fill'>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix />
    </section>
  );
};

export default HomePage;
