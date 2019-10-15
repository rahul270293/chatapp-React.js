import React, {Component}from 'react';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom'

import Signin from './components/Signin'
import Signup from './components/Signup'
import Profile from './components/Profile';
import Contacts from './components/Contacts'

class App extends Component{
  render(){
return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/home" component={Contacts}/>
        </Switch>
      </div>
    </Router>
  );
}
}

export default App;
