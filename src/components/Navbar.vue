<template>
  <nav>
    <div class="nav-wrapper black">
        <router-link to="/" class="brand-logo"><img src="../assets/logo.png"></router-link>
    </div>
  </nav>

</template>
<style>
img  {
  width: 8.8%;
}
</style>

 <script>
import firebase from 'firebase';
export default { 
  name:'navbar',
  data (){
    return{
      isLoggedIn:false,
      currentUser:false
    }
  },
  methods:{
    logout: function(){
      firebase.auth().signOut().then(() =>{
        this.$router.push('/login')
      });
    }
  }
}

</script>