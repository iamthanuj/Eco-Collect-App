import AdminPage from "./pages/AdminPage"
import NavBar from "./components/NavBar"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <>
      <NavBar/>
      <AdminPage/>
      <ToastContainer/>
    </>
  )
}

export default App
