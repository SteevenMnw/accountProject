import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IdentifiersForm } from "./components/IdentifiersForm";
import Test from "./pages/Account.jsx";
import Lol from "./components/Lol";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Test />} />
          <Route path='/account/edit' element={<IdentifiersForm/>} />
          <Route path='/address' element={<Lol />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
