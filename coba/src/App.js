import './App.css';
import Expenses from "./pages/expenses";
import Invoices from "./pages/invoices";
import { BrowserRouter, Routes,
  Route, Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> | 
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
