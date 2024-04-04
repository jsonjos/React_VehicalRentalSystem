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
    bookVehicle(Id,bookvehicle){
        return axiosInstance.post('http://localhost:8080/home/bookVehicle/'+Id,bookvehicle);
    }
    payment(Id,payment){
        return axiosInstance.post('http://localhost:8080/home/amountTransfer/'+Id,payment);
    }
    linkAccount(Id,customerAccount){
        return axiosInstance.post('http://localhost:8080/account/add/'+Id,customerAccount);
    }
    deactivateAccount(Id,customerDetails){
        return axiosInstance.patch('http://localhost:8080/home/deactivate/'+Id,customerDetails);
    }
    returnVehicle(vehicle){
        return axiosInstance.post('http://localhost:8080/home/returnVehicle',vehicle)
    }
}

export default new AccountService();