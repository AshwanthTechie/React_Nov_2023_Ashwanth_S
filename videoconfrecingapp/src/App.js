import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage.js';
import SignIn from './components/signin.js';
import SignUp from './components/signup.js';

const App = () => {
  return (
    <Router>
      {/* Use <Routes> instead of <Route> at the top level */}
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='Registration' element={<SignUp/>}/>
      </Routes>
    </Router>
  );
};

export default App;
