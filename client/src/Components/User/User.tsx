import * as React from 'react';

<<<<<<< HEAD
interface IUserProps {
  user: IUser;
}

=======
>>>>>>> klaus/deida
interface IUser {
  mail:string, 
  password:string, 
  userId:number
}

<<<<<<< HEAD
export default function User({ user }:IUserProps) {
=======
interface IUserProps {
  user: IUser
}
export default function User({user}:IUserProps) {
>>>>>>> klaus/deida

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
