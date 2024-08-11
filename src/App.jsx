
import Footer from "./Components/Footer/Footer";
import Navber from "./Components/Navber"
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <div> 
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
