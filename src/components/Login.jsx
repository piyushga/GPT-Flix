import { useRef, useState } from "react";
import Header from "./Header";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { validateEmail, validatePassword } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [loginError, setLoginError] = useState();
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailErrormessage = validateEmail(email.current.value);
    const passWordErrorMessage = validatePassword(password.current.value);
    console.log(emailErrormessage, passWordErrorMessage);
    setEmailError(emailErrormessage);
    setPasswordError(passWordErrorMessage);

    if (emailErrormessage || passWordErrorMessage) {
      console.log("HELLO");
      return;
    }
    if (!isLoginForm) {
      // SignUp Form
      console.log("In Signup: ", isLoginForm);
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              // ...
              console.log("Auth current user: ", auth.currentUser);
              const userData = {
                id: auth.currentUser.uid,
                mail: auth.currentUser.email,
                name: auth.currentUser.displayName,
              };
              dispatch(addUser(userData));
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              console.log("Update Profile Error: ", error);
            });

          console.log("Signed Up user: ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      //Login Form
      console.log("In login: ", isLoginForm);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Logged in user: ", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setLoginError("User does not exist. Please Signup First");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/DE-en-20250707-TRIFECTA-perspective_44f54baf-670a-415f-ae97-449732d16b5d_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="absolute w-3/12 p-8 bg-black/80 text-white my-28 mx-auto right-0 left-0 rounded-lg"
      >
        <h1 className="p-4 my-4 text-3xl font-bold">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-4 my-2 bg-gray-700/40 w-full rounded-sm border border-white/50"
          />
        )}
        {loginError && (
          <p className="bg-yellow-500 text-black rounded-md p-4 my-6">
            Sorry, we can't find an account with this email address. Please try
            again or create a new account.
          </p>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email"
          className="p-4 my-2 bg-gray-700/40 w-full rounded-sm border border-white/50"
        />
        {emailError && <p className="text-red-700 text-sm">{emailError}</p>}
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            ref={password}
            placeholder="Password"
            className="p-4 my-2 bg-gray-700/40 w-full rounded-sm border border-white/50"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>
        {passwordError && (
          <p className="text-red-700 text-sm">{passwordError}</p>
        )}
        <button className="p-4 my-4 bg-red-700 w-full rounded-sm" type="submit">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-4 my-4 cursor-pointer" onClick={handleToggle}>
          {isLoginForm
            ? "New to Netlix? Sign Up Now"
            : "Already a user? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
