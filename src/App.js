import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './components/navbar.component';
import CreateExcercise from './components/create-excercise';
import EditExcercise from './components/edit-excercise.component';
import ExcerciseList from './components/excercise-list.component';
import CreateUser from './components/create-user';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <Router>
          <Navbar/>
          <Route exact path={"/"} component={ExcerciseList}/>
          <Route  path={"/edit/:id"} component={EditExcercise}/>
          <Route  path={"/create"} component={CreateExcercise}/>
          <Route  path={"/user"} component={CreateUser}/>
        </Router>
      </header>
    </div>
  );
}

export default App;
