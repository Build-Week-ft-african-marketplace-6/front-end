import './App.css';
import {Route} from 'react-router-dom';
import SignUpPage from './components/signUpPage';
import Home from './components/Home';
//import axios from 'axios';
//import * as yup from 'yup';


function App() {
  return (
    <div className="App">
      <Route>
        <Home path="/Home"/>
      </Route>
      {/* <Route>
        <SignUpPage path="/signUpPage"/>
      </Route> */}
      
    </div>
  );
}

export default App;
