import React from 'react'
import {Route,Switch} from 'react-router-dom';
import Navigationbar from './Naigationvbar';
import Abouthitcore from './Abouthitcore';
import Offers from './Offers';
import Cards from './Cards';
import Cards1 from './Cards1';
import Cards2 from './Cards2';
import Cards3 from './Cards3';
import Cards4 from './Cards4';
import Lessons from './Lessons';
import News from './News';
function App() {
return(
  <>
  <Navigationbar/>
  <Switch>
    <Route exact path="/" component={Abouthitcore}/>
    <Route exact path="/electric" component={Cards}/>

    <Route exact path="/basses" component={Cards1}/>
    <Route exact path="/amp" component={Cards2}/>
    <Route exact path="/drums" component={Cards3}/>
    <Route exact path="/recording" component={Cards4}/>
    <Route exact path="/lessons" component={Lessons}/>
    <Route exact path="/news" component={News}/>
    <Route component={Abouthitcore}/>
  </Switch>
 <Offers/>
  </>
    );
  }
  
export default App;