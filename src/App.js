import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WorkersMain from "./components/WorkersMain/WorkersMain";
import WorkersDetail from "./components/WorkersDetail/WorkersDetail";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WorkersMain />}></Route>
          <Route path="/worker/:id" element={<WorkersDetail />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
