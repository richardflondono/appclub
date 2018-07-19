<template>
  <nav>
    <div class="nav-wrapper black">
      <div class="col-lg-3">
        <router-link to="/" class="brand-logo"><img src="../assets/logo.png"></router-link>
      </div>
        <button class="btn este" v-on:click="logout">Salir</button>
    </div>
  </nav>

</template>
<style>
img  {
  width: 30%;
}
.este {
    background: #FBB829;
    font-size: 16px;
    font-weight: 800;
    color: #1A1A1A;
    float: right;
    margin-top: 10px;
    margin-right: 10px;
}
</style>

 <script>
import firebase from 'firebase';
export default {
  name:'navbar',
  data (){
    return{
      isLoggedIn: false,
      currentUser: false
    }
  },
  methods:{
    logout: function(){
      console.log("prueba");
      firebase.auth().signOut().then(() =>{
        this.$router.push('/login')
      });
    }
  }
}

</script>
