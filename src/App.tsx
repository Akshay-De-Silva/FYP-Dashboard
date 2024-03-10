import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Details } from "./components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/details/:metric" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
