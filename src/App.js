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
<<<<<<< HEAD
        <Home path="/Home"/>
=======
        <SignUpPage path="/signUpPage" />
>>>>>>> 803a9f3011b96d517091dda98267df911adf500e
      </Route>
      {/* <Route>
        <SignUpPage path="/signUpPage"/>
      </Route> */}
      
    </div>
  );
}

export default App;
