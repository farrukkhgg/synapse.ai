import React, { useEffect, useState } from 'react';
import Price from '../../components/Price/Price';
import About from '../../components/About/About';
import Hero from '../../components/Hero/Hero';
import Contact from '../../components/Contact/Contact';
import Cursor from '../../components/Cursor/Cursor';
import Spinner from '../../components/Spinner/Spinner';

const IntroPage = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some async operation
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Hero/>
      <Price/>
      <About/>
      <Contact/>
      <Cursor/>
    </div>
  );
};

export default IntroPage;
