import React from 'react';
import {Link} from 'react-router-dom';

export default class CreateExcercise extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            description:"",
            duration:0,
            date:new Date(),
            users:[]
        }
    }

    onInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    submit=(e)=>{
        e.preventDefault();
        const excercise={
            username:this.state.username,
            duration:this.state.duration,
            description:this.state.description,
            date:this.state.date
        }
        window.location="/"
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
                <label>description</label>
                    <input className="form-control"  type="text" placeholder="description" name="description" value={this.state.description} onChange={this.onInputChange}/>
               </div>
               <div className="form-group">
               <label>duration</label>
                    <input className="form-control"  type="text" placeholder="duration" name="duration" value={this.state.duration} onChange={this.onInputChange}/>
              </div>
              <div className="form-group">
              <label>Date</label>
                    <input className="form-control"  type="date" name="date" value={this.state.date} onChange={this.onInputChange}/>

             </div>
             <div className="form-group">
                    <button className="btn btn-primary" type="submit">Submit</button>
                
            </div>
           
            </form>
        </div>
        )
    }
}