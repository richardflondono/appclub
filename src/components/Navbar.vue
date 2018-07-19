<template>
  <nav>
    <div class="nav-wrapper black">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-2">
              <router-link to="/" class="brand-logo"><img src="../assets/logo.png"></router-link>
            </div>
            <div v-if="!isLoggedIn" class="col-sm-8 contenedor-info-navbar">
              <span class="border-navbar">Sobre Nosotros</span>
              <span class="border-navbar">Entrenamiento</span>
              <span class="border-navbar">Beneficios</span>
              <span class="border-navbar">Comunidad</span>
              <span id="last-nav-border">Negocios</span>
            </div>
            <div v-if="isLoggedIn" class="col-sm-8 contenedor-info-navbar">
              <span class="border-navbar">numerbe 2 head band</span>
              <span class="border-navbar">numerbe 2 head band</span>
              <span class="border-navbar">numerbe 2 head band</span>
              <span class="border-navbar">numerbe 2 head band</span>
              <span id="last-nav-border">numerbe 2 head band</span>
            </div>
            <div class="col-sm-2">
              <button v-if="isLoggedIn" class="btn este" v-on:click="logout">Salir</button>
            </div>
          </div>
        </div>
    </div>
  </nav>

</template>
<style>
img  {
  width: 40%;
}
#last-nav-border{
  padding: 0 5px;
}
.contenedor-info-navbar{
  text-align: center;
}
.border-navbar{
  border-right: 1px solid;
  padding: 0 5px 0 5px;
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
  created(){
    if(firebase.auth().currentUser){
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods:{
    logout: function(){
      console.log("prueba");
      firebase.auth().signOut().then(() =>{
        this.$router.go({path: this.$router.path});
      });
    }
  }
}

</script>
