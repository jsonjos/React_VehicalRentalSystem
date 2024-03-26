import { axiosInstance } from "./apiClient";
class AccountService{
    addAccount(account){
        return axiosInstance.post('http://localhost:8080/home/register/customer',account);
    }   
    loginAccount(account){
        return axiosInstance.post("http://localhost:8080/home/login/customer",account)
    }
}

export default new AccountService();