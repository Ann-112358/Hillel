import axios from "axios"
import { baseUrl, userId, isbn } from "./config.js";

class BookController {
    constructor(token){
        this.token = token;
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            validateStatus: function (){
                return true;
            }
        })
    }

    async addBook(userId, isbn){
        const response = await this.axiosInstance.post(`/BookStore/v1/Books`, {
            "userId": userId,
            "collectionOfIsbns": [
              {
                "isbn": isbn
              }
            ]  
        },
    {
        headers: {
            'Authorization': `Bearer ${this.token}`
        },
    });
    return response;
    }

    async getAllBooks(){
        const response = await this.axiosInstance.get(`/BookStore/v1/Books`)
        return response;
    }

    async verifyIsbn(){
        const response = await this.axiosInstance.get(`/BookStore/v1/Book?ISBN=${isbn}`)
        return response;
    }

    async deleteBook(userId, isbn) {
        const response = await this.axiosInstance.delete(`/BookStore/v1/Book`, {
                data: {
                    "isbn": isbn,
                    "userId": userId
                },
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },
            });
        return response;
    }

    async deleteAllBooks(){
        const response = await this.axiosInstance.delete(`/BookStore/v1/Books?UserId=${userId}`,{          
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },

        });
        return response;
    }
}

export default BookController;