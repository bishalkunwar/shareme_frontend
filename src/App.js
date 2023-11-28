import Home from "./container/Home";
import Login from "./components/Login";
import {Routes, Route, useNavigate} from "react-router-dom";

export default function App(){
  return(
    <Routes>
      <Route path="login" element={<Login/>} />
      <Route path="/*" element={<Home/>} />
    </Routes>
  )
}