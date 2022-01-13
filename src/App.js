import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WorkersMain from "./components/WorkersMain/WorkersMain";
import WorkersDetail from "./components/WorkersDetail/WorkersDetail";
import Logo from './img/logo-umpa-loompa.png'
import './App.css'
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <Router>
      <div className="App">
        <nav class="navbar navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand logo-ompa" href="/">
              <img
                src={Logo}
                alt="logo"
                width="30"
                height="24"
                class="d-inline-block align-text-top logo-img "
              />
              Oompa Loompa's Crew
            </a>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<WorkersMain />}></Route>
          <Route path="/worker/:id" element={<WorkersDetail />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
