import React from 'react';
import Layout from '../../Layout';
import Hero from '../../containers/Hero';
import FakePromisesByModi from '../../containers/FakePromisesByModi';
import MostFamousJumlasQuotes from '../../containers/MostFamousJumlasQuotes';
import FunnySketchesImagesGallery from '../../containers/FunnySketchesImagesGallery';
import ComedyVideosClips from '../../containers/ComedyVideosClips';
import Subscribe from '../../containers/Subscribe';
import '../Home-Page/Home.scss';

const Home = () => {
  return (
    <Layout>
      <section className='home-page'>
        <Hero />
        <FakePromisesByModi />
        <MostFamousJumlasQuotes />
        <FunnySketchesImagesGallery />
        <ComedyVideosClips />
        <Subscribe />
      </section>
    </Layout>
  );
}

export default Home;
