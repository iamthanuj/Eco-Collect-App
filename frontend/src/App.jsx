import AdminPage from "./pages/AdminPage"
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <>
      <NavBar/>
      <SideBar/>
      <AdminPage/>
      <ToastContainer/>
    </>
  )
}

export default App
