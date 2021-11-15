import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Account from "./pages/Account";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Pour tester */}
          <Route path='/' element={<Account />} />

          {/* Page de Connexion */}
          <Route path='/customer/account/login/' element={<LogIn />} />

          {/* Page d'inscription */}
          <Route path='/customer/account/create/' element={<SignUp />} />

          {/* Page et Composant du compte utilisateur */}
          <Route path='/customer/account/' element={<Account />} />
          <Route path='/customer/account/edit/' element={<Account />} />
          <Route path='/customer/address/' element={<Account />} />
          <Route path='/sales/order/history/' element={<Account />} />
          <Route path='/catalogrequest/' element={<Account />} />
          <Route path='/newsletter/manage/' element={<Account />} />
          <Route path='/customer/account/logoutSuccess/' element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
