import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEvent from './event/AddEvent';
import EditEvent from './event/EditEvent';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addevent" element={<AddEvent />} />
          <Route exact path="/editevent/:guid" element={<EditEvent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
