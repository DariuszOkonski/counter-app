import React, {Component} from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
  state = {  }

  render() { 
    return ( 
      <React.Fragment>
        <Navbar/>

        <main className="container">
          <Counters/>
        </main>      
    </React.Fragment>
     );
  }
}
 
export default App;
