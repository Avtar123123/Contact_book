import logo from './logo.svg';
import './App.css';
import Navs from './components/layout/Navs.js'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddUser from './components/users/AddUser'
import View from './components/users/View.js'
import EditUser from './components/users/EditUser.js'
import Home from './components/pages/Home.js'
import About from './components/pages/About.js'
import Contact from './components/pages/Contact.js'
function App() {
  return (
    <div className="App">
    <Router>
    <Navs />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/adduser' element={<AddUser />} />
      <Route path='/view/:id' element={<View />} />
      <Route path='/edituser/:id' element={<EditUser />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
