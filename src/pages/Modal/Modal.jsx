import React, { useEffect, useState } from 'react';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaUserSecret } from 'react-icons/fa';
import Cursor from '../../components/Cursor/Cursor';
import aiIcon from '../../img/ai-icon.png';
import Spinner from '../../components/Spinner/Spinner';


const Modal = () => {

  const { googleSignIn, anonymousSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    await googleSignIn();
  };

  const handleAnonymousSignIn = async () => {
    await anonymousSignIn();
  };

  useEffect(() => {
    if (user) {
      navigate('/main');
    }
  }, [user, navigate]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto text-center">
        <div className="mb-6">
          <img src={aiIcon} alt="Logo" className="mx-auto mb-4 h-14 w-14" />
          <h2 className="text-2xl font-bold mb-2">Welcome!</h2>
          <p className="text-gray-600">Please enter your details to sign in.</p>
        </div>
        <div className="flex justify-around mb-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
            <FaGoogle className="text-red-500 w-6 h-6" />
          </button>
          <button
            onClick={handleAnonymousSignIn}
            className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
            <FaUserSecret className="text-black w-6 h-6" />
          </button>
        </div>
      </div>
      <Cursor/>
    </div>
    <Cursor/>
    </>
  );
};

export default Modal;
