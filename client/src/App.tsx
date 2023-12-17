import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SuccessPortal from './SuccessPortal';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/success' element={<SuccessPortal/>}/>
      </Routes>
    </Router>
  )
}

export default App;

