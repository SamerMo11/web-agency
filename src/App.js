import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./Layout/Nav";
// import Footer from "./Components/Footer";
import Home from "./Layout/Home";


function App() {
  return(
    <Router>
      <Nav />
    <Routes>
    <Route path="/" element={<Home />} />

    </Routes>

  </Router>
  )
}

export default App;
