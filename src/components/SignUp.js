import React,{Component} from 'react';
import '../container/Login/Login.css';
import fire from '../fire';




const signUp =(props)=>{

    

    // signupHandler=(e)=>{
    //     e.preventDefault();
    //     fire.auth().createUserWithEmailAndPassword(this.state.email ,this.state.password).then((u)=>{
    //      console.log(u)
    //     }).catch((err)=>{console.log(err)});
     
    //  }
 
    //  changedHandler=(e)=>{
    //   this.setState({
    //       [e.target.name]:[e.target.value]
    //   })
    //  }
 
 

        

        return(
           
            <div className={'Login'}>
                <form >
                <label > user   id   :</label>
                    <input type={'email'} 
                    name={'email'}
                    className = {'Input'} 
                    onChange={props.changedHandler}
                    value={props.email}
                            placeholder={' email'} /> <br/><br/>



                 <label >password:</label>
                    <input type={'password'} 
                    name={'password'}
                    className = {'Input'}
                    onChange={props.changedHandler}
                    value={props.password}
                            placeholder={'password'} />   <br/>   <br/> <br/>    

                
                           

                 <button className={'Submit'}  onClick={props.signupHandler}> Signup</button>

                </form>
                

               

            </div>
        )
    }


export default signUp;