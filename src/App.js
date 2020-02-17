import React from 'react';
import './App.css';
import Signup from './pages/Signup';
import NavBar from './components/Nav';
import Login from './pages/Login';
import Home from './pages/Home';
import AddGame from './pages/AddGame';
import GameCollection from './pages/GameCollection';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div>
        < NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path='/addgame' component={AddGame}/>
          <Route path='/gamecollection' component={GameCollection}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
