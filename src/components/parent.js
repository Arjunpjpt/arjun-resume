
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home/home.js';
import Message from './message/message.js';
import Header from './Header.js'
import {Switch,BrowserRouter as Router, Link , Route} from 'react-router-dom';
export default class Parent extends React.Component {
constructor(props){
    super(props);
    this.state ={msg:""}
}
callbackFunction=(childData)=>{
    this.setState({msg:childData})
}
  render() {
    
    return (
        <div>
            <div className="Header">
        <Header />
        </div>
            <div>
                  

          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/arjun-resume" component={Home} />
              <Route path="/message"  component={Message}></Route>
          </Switch>
         
          </div>
        </div>
    );
  }
}
