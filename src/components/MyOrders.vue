<template>
<div>
    <HeaderPage/>
    <div>
    <v-card class="mx-auto mb-12" flat height="500px" max-width="1200px">
    <v-simple-table class="mt-10 elevation-2"  light>
        <template v-slot:default>
                <tr class="grey--text" >
                    <th class="text-center"></th>
                    <th class="text-center" >OrderId</th>
                    <th class="text-center" >Date</th>
                    <th class="text-center" >Address</th>
                    <th class="text-center" >Book Name</th>
                    <th class="text-center" >Quantity</th>
                    <th class="text-center" >Price</th>
                    <th class="text-center" >Total</th>
                    <th class="text-center" >Status</th>
                </tr>
                <tr v-for="order in orderData" :key="order.orderId">
                    <td class="text-center"><img :src="order.book.bookImage" :contain="true" height="100px" width="80px" /></td>
                    <td class="text-center">{{ order.orderId }}</td>
                    <td class="text-center ">{{ order.date }}</td>
                    <td class="text-center">{{ order.address }}</td>
                    <td class="text-center">{{ order.book.bookName }}</td>
                    <td class="text-center">{{ order.quantity }}</td>
                    <td class="text-center">{{ order.price }}</td>
                    <td class="text-center">{{ order.price }}</td>
                    <td class="text-center"><v-btn class="white--text mt-0" color="#E53935"
                    v-if="order.cancel == 0" @click="cancel(order.orderId)" small>Cancel</v-btn>
                    <v-btn depressed disabled small
                    v-else>Cancelled</v-btn></td>
                </tr>
        </template>
    </v-simple-table>
    </v-card>
    </div>
    <Footer/>
</div>
</template> 

<script>
import OrderService from "../service/OrderService";
import HeaderPage from "../components/HeaderPage.vue"
import Footer from "./Footer.vue";
export default {
    name: "myorders",
    components: {
        HeaderPage,
        Footer
    },
    data() {
        return {
            orderData: [],
        }
    },
    methods:{
        cancel(orderId){
            var answer = window.confirm("Do you want to cancel the order ?");
                if (answer === true) {
                OrderService.cancelOrder(localStorage.getItem('userId'),orderId).then((response) => {
                this.orderData = response.data.data;
                alert("Item cancelled successfully!!");
                    window.location.reload();
                })
            }
            else {
                    window.location.reload();
                }
            
        },
        getOrders(){
            OrderService.getOrder().then((response) => {
                console.log(response)
                this.orderData = response.data.data;
            })
        },
    },
    created() {
      this.getOrders();
    }

}
</script>

<style scoped>

</style>
