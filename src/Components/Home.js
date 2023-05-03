import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);
  const [user,setUser] = useState('');
  const [searchedUser,setSearchedUser] = useState('')
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const search = ()=>{
    setSearchedUser(user)
  }
  console.log(searchedUser)
  return (
    <>
    <div className="navbar">
       <h1>GitFetch Profile-Finder</h1>
       <h1 style={{marginTop:"5px"}}>for GitHub</h1>
        <input style={{width:"400px",backgroundColor:"black",color:"white",border:"1px solid yellow",height:"40px"}} type="text" value={user} onChange={(e)=>setUser(e.target.value)}/>
        <button  onClick={()=>search()}>Search</button>
      </div>
    <div className="home_container">
      
      {users.map((u, i) => {
        const { avatar_url, id, login } = u;
        return (
          <div key={id} className="card">
            <img src={avatar_url} alt="profile" width="150" height="150" />
            <div className="user">
              <p style={{ marginTop: "2px" }}>{login}</p>
              <p style={{ marginTop: "2px" }}>following/other_user</p>
              <div className="follow_card" >
                <div className="follow1">
                <span>Articles</span>
                
                <span>Followers</span>
                <span>Rating</span>
                
                </div>
                
             
              <div className="follow2">
              <span>38</span>
              <span>938</span>
              <span>7.8</span>
              </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default Home;
