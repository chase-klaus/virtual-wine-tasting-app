import "./App.css";
import { useState } from "react";
//@ts-ignore
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WineTasting from "./Components/WineTasting/WineTasting";
import WineList from "./Components/WineList/WineList";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import Home from "./Components/Home/Home";
import auth from "./utils/auth";


interface ISetUser {
  mail: string;
  password: string;
  id: number;
}

export default function App(): JSX.Element {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);
  const [user, setUser] = useState<ISetUser>({ mail: '', password: '', id: 0 });
  return (
    <Router>
      {isAuthenticated ? (<div className="grid__container">
        <nav className="navbar sticky">
          <div className='underline__navbar'>
            <Link to="/" className='link__navbar__header'>Virtual Wine Tasting</Link>
          </div>
          <div className='underline__navbar'>
            <Link to="/" className='link__navbar'>Home</Link>
          </div>
          <div className='underline__navbar'>
            <Link to="/tasting" className='link__navbar'>Start Wine Tasting</Link>
          </div>
          <div className='underline__navbar'>
            <Link to="/winelist" className='link__navbar'>Your Personal Wine List</Link>
          </div>
          <div className='underline__navbar'>
            <Link to="/user" className='link__navbar'>user</Link>
          </div>
        </nav>
        <div className="main">
          <Switch>
            <Route
              path="/tasting"
              render={(user) => (
                <WineTasting user={user} setIsAuthenticated={setIsAuthenticated} />
              )}
            />
            <Route
              path="/winelist"
              render={(user) => (
                <WineList user={user} setIsAuthenticated={setIsAuthenticated} />
              )}
            />
            <Route path="/user">
              {<User user={user}/>}
            </Route>
            <Route path="/" render={() => (
              <Home />
            )}
            />
          </Switch>
        </div>
      </div>) :
        (<div className="login__container">
          <Login setUser={setUser} user={user} setIsAuthenticated={setIsAuthenticated} />
        </div>)}
    </Router>
  );
}
// const [userValidated, setUserValidated] = useState<boolean>(false);

// function loginUser(mail: string, password: string, userId: number, validated: boolean) {
//   setUser({
//     mail: mail,
//     password: password,
//     userId: userId
//   });
//   setUserValidated(validated);
// }