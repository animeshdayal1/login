import React ,{Component} from 'react';
import Login from './container/Login/Login';
//import SignUp from './components/SignUp';
import Home from './Home/Home';
import {BrowserRouter} from 'react-router-dom';
import fire from './fire';

import './App.css';

class App extends Component {

state={
  user:{},
}
componentDidMount(){
this.authListner()
}

authListner(){
  fire.auth().onAuthStateChanged((user)=>{
    if(user){
      this.setState({user})
    }else{
      this.setState({user:null})
    }
  })
}

  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <br/>
      <br/>
      
      <br/>
      <br/>
      <br/>
      <br/>
      {this.state.user? (<Home/>) : (<Login/>)}
      {/* <Login/> */}
      </div>
      </BrowserRouter>
      
      
    );
  }
 
}

export default App;
