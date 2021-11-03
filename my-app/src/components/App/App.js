import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ListView from '../ListView/ListView';
import NewItem from '../NewItem/NewItem';

import './App.css';

function App() {
  return (
    <div className="App">
    <main>
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path = "/" exact>
          <ListView/>
        </Route>
        <Route path = "/addList" >
          <NewItem />
        </Route>
      </Switch> 
      </BrowserRouter>
      </main>  
  </div>
  );
}

export default App;
