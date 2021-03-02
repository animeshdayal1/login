import React,{Component} from 'react';
import fire from '../fire';
import './Home.css';

class Home extends Component{
state={

}

logoutHandler=()=>{
    fire.auth().signOut()
}

    render(){

        return(
        <div className={'Home'}>
            <h1>welcome You Are Logged In</h1>
            <button className={'Button'} onClick={this.logoutHandler}>LogOut</button>
        </div>

        )
    }
}

export default Home;