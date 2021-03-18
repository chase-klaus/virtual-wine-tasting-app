import { useState } from 'react';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faCheck } from '@fortawesome/free-solid-svg-icons/index';
import ApiService from '../ApiService';
import auth from '../../utils/auth';

interface ILoginUserProps {
  loginUser: (
    mail: string,
    password: string,
    userId: number,
    validated: boolean
  ) => void
}

interface IUser {
  mail: string,
  password: string,
  id: number
}
// React.FormEventHandler<HTMLFormElement>
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.FormEvent;

const initialState = {
  mail: '',
  password: ''
};

export default function Login(props) {

  // LOGIN - STATES
  // const [mail, setMail] = useState("");
  // const [password, setPassword] = useState("");
  // const [userId, setUserId] = useState(0);
  // const [isRegistered, setIsRegistered] = useState(false);
  // const [passwordFromDB, setPasswordFromDB] = useState("");
  // const [users, setUsers] = useState([])
  const [state, setState] = useState(initialState);

  // REGISTRATION - STATES
  const [newMail, setNewMail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(false);
  const [userExists, setUserExists] = useState(true);
  const [successfullyRegistrated, setSuccessfullyRegistrated] = useState(false);

  // const handleChangeMail = (event: InputEvent) => {
  //   if (error) setError(false);
  //   setMail(event.target.value);
  //   console.log(mail);
  // }

  // const handleChangePassword = (event: InputEvent) => {
  //   if (error) setError(false);
  //   setPassword(event.target.value);
  // }

  // const checkIfUserIsInDatabase = async () => {
  //   const user = await ApiService.getUserByMail(mail);
  //   try {
  //     if (user.password === password) {
  //       const { id } = user;
  //       setIsRegistered(true);
  //       setUserId(user.id);
  //       setPasswordFromDB(user.password);
  //       loginUser(mail, password, id, true);
  //     } else {
  //       alert('Your email or password are incorrect.');
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  function handleChange(e) {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { mail, password } = state;
    const user = { mail, password };
    const res: any = await ApiService.login(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const token = res;
      localStorage.setItem('token', token);
      props.setIsAuthenticated(true);
      // auth.login();
    }
  }

  function validateForm() {
    return !state.mail || !state.password;
  }

  //REGISTRATION - FUNCTIONS
  const handleChangeNewMail = (event: InputEvent) => {
    if (error) setError(false);
    setNewMail(event.target.value);
  }

  const handleChangeNewPassword = (event: InputEvent) => {
    if (error) setError(false);
    setNewPassword(event.target.value);
  }

  const handleRegistrationSubmit = (event: ButtonEvent) => {
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
      setUserExists(true);
    }
      , 1500);
  }

  return (
    <div>
      {userExists === true ? (<div className="centered__container__login">
        <div className='login__headline'><h2>User Login</h2></div>
        <div className="login__form">
          <form onSubmit={handleSubmit}>
            <input
              className='input__login'
              type="text"
              name="mail"
              value={state.mail}
              onChange={handleChange}
              placeholder="Type in your user name ..."
            ></input>
            <input
              className='input__login'
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="Type in your password ..."
            ></input>
            <button type="submit" className='login__btn' disabled={validateForm()}>login</button>
          </form>
        </div>
        <div className='go__to__register'>to create a new user click <div onClick={() => setUserExists(false)} className='go__to__register__btn'>here</div></div>
      </div>) : successfullyRegistrated === false ? (<div className="centered__container__login">
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
      </div>) : (<div className='successfully__registred'>
        <div><FontAwesomeIcon icon={faCheck} size="5x" className='successfully__registred__logo' /></div>
        <div>User successfully registered</div>
      </div>
      )}
    </div>
  )
}
