import React from 'react';
import {Link} from 'react-router-dom';
import axios  from 'axios';
export default class CreateUser extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
        }
    }

    onInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    submit=(e)=>{
        e.preventDefault();
        const user={
            username:this.state.username,
        }
        this.setState({username:''})
        axios.post('http://localhost:5000/users/add',user)
        .then((res)=>{
           alert(res.data);
        })
        .catch((err)=>console.log(err));
        //window.location="/"
    }
 
    
    render(){
        return(
        <div className="">
            <form
            onSubmit={this.submit}
            >
                <div className="form-group" style={{marginTop:16}}>
                    <label>Username</label>
                    <input className="form-control" type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onInputChange}/>
                </div>
             <div className="form-group">
                    <button className="btn btn-primary" type="submit">Submit</button>
                
            </div>
           
            </form>
        </div>
        )
    }
}