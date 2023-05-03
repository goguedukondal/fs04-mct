import React from 'react'
import "./UserDetails.css"
function UserDetails() {
  return (
    <div className='detail_container'>
     <h1>My GitHub Profile</h1>
     <div className='detail_card'>
       <img src='' width="100" height="100"/>
       
       <p className='repos'>Repos</p>
       <p className='followers'>Followers</p>
       <p className='following'>Following</p>
     </div>
     <h1>Repositories</h1>
     <div className='repo_container'>

     </div>
    </div>
  )
}

export default UserDetails
