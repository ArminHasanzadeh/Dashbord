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
import Investments from "./pages/Dashboard/Investments";
import SettingLayout from "./layout/settingLayout";
import SettingEdit from "./pages/Dashboard/Setting/settingEdit";
import Preferences from "./pages/Dashboard/Setting/preferences";
import Security from "./pages/Dashboard/Setting/security";



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
            <Route  path="/transactions" element={<Transactions />} />
            <Route  path="/accounts" element={<Accounts />} />
            <Route  path="/investments" element={<Investments />} />
              <Route element={<SettingLayout />}>
                  <Route index path="/settings"  element={<SettingEdit />} />
                  <Route  path="/settings/preferences"  element={<Preferences />} />
                  <Route  path="/settings/security"  element={<Security />} />
              </Route>
          </Route>
        </Routes>

        
      </BrowserRouter>
    </>
  );
}

export default App;
