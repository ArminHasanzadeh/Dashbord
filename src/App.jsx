import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import SighUp from "./pages/login/sigh up/SighUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./header/Header.css";
import DashboardLayout from "./layout/dashboardLayout";
import LoginLayout from "./layout/loginLayout";
import Transactions from "./pages/Dashboard/Transactions"
import Accounts from "./pages/Dashboard/Accounts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginLayout />}>
            <Route index path="/" element={<Login />} />
            <Route path="/signup" element={<SighUp />} />
          </Route>

          <Route element={<DashboardLayout />}>
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route index path="/transactions" element={<Transactions />} />
            <Route index path="/accounts" element={<Accounts />} />
          </Route>
        </Routes>

        
      </BrowserRouter>
    </>
  );
}

export default App;
