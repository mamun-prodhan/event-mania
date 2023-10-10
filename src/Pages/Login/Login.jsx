import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    setError("");
    setSuccess("");
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("successfully logged In");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    setError("");
    setSuccess("");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Successfully logged in");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left mb-16">
          <h1 className="text-5xl font-bold">Please Login</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body pb-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <br />
              {error && <p className="font-bold text-red-600">{error}</p>}
              {success && <p className="font-bold text-green-600">{success}</p>}
            </div>
            <div className="form-control mt-0">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="px-8">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-primary w-full"
            >
              <FaGoogle></FaGoogle>
              <span>Login with Google </span>
            </button>
          </div>
          <p className="text-center mt-6 mb-6 px-6">
            New to this Website? Please
            <Link to="/register" className="ms-2 font-bold text-indigo-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
