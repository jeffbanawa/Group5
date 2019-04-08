import React, { Component } from 'react';
import { BrowserRouter, Route , Router,  Switch, Link, withRouter} from "react-router-dom";
import history from './Components/History';
import './css/App.css';


import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Containers/Homepage/Homepage";
import Browse from "./Containers/Browse/Browse";
import Rooms from "./Containers/Rooms/Rooms"
import SignUp from "./Components/SignUp";
import YouTubePage from "./Containers/MusicPlayer/YouTubeMain";

import Error from "./Containers/Error/Error"

import TopBar from './Components/TopBar';
import TopBarSignIn from './Components/TopBarSignIn';

class App extends Component {

  state={
    playing:false,
    SignedIn:false
  }
  //state consists of log in status
  //this is where we will do the authentication on clientside
  authenticate = () =>{
    this.setState({SignedIn: true});
    history.push('/home/')
  }

  render() {

    return (
      <React.Fragment>

        {this.state.SignedIn?
        <TopBar/>:<TopBarSignIn/>
        }
        {
          this.state.SignedIn?
        <Switch> 
          {console.log("itswitched")} 
          <Route path={"/home/"} exact component={Homepage} />
          <Route path={"/browse/"} exact component={Browse} />
          <Route path={"/rooms/"} exact component={Rooms} />
          <Route path={"/youtube/"} exact component={YouTubePage} />
          <Route component={Error}/>
        </Switch>:
        <Switch>
          <Route path={"/signup/"} render={(props) => <SignUp {...props} authenticate = {this.authenticate}/>} />
          <Route component={Error}/>
        </Switch>
        }
      </React.Fragment>
    );
  }
}

export default App;
