import { useState } from "react";
import Header from "./Header";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const handleToggle = () => {
    setIsLoginForm(!isLoginForm);
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
      <form className="absolute w-4/12 p-8 bg-black/80 text-white my-28 mx-auto right-0 left-0 rounded-lg">
        <h1 className="p-4 my-4 text-3xl font-bold">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 bg-gray-700/40 w-full rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-2 bg-gray-700/40 w-full rounded-sm"
        />
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="p-4 my-2 bg-gray-700/40 w-full rounded-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>
        <button className="p-4 my-4 bg-red-700 w-full rounded-sm">
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
