import { Route, Routes,useLocation} from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar";
import MechanicRequests from "./pages/MechanicRequests";
import ServicerRequests from "./pages/ServicerRequests";
import Suggestions from "./pages/Suggestions";
import Mechanics from "./pages/Mechanics";
import CarWashServicers from "./pages/CarWashServicers";
import MechanicBookings from "./pages/MechanicBookings";
import MechanicRating from "./pages/MechanicRating";
import Users from "./pages/Users";

function App() {
  const location=useLocation();
  const currentPath = location.pathname;
  return (
    <div className={`${currentPath!=='/'?'flex':''} h-screen bg-gray-900 text-gray-100 overflow-hidden`}>
      <Toaster/>
      {currentPath!=='/' && <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>}
      {currentPath!=='/' && <Sidebar/>}
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/overview' element={<OverviewPage/>}/>
        <Route path='/mechanics' element={<Mechanics/>}/>
        <Route path='/carwashservicers' element={<CarWashServicers/>}/>
        <Route path='/servicerrequests' element={<ServicerRequests/>}/>
        <Route path='/messages' element={<Suggestions/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
