import * as React from 'react';
interface IUser {
  mail:string, 
  password:string, 
  userId:number
}

export default function User(user:IUser) {

  return (
  <div>
    <div className="centered__container__user">
      <div className='user__headline'>
        <h2>logged in as </h2>
      </div>
      <div className="user__data">
        <div>username: {user.mail}</div>
        <div>userId: {user.userId}</div>
        {/* <button onClick={() => console.log(user)}></button> */}
        <div onClick={() => window.location.reload()} className="logout__btn">logout here</div>
      </div>
    </div>
  </div>
  )
}
