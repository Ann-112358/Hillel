import axios from "axios"
import { baseUrl} from "./config.js";

class AuthController {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
        this.token = null;
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            validateStatus: function (){
                return true;
            }
        })
    }

    async getToken() {
        const response = await this.axiosInstance.post(`/Account/v1/GenerateToken`, {
            "userName": this.userName,
            "password": this.password
        });

        if (response.data.status !== "Success") {
            throw new Error(`Failed to generate token: ${response.data.result}`);
        }
       
        this.token = response.data.token;
        return this.token       
    }
}

export default AuthController;
