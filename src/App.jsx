import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import Dashboard from "./pages/Dashboard";
import Cabins from "./pages/Cabins";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyless"
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 60*1000,
    }
  }
})

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>

          <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/dashboard"/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cabins" element={<Cabins />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account" element={<Account />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;