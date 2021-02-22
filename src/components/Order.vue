<template>
  <div class="container" style="margin-top:70px" >
  
 <b-table-simple hover striped responsive="sm" v-for="item in Order " :key="item.id">
  
    <b-thead head-variant="dark">
      <b-tr>
        <b-th>id</b-th>
        <b-th>username</b-th>
        <b-th>email</b-th>
        <b-th>med</b-th>
        <b-th>product</b-th>
        <b-th>quantity"</b-th>
        <b-th>totalPrice</b-th>
         <b-th>delete</b-th>
         <b-th>edit</b-th>
         <b-th>save</b-th>
      </b-tr>
    </b-thead>
    <b-tbody >
      <b-tr >
        <b-td>
          {{ item.id }}
          </b-td>
        <b-td class="text-right"  >
               <div v-for="item1 in item.des "  :key="item1.id"> {{item1.username}}</div> 
        </b-td>
        <b-td> <div v-for="item1 in item.des " :key="item1.id">
                             {{item1.email}}
                </div> 
        </b-td>
        <b-td> <div v-for="item1 in item.des " :key="item1.id"> {{item1.med}}</div> </b-td>
        <b-td>  <div v-for=" item1 in  item.des" :key="item1.id"> 
                          <div v-for="item2 in item1" :key="item2.id">
                            {{item2.title}}
                          </div>
                </div> 
        </b-td>
        <b-td variant="warning">
          <div v-for="item1 in  item.des" :key="item1.id"> 
                          <div v-for="item2 in item1" :key="item2.id">
                            {{item2.quantity}}
                          </div>
          
                </div>
        </b-td>
        <b-td>
          <div v-for="item1 in  item.des" :key="item1.id"> 
                          <div v-for="item2 in item1" :key="item2.id">
                            {{item2.totalPrice}}
                          </div>
                </div> 
        </b-td>
        <b-td >
               <b-icon icon="x-circle" scale="2" variant="danger" @click.prevent="remove(item)"></b-icon>
        </b-td> 
        <b-td >
              <b-icon icon="pen-fill" scale="2" variant="danger"  @click.prevent="edit1(item)"></b-icon>
        </b-td> 
         <b-td >
               <b-icon icon="asterisk" scale="2" variant="danger"  @click.prevent="createOffert(item)"></b-icon>
        </b-td>
      </b-tr>
      <b-tr>
          <div v-show="local.isactive">

           <b-form inline @submit.prevent="updateOrder()" >
                 <b-input-group v-for="gg in item.des" :key="gg.id" class="mb-2 mr-sm-2 mb-sm-0">
                    <b-td style="width: 100%;"> <b-form-input v-if="gg.username" :value="gg.username" @input="updateUserName"  id="inline-form-input-username" placeholder="Username"></b-form-input>
                      <label class="sr-only" for="inline-form-input-name">Name</label></b-td>
                    
                 <b-td style="width: 100%;">  <b-form-input v-if="gg.email" :value="gg.email" @input="updateEmail" 
                        id="inline-form-input-name"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        placeholder= "email"
               
                   ></b-form-input></b-td>
                  <b-td style="width: 100%;"><b-form-input
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0"
                      placeholder= "med"
                      v-if="gg.med" :value="gg.med" @input="updateMed"
                
                   ></b-form-input></b-td> 
                   <b-td style="width:100%;" v-for="ff in gg" :key="ff.id"> <b-form-input 
                      placeholder= "quantity"
                         v-if="ff.quantity"  :value="ff.quantity"
                      @input="updateQuantity"
                  
                  ></b-form-input></b-td>
                <b-td v-for="ff in gg" :key="ff.id" style="width: 100%;">
                  <b-form-input
                   class="mb-2 mr-sm-2 mb-sm-0"
                  :value="ff.title"   v-if="ff.title" 
                  placeholder= " tilte"
                    @input="updateTitle"
               
                  ></b-form-input></b-td>
                <b-td style="width: 100%;" v-for="ff in gg" :key="ff.id"> <b-form-input
                   class="mb-2 mr-sm-2 mb-sm-0"
                   :value="ff.totalprice"   v-if="ff.totalprice"
                  placeholder= "total"
                    @input="updateTotal"
               
                  ></b-form-input></b-td>
                </b-input-group>  
                   <input type="submit" variant="primary">
              </b-form>     
          </div> 
      </b-tr>
    </b-tbody>   
</b-table-simple>

  </div>
  
</template>
<script>

import axios from 'axios'

export default {
  name: "app",

  components: {
 
  },

data(){
return {
  local:{
     isactive:false,
   
  },
   isModalVisible: false,
  theOrder:[],
  edit:false,

}

},
 mounted() {
   this.$store.dispatch("getOrder");

  },
  computed:{
       
    Order(){
     return this.$store.state.Order
   },
   
  },
  methods:{
    createOffert(item){
     axios.post('http://localhost/ordercms/wp-json/myname/SendOrder', {
     item
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    },
    updateOrder(){
      let self = this
     axios.post('http://localhost/ordercms/wp-json/myname/UpdateOrder', {
    order:self.theOrder
  })
  .then(function (response) {
    console.log(response);
    this.$router.push('/') 
  })
  .catch(function (error) {
    console.log(error);
  });
    },
     updateUserName(e){
     this.theOrder.des.user.username = e
     },
     updateEmail(e){
        this.theOrder.des.user.email = e
     },
      updateMed(e){
        this.theOrder.des.user.med = e
     },
       updateQuantity(e){
       
     this.theOrder.des.cart[0].quantity = e
     },
      updateTitle(e){
        this.theOrder.des.cart[0].title = e
     },
     updateTotal(e){
        this.theOrder.des.cart[0].totalprice = e
     },

     remove(item){
         let self1 = this
         axios.post('http://localhost/ordercms/wp-json/myname/deleteOrder', {
         id:item.id
  })
  .then(function (response) {
         const indexIten =  self1.$store.state.Order.indexOf(item);
         console.log(indexIten);
         console.log( self1.$store);
         console.log(response);
         self1.$store.state.Order.splice(indexIten,1);
  })
  .catch(function (error) {
         console.log(error);
 
  });
         
    },
    edit1(item){
      this.theOrder = item
      this.local.isactive =true;
    },
    
            showModal(product) {
        this.isModalVisible = true;
        this.$store.state.product = product;
      },
      closeModal() {
        this.isModalVisible = false;
      },
  },

};
</script>

<style>

 

</style>
