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
            <div v-if="isLoggedIn" class="col-sm-7 contenedor-info-navbar">
              <div class="row">
              <div class="col-sm-6">
              <form>
                <input type="text" name="buscar" placeholder="Buscar.." style=" height: 30px; width: 250px; color: white; background: #6b6b6b;border-radius:  30px;padding:  0 0 0 15px;">
              </form>
              </div>
              <div class="col-sm-6">
                <div class="row">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Ciudad
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button class="dropdown-item" type="button">Action</button>
                  <button class="dropdown-item" type="button">Another action</button>
                  <button class="dropdown-item" type="button">Something else here</button>
                </div>
              </div>

              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Prom
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button class="dropdown-item" type="button">Action</button>
                  <button class="dropdown-item" type="button">Another action</button>
                  <button class="dropdown-item" type="button">Something else here</button>
                </div>
              </div>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Personas
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button class="dropdown-item" type="button">Action</button>
                  <button class="dropdown-item" type="button">Another action</button>
                  <button class="dropdown-item" type="button">Something else here</button>
                </div>
              </div>
              </div>
              </div>
              </div>
            </div>
            <div v-if="isLoggedIn" class="col-sm-3">
              <button v-if="isLoggedIn" class="btn este" v-on:click="logout">Salir</button>
              <router-link to="/perfil"> 
                <button v-if="isLoggedIn" class="btn este" >Mi Perfil</button>
              </router-link>
              <router-link to="/negocios"> 
                <button v-if="isLoggedIn" class="btn este" >Negocios</button>
              </router-link>
              <router-link to="/comunidad"> 
                <button v-if="isLoggedIn" class="btn este" >Comunidad</button>
              </router-link>
              <a href="/"> 
                <button v-if="isLoggedIn" class="btn este" >Home</button>
              </a>
            </div>
            
          </div>
        </div>
    </div>
  </nav>

</template>
<style>
dropdown{
  float :initial;
}
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
    font-size: 11px;
    font-weight: 800;
    width: 15%;
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
