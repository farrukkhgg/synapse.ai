import { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { UserAuth } from '../../context/AuthContext';
import { Context } from "../../context/Context";
import Cursor from "../../components/Cursor/Cursor";
import Spinner from "../../components/Spinner/Spinner";
import "./main.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [load, setLoad] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  

  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error('Failed to log out', error);
      alert('Failed to log out. Please try again.');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  if (load) {
    return <Spinner />;
  }

  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="main fade-in">
      <div className="nav fade-in">
        <Link to='/'> 
          <div className="flex gap-2 justify-center align-center">
          <img className="w-10 h-10 slide-up" src={assets.synapse_icon} alt="" />
          <p className="slide-up">Synapse.ai</p>
         </div>
        </Link>
       
        <div className="relative slide-up">
          <img
            className="cursor-pointer"
            src={assets.user_icon}
            alt=""
            onClick={toggleDropdown}
          />

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform origin-top-right scale-95 slide-up">
              <ul className="flex flex-col">
                <li className="border-b border-gray-200">
                  <button onClick={handleSignOut} className="block w-full text-left py-2 px-4 hover:bg-green-500 hover:text-white transition-colors duration-300"> Sign Out </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="main-container fade-in">
        {!showResults ? (
          <>
            <div className="greet fade-in">
              <p className="slide-up">
                <span>Hi, there </span>
              </p>
              <p className="slide-up">How Can I Help You Today?</p>
            </div>
            <div className="cards fade-in">
              <div
                className="card bounce-in"
                onClick={() =>
                  handleCardClick("Suggest Some Place To Visit In Kerala")
                }
              >
                <p>Suggest Some Place To Visit In Kerala </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card bounce-in"
                onClick={() =>
                  handleCardClick(
                    "Brainstorm team bonding activities for our work retreat"
                  )
                }
              >
                <p>Brainstorm team bonding activities for our work retreat </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                className="card bounce-in"
                onClick={() =>
                  handleCardClick("How to Create a Gyroscope using Disc?")
                }
              >
                <p>How to Create a Gyroscope using Disc?</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                className="card bounce-in"
                onClick={() => {
                  handleCardClick(
                    "Create a Script for the youtube video about coding "
                  );
                }}
              >
                <p>Create a Script for the youtube video about coding </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result fade-in">
            <div className="result-title slide-up">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data slide-up">
              <img src={assets.synapse_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom fade-in">
          <div className="search-box slide-in-from-right">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Message to Synapse"
            />
            <div>
              <img
                src={assets.send_icon} alt="" onClick={() => {onSent();}}/>
            </div>
          </div>
        </div>
        <Cursor />
      </div> 
    </div>
  );
};

export default MainPage;
