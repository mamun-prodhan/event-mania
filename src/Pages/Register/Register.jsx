import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photoURL, email, password);
    setError("");
    setSuccess("");
    if (password.length < 6) {
      setError("Password must be 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Don't have a capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|]/.test(password)) {
      setError("Don't have a special character");
      return;
    }
    // createUser(email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Success fully Registered");
        // update user profile
        updateUser(name, photoURL)
          .then(() => {
            // navigate("/");
            console.log("Profile Updated");

            swal({
              title: "Register Successfull",
              text: "You have registered successfully.",
              icon: "success",
              button: "OK",
            }).then(() => {
              navigate("/");
              setTimeout(() => {
                window.location.reload();
              }, 100);
            });
          })
          .catch((error) => {
            console.log(error.message);
          });
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
          <h1 className="text-5xl font-bold">Please Register</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photoURL"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mb-6">
            Already have an account? Please
            <Link to="/login" className="ms-2 font-bold text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
