import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/gptSlice";
import { languageTranslation } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";
import translations from "../utils/translations";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);

  console.log("Before click, GPT search =", showGptSearch);

  const user = useSelector((store) => store.user);
  console.log("User in Header: ", user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    console.log("After click, GPT search =", !showGptSearch);
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        console.log("User in Body: ", user);
        const userData = {
          id: user.uid,
          mail: user.email,
          name: user.displayName,
        };
        dispatch(addUser(userData));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {/* <img
        className="w-56 absolute bg-gradient-to-b from-black p-6 z-10"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7f67-86aa-d06aa27c6cc0/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      /> */}
      {location.pathname === "/" && (
        <div className="w-full absolute z-10 bg-black/50 text-white text-center text-sm font-semibold py-2 px-4 shadow-md">
          ⚠️ This is a clone made for learning purposes only. Not affiliated
          with or endorsed by Netflix.
        </div>
      )}
      {user && (
        <div className="absolute top-4 right-4 flex items-center gap-3 z-40">
          <select
            className="p-1 bg-gray-900 text-white rounded"
            onChange={handleLanguageChange}
          >
            {languageTranslation.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="text-white bg-purple-600 px-2 py-1 rounded"
            onClick={handleGptSearchClick}
          >
            {showGptSearch
              ? translations[langKey].homepage
              : translations[langKey].gpt_search}
          </button>
          <span className=" text-white drop-shadow-xl font-medium">
            {translations[langKey].hello} {user?.name}
          </span>
          <button
            className="text-white bg-red-700 px-2 py-1 rounded"
            onClick={handleSignOut}
          >
            {translations[langKey].sign_out}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
