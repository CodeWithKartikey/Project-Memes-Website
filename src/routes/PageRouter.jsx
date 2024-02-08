import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home-Page/Home';
import FakePromisesByModi from '../pages/FakePromisesByModi-Page/FakePromisesByModi';
import MostFamousJumlasQuotes from '../pages/MostFamousJumlasQuotes-Page/MostFamousJumlasQuotes';
import FunnySketchesImagesGallery from '../pages/FunnySketchesImagesGallery-Page/FunnySketchesImagesGallery';
import ComedyVideosClips from '../pages/ComedyVideosClips-Page/ComedyVideosClips';
import About from '../pages/About-Page/About';
import Contact from '../pages/Contact-Page/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy-Page/PrivacyPolicy';
import TermsConditions from '../pages/TermsConditions-Page/TermsConditions';
import Disclaimer from '../pages/Disclaimer-Page/Disclaimer';
import Error from '../pages/Error-Page/Error';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fake-promises-by-modi' element={<FakePromisesByModi />} />
        <Route path='/most-famous-jumlas-and-quotes-by-modi' element={<MostFamousJumlasQuotes />} />
        <Route path='/funny-sketches-and-images-gallery-of-modi' element={<FunnySketchesImagesGallery />} />
        <Route path='/comedy-videos-and-clips-of-modi' element={<ComedyVideosClips />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-conditions' element={<TermsConditions />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ScrollToTop />
    </>
  );
};

export default App;
