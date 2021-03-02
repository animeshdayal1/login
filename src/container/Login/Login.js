import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
import SignUp from '../../components/SignUp';
import Modal from '../../components/UI/Modal';
import fire from '../../fire';


import './Login.css';


class Login extends Component{

    state={
        
        email:"",
        password:"",

        ragistering:false

    }


  

   loginHandler=(e)=>{
       e.preventDefault();
       fire.auth().signInWithEmailAndPassword(this.state.email ,this.state.password).then((user)=>{
        console.log(user)
       }).catch((err)=>{alert(err)});
    
    }

    signupHandler=(e)=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email ,this.state.password).then((u)=>{
         console.log(u)
        }).catch((err)=>{alert(err)});
     
     }

    changedHandler=(e)=>{
     this.setState({
         [e.target.name]:e.target.value
     })
    }

    modalHandler=()=>{
        this.setState({ragistering:true})
    }

    modalClosedHandler=()=>{
        this.setState({ragistering:false})
    }

    render(){

        

        return(
         <div>
            <Modal show={this.state.ragistering}
                   modalClosed={this.modalClosedHandler}>
                <SignUp
                     changedHandler={this.changedHandler}
                     signupHandler={this.signupHandler}
                      password = {this.state.password}
                     email={this.state.email}
                />
            </Modal>
            <div className={'Login'}>
            <h2>Fill Your Login Details</h2><br/><br/><br/>
                <form >
                <label > user   id   :</label>
                    <input 
                    type={'email'} 
                    name={'email'}
                    id ={'email'}
                    className = {'Input'} 
                    onChange={this.changedHandler}
                    value={this.state.email}
                            placeholder={' email'} /> <br/><br/>



                 <label >password:</label>
                    <input type={'password'} 
                    name={'password'}
                    id={'password'}
                    className = {'Input'}
                    onChange={this.changedHandler}
                    value={this.state.password}
                            placeholder={'password'} />   <br/>   <br/> <br/>     

                 <button className={'Submit'}  onClick={this.loginHandler}> Login</button>
                 {/* <button className={'Submit'}  onClick={this.signupHandler}> signup</button> */}

                </form>
                <br/>
                <p>or</p>
               <button onClick={this.modalHandler}> signup</button>


{/* 
                <SignUp
                changedHandler={this.changedHandler}
                signupHandler={this.signupHandler}
                password = {this.state.password}
                email={this.state.email}
                exact path={'/SignUp'} component={SignUp} /> */}

               
  

            </div>
        </div>
        )
    }
}

export default Login;