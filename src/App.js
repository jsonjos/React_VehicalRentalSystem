import './App.css';
import CustomerHome from './Component/CustomerHome';
import GetActiveVehicle from './Component/GetActiveVehicle';
import Login from './Component/Login';
import Register from './Component/Register';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Logout from './Component/Logout';
import Payment from './Component/Payment';
import LinkAccount from './Component/LinkAccount';
import DeactivateAccount from './Component/DeactivateAccount'
import ReturnVehicle from './Component/ReturnVehicle';
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
      <Route path='/link' element={<LinkAccount/>}></Route>
      <Route path='deactivate' element={<DeactivateAccount/>}></Route>
      <Route path='/return' element={<ReturnVehicle/>}></Route>
      </Routes>

  </BrowserRouter>
  );
}

export default App;
