import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../axios";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loginSuccess, setLoginSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await instance.post("/auth/login", data);
    console.log(response);
    setLoginSuccess(true);
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }

  return (
    <>
      {loginSuccess && (
        <div>
          <div className="loginOrRegisterSuccessful">
            <div className="box">
              <p>✓Login Successfull</p>
            </div>
          </div>
        </div>
      )}
      <div className="login">
        <h1>Login form</h1>
        <div className="loginSection">
          <form action="" onSubmit={handleSubmit} className="loginForm">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
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
              Don't have any Account?
              <a href="/register">Register</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
