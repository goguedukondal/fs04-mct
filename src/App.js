

import Login from './Components/Login';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Login/>}/> */}
        {/* <Route path='/' element={<Home/>}/> */}

      </Routes>
      {/* <UserDetails/> */}
      <Login />
    </div>
  );
}

export default App;
