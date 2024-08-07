import React from 'react';
import aiIcon from '../../img/ai-icon.png';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const styles = {
  fadeInUp: 'animate-fadeInUp',
  fadeIn: 'animate-fadeIn',
  slideUp: 'animate-slideUp',
};

const Hero = () => {

  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="home" className={`flex flex-col min-h-screen bg-white text-center ${styles.fadeIn}`}>
      <nav className={`fixed top-0 left-0 w-full bg-white shadow-lg py-3 px-6 rounded-b-full ${styles.fadeIn}`}>
        <ul className="flex justify-center space-x-8 md:space-x-16">
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#price" className="nav-link">
              Price
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <main className={`flex flex-col items-center justify-center flex-1 p-5 ${styles.fadeIn}`}>
        <header className={`text-xl font-semibold mb-6 ${styles.fadeIn}`}>
          Synapse.ai
        </header>
        <div className={`flex flex-col items-center mb-8 ${styles.slideUp}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Advanced
          </h1>
          <div className="flex flex-col items-center mb-4 md:flex-row md:items-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              AI Assistant for Intelligent
            </h1>
            <div className="ml-0 mt-3 md:ml-3 md:mt-0">
              <img
                src={aiIcon}
                alt="AI"
                className="w-10 h-10"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Conversations and Seamless User
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-400">
            Engagement.
          </h1>
          {user?.displayName ? (
            <button onClick={handleSignOut} className="button mt-6">
              logOut
            </button>
          ) : (
            <Link to="/login">
              <button className="button mt-6">
                Get Started
              </button>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
};

export default Hero;
