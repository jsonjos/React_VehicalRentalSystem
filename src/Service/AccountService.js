import { axiosInstance } from "./apiClient";
class AccountService{
    addAccount(account){
        return axiosInstance.post('http://localhost:8080/home/register/customer',account);
    }   
    loginAccount(account){
        return axiosInstance.post("http://localhost:8080/home/login/customer",account)
    }
    getActiveVehicles(location){
        // console.log(location.location);
        return axiosInstance.get("http://localhost:8080/home/viewActive/"+location.location);
    }
    bookVehicle(vehicleId){
        return axiosInstance.post('http://localhost:8080/home/bookVehicle/'+vehicleId,);
    }
}

export default new AccountService();