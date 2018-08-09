<template>
  <nav>
    <div class="nav-wrapper black">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-1">
              <router-link to="/" class="brand-logo"><img id="img_nav" src="../assets/logo.png"></router-link>
            </div>
            <div v-if="!isLoggedIn" class="col-sm-8 contenedor-info-navbar">
              <span class="border-navbar">Sobre Nosotros</span>
              <span class="border-navbar">Entrenamiento</span>
              <span class="border-navbar">Beneficios</span>
              <span class="border-navbar">Comunidad</span>
              <span id="last-nav-border">Negocios</span>
            </div>
            <div v-if="isLoggedIn" class="col-sm-6 contenedor-info-navbar">
              <div class="row">
                <div class="col-sm-6">
                  <div class="container">
                    
                    <input id="buscar_nav" placeholder="Buscar">
                  
                  </div>
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
            <div v-if="isLoggedIn" class="col-sm-5">
              <button v-if="isLoggedIn" class="btn btn_este" v-on:click="logout"><p>Salir</p></button>
              <router-link to="/perfil"> 
                <button v-if="isLoggedIn" class="btn btn_este" ><p>Mi Perfil</p></button>
              </router-link>
              <router-link to="/negocios"> 
                <button v-if="isLoggedIn" class="btn btn_este" ><p>Negocios</p></button>
              </router-link>
              <router-link to="/comunidad"> 
                <button v-if="isLoggedIn" class="btn btn_este" ><p>Comunidad</p></button>
              </router-link>
              <a href="/"> 
                <button v-if="isLoggedIn" class="btn btn_este" id="nav_home" ><p>Home</p></button>
              </a>
            </div>
            
          </div>
        </div>
    </div>
  </nav>

</template>
<style>
#nav_home {
    background: no-repeat url(/static/img/pexels-photo-450035.ee06817.jpeg);
    }
input[type="submit"] {
    font-family: FontAwesome;
}
#buscar_nav{
  color: white;
}

dropdown{
  float :initial;
}
#img_nav  {
  width: 95%;
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
.btn_este {
    background: #FBB829!important;
    font-size: 11px!important;
    font-weight: 800!important;
    width: auto!important;
    color: #1A1A1A!important;
    float: right!important;
    margin-top: 10px!important;
    margin-right: 10px!important;
}
.container_este{
border-radius: 50px; 
background-color: #4D4D4D;
}
/* estilos para responsive en navbar  */
@media only screen and (max-width: 1000px) {
    
    #img_perfil {
        width: 100%;
    }
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
