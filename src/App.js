import './App.css';
import CustomerHome from './Component/CustomerHome';
import GetActiveVehicle from './Component/GetActiveVehicle';
import Login from './Component/Login';
import Register from './Component/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logout from './Component/Logout';
import Payment from './Component/Payment';
function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/getactive' element={<GetActiveVehicle />}></Route>
      <Route path='/customer/Home' element={<CustomerHome />}></Route>
      <Route path='/logout' element={<Logout/>}></Route>
      <Route path='/payment' element={<Payment/>} ></Route>
      </Routes>

  </BrowserRouter>
  );
}

export default App;
