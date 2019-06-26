import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to={"/"} className="navbar-brand">Excercise Tracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-iten">
                            <Link to={"/"} className="nav-link">Excercise</Link>
                        </li>
                        <li className="navbar-iten">
                            <Link to={"/create"} className="nav-link">Create Excercise</Link>
                        </li>
                        <li className="navbar-iten">
                            <Link to={"/user"} className="nav-link">Create User</Link>
                        </li>

                    </ul>
                </div>
             
            </nav>
        )
    }
}