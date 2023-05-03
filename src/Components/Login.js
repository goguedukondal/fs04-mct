
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {updateField, loginSuccess, loginFailure} from '../Redux/Slice'


function Login() {
  const naviagate = useNavigate();
  const dispatch = useDispatch();
  const  eml  = useSelector(
    (state) => state.login.eml
  );
  const githubUsername  = useSelector(
    (state) => state.login.githubUsername
  );
  const  password  = useSelector(
    (state) => state.login.password
  );
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateField({ name, value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${githubUsername}`);
      const data = await response.json();
      dispatch(loginSuccess(data));
      naviagate('/home')
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div className="main" >
      <form className="login_form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={eml} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        </label>
        <br />
        <label>
          GitHub Username:
          <input
          type="text"
          name="githubUsername"
          value={githubUsername}
          onChange={handleChange}
        />
        </label>
        <br />
        <label>
          GitHub Password:
          <input type="password"  />
        </label>
        {/* {error && <div>{error}</div>} */}
        <br />
        {/* <Link to={'/home'}> <button type="submit">Login</button></Link> */}
        <button type="submit">Login</button>
      </form>
    
      
    </div>
  );
};

export default Login;
