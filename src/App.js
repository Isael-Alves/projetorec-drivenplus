import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import Login from "./components/Login/Login";
import Subscriptions from './components/Subscriptions/Subscriptions'
import SubscriptionsSelectedPlan from './components/Subscriptions/SubscriptionsSelectedPlan'
import Registration from "./components/Login/Registration";
import Home from "./components/Home/Home";


export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="sign-up" element={<Registration />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="subscriptions/:idPlan" element={<SubscriptionsSelectedPlan />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
