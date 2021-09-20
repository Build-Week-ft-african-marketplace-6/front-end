import './App.css';
import {Route} from 'react-router-dom';
import SignUpPage from './components/signUpPage';
//import axios from 'axios';
//import * as yup from 'yup';


function App() {
  return (
    <div className="App">
      <Route exact path="/signUpPage">
        <SignUpPage/>
      </Route>
    </div>
  );
}

export default App;
