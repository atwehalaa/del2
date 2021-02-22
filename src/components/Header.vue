<template>
<div>
 <b-navbar toggleable="lg" type="dark" class="fixed-top" variant="dark">
    <div class="container">
      <b-navbar-brand href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmG6CyjpFKw2ol_sO5Fsevm7Cy9C-e5M4Vw&usqp=CAU" style="width:40px; height:40px" alt=""></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" style="margin-left:75%" is-nav >
    
          <b-navbar-nav class="" style="" >
            <b-nav-item href="#" ><router-link to="/" class="p-2 link text-white"> Home </router-link> 
               </b-nav-item>
                             <b-nav-item href="#" ><router-link to="/Order" class="p-2 link text-white
                   ">Order</router-link></b-nav-item>
            </b-navbar-nav>
    </b-collapse>
    </div>
    
  </b-navbar>
  
</div>

</template>

<script>

export default {
name:'Header',
component:{
  
},
data(){
  return{
    isModalVisible1:false
  
  }
},
methods:{
  
}
}
</script>

<style>
.link{
   text-decoration: none;
}
</style>