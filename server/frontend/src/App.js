import LoginPanel from "./components/Login/Login"
import Register from "./components/Register/Register.jsx"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
    </Routes>
  );
}
export default App;
