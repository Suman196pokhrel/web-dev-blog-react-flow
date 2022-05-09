import './App.css';
import Header from './components/Header';

// React Router 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Journey from './components/Journey'
import Test2 from './components/Test2'
import FirstTest from './components/FirstTest'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='main'>
          <Routes>
            <Route path='/web-dev-blog-react-flow' element={<Journey />} />
            <Route path='/example' element={<FirstTest />} />
          </Routes>
        </div>


      </div>
    </Router>
  );
}

export default App;
