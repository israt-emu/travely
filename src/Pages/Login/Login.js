import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import googleLogo from "../../images/google.png";
const Login = () => {
  const { googleSignIn, setUser, setError, error, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const handleGooglesignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="md:w-2/5 mx-auto bg-blue-900 text-center my-20 py-12 px-6 rounded shadow-xl">
      <h1 className="text-white text-2xl mb-3">Please Login!</h1>
      <div>
        <button
          className="flex items-center bg-white py-2 px-4 mx-auto rounded font-bold"
          onClick={handleGooglesignIn}
        >
          <img src={googleLogo} alt="" className="w-6 mr-2" />
          Conitnue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
