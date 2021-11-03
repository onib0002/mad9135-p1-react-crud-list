import Navbar from '../Navbar/Navbar';
import ListView from '../ListView/ListView';
import NewItem from '../NewItem/NewItem';

import './App.css';

function App() {
  return (
    <div className="App">
      <main>
     
        <Navbar/>
        <ListView/>
        <NewItem />
        
          
        </main>  
    </div>
  );
}

export default App;
