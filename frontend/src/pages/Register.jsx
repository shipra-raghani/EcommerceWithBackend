import { useState } from "react";
import instance from "../axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [registerSuccess, setRegisterSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await instance.post("/auth/register", data);
    console.log(response);
    setRegisterSuccess(true);
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }
  return (
    <>
      {registerSuccess && (
        <div>
          <div className="loginOrRegisterSuccessful">
            <div className="box">
              <p>✓Registration Successfull</p>
            </div>
          </div>
        </div>
      )}
      <div className="login">
        <h1>Registration form</h1>
        <div className="loginSection">
          <form action="" onSubmit={handleSubmit} className="loginForm">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={data.password}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <div className="registerOrLogin">
            <p>
              Already have an Account?
              <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
