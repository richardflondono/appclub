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
                    
                    <button class="btn btn-secondary" type="button">
                      <!-- Lupa -->
                    </button>
                    <input id="buscar_nav" placeholder="Buscar">
                  
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="row">
                    <div class="dropdown">
                        <button class="btn btn-secondary" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <!-- Aquí va -->
                        </button>
                      </div>
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
              <button v-if="isLoggedIn" class="btn btn_este" v-on:click="logout"> 
                  <img class="img_nav_button" src="" alt=""><p class="p_nav">Salir</p>
              </button>
              <router-link to="/perfil"> 
                <button v-if="isLoggedIn" class="btn btn_este" >
                   <img class="img_nav_button" src="../assets/nav_perfil_ic.png" alt=""><p class="p_nav">Mi Perfil</p>
                   </button>
              </router-link>
              <router-link to="/negocios"> 
                <button v-if="isLoggedIn" class="btn btn_este" > 
                  <img class="img_nav_button" src="" alt=""><p class="p_nav">Negocios</p>
                  </button>
              </router-link>
              <router-link to="/comunidad"> 
                <button v-if="isLoggedIn" class="btn btn_este" >
                  <img class="img_nav_button" src="../assets/nav_comunidad_ic.png" alt=""><p class="p_nav">Comunidad</p>
                  </button>
              </router-link>
              <a href="/"> 
                <button v-if="isLoggedIn" class="btn btn_este" >
                  <img class="img_nav_button" src="../assets/nav_casa_ic.png" alt=""><p class="p_nav">Home</p>
                </button>
              </a>
            </div>
            
          </div>
        </div>
    </div>
  </nav>

</template>
<style>
input[type="submit"] {
    font-family: "FontAwesome";
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
.p_nav {
  margin: 0;
  padding: 0;
}
#last-nav-border{
  padding: 0 5px;
}
.contenedor-info-navbar{
  text-align: center;
}
.border-navbar{
  border-right: 1px solid;
  padding: 0 5px;
}
.img_nav_button{
  width: 28px;
}
.btn_este {
  height: auto;
  background:transparent;
  font-size: 11px;
  font-weight: 800;
  color: #d4d4d4;
  float: right;
  margin: 2px 10px 0 0;
}
.btn_este:hover {
  background:transparent;
}
.container_este{
border-radius: 50px; 
background-color: #4D4D4D;
}

.row > .dropdown .btn {
  margin: 0;
  border-radius: 0;
  text-shadow: 0;
  background: #808080;
  border-color: #808080;
  transition: background-color border-color 200ms ease-in 10ms;
}

.row > .dropdown .btn:hover {
  background-color: #4d4d4d;
  border-color: #4d4d4d;
}

.dropdown:first-child > .btn {
  padding: 10px 30px;
  background: no-repeat center url(../assets/filtros_ic.png) #808080;
  border-radius: 50px 0 0 50px;
}

.dropdown:last-child > .btn {
  border-radius: 0 50px 50px 0;
}

input#buscar_nav {
  background-color: #808080;
  display: inline-block;
  border: none;
  border-radius: 0 50px 50px 0;
  box-sizing: border-box;
  padding: 5px 6px;
  margin: 0;
  height: 4.5ch;
  width: 33ch;
}



.container > .btn {
  background: no-repeat center url(../assets/lupa_ic.png) #808080;
  border: none;
  border-radius: 50px 0 0 50px;
  display: inline-block;
  box-sizing: border-box;
  padding: 18px 24px;
  margin: 0 -3px 2px 0;
  height: 5ch;
}

.container > .btn:hover {
  background: no-repeat url(../assets/lupa_ic_hover.png) #4d4d4d;
  background-position: 7.2px 2px;
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
