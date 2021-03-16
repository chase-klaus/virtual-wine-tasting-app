import {useState } from 'react';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faCheck } from '@fortawesome/free-solid-svg-icons/index';
import ApiService from '../ApiService';

// is this correct? NO loginuser is a function
interface ILoginUserProps{
  loginUser: (
    mail:string, 
    password:string, 
    userId:number, 
    validated:boolean) => void
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.FormEvent;

export default function Login({loginUser}:ILoginUserProps) {

  // LOGIN - STATES
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [userId, setUserId] = useState(0);
  // eslint-disable-next-line
  const [isRegistered, setIsRegistered] = useState(false);
  // eslint-disable-next-line
  const [passwordFromDB, setPasswordFromDB] = useState("");
  // const [users, setUsers] = useState([])

  // REGISTRATION - STATES
  const [newMail, setNewMail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(false);
  const [userExists, setUserExists] = useState(true);
  const [successfullyRegistrated, setSuccessfullyRegistrated] = useState(false);

  const handleChangeMail= (event:InputEvent) => {
    if (error) setError(false);
    setMail(event.target.value);
  }

  const handleChangePassword = (event:InputEvent) => {
    if (error) setError(false);
    setPassword(event.target.value);
  }
  
  const checkIfUserIsInDatabase = async () => {
    const user = await ApiService.getUserByMail(mail)
    try {
      if(user.password === password) {
        console.log('passwords match')
        const {id} = user;
        setIsRegistered(true);
        setUserId(id)
        setPasswordFromDB(password);
        loginUser(mail, password, id, true)
      } else {
        alert('email or password are incorrect')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (event:ButtonEvent) => {
    event.preventDefault();
    checkIfUserIsInDatabase();
  }

  //REGISTRATION - FUNCTIONS
  const handleChangeNewMail = (event:InputEvent) => {
    if (error) setError(false);
    setNewMail(event.target.value);
  }

  const handleChangeNewPassword = (event:InputEvent) => {
    if (error) setError(false);
    setNewPassword(event.target.value);
  }

  const handleRegistrationSubmit = (event:ButtonEvent) => {
    event.preventDefault();
    if (newMail && newPassword) {
      setNewMail(newMail);
      setNewPassword(newPassword);
      registerUser()
    } else setError(true);
  }

  const registerUser = () => {
    ApiService.postUser({ mail: newMail, password: newPassword });
    setSuccessfullyRegistrated(true);
    setTimeout(function () { 
      setUserExists(true); }
      , 1500);
  }

  return (
    <div>
    {userExists === true ? 
    (<div className="centered__container__login">
      <div className='login__headline'><h2>User Login</h2></div>
      <div className="login__form">
        <form onSubmit={handleSubmit}>
          <input
            className='input__login'
            type="text"
            value={mail}
            onChange={handleChangeMail}
            placeholder="Type in your user name ..."
          ></input>
          <input
            className='input__login'
            type="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="Type in your password ..."
          ></input>
          <button type="submit" className='login__btn'>login</button>
        </form>
      </div>
      <div className='go__to__register'>to create a new user click <div onClick={() => setUserExists(false)} className='go__to__register__btn'>here</div></div>
    </div>) 
    : successfullyRegistrated === false ? 
    (<div className="centered__container__login">
      <div className='login__headline'><h2>Register new User</h2></div>
      <div className="login__form">
        <form onSubmit={handleRegistrationSubmit}>
          <input
            className='input__login'
            type="text"
            value={newMail}
            onChange={handleChangeNewMail}
            placeholder="Type in your user name ..."
          ></input>
          <input
            className='input__login'
            type="password"
            value={newPassword}
            onChange={handleChangeNewPassword}
            placeholder="Type in your password ..."
          ></input>
          <button type="submit" className='login__btn' onClick={() => console.log(newMail, newPassword)}>register</button>
        </form>
      </div>
    </div>) 
    : 
    (<div className='successfully__registred'>
      <div><FontAwesomeIcon icon={faCheck} size="5x" className='successfully__registred__logo' /></div>
      <div>User successfully registered</div>
    </div>
    )}
  </div>
  )
}
