import axios from "axios";
const BASE_URL = 'http://localhost:8080/orders';

class OrderService {

    addOrder(userId) {
        return axios.post(`${BASE_URL}/add/${userId}`)
    }
    getOrder(){
        return axios.get(`${BASE_URL}/getall`)
    }
    cancelOrder(userId,orderId){
        return axios.put(`${BASE_URL}/cancelorder/${userId}/${orderId}`)
    }
}
export default new OrderService();