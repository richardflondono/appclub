<template>
  <nav class="user-navbar">
    <router-link to="/" class="brand-logo"></router-link>

            <div v-if="!isLoggedIn" class="navbar_menu_login">
              <span class="border-navbar">Sobre Nosotros</span>
              <span class="border-navbar">Entrenamiento</span>
              <span class="border-navbar">Beneficios</span>
              <span class="border-navbar">Comunidad</span>
              <span id="last-nav-border">Negocios</span>
            </div>

            <div v-if="isLoggedIn" class="navbar_srch_filtros">
              <form action="#" method="post" class="navbar_form"> <!--- Búsqueda -->
                <input type="submit" value="" class="submit_btn">
                <input type="text" placeholder="Buscar" class="search_txt">
              </form> <!--- .\Búsqueda -->

              <div class="navbar_filtros">
                <!--- Aquí van los filtros -->
              </div>
            </div>

            <div v-if="isLoggedIn" class="navbar_user_opt">
              <a href="/" v-if="isLoggedIn" class="navbar_user_opt_anchor home">
                Home
              </a>

              <router-link to="/comunidad" v-if="isLoggedIn" class="navbar_user_opt_anchor comunidad">
                Comunidad
              </router-link>

              <router-link to="/negocios" v-if="isLoggedIn" class="navbar_user_opt_anchor negocios">
                Negocios
              </router-link>

              <router-link to="/perfil" v-if="isLoggedIn" class="navbar_user_opt_anchor mi_perfil">
                Mi Perfil
              </router-link>
            </div>
  </nav>

</template>
<style>
.user-navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: #000;
  padding: 0;
}

.user-navbar .brand-logo {
  position: static;
  margin: 0 8px;
  border: 2px solid #FF0000;
  height: 50px;
  width: 130px;
  background: no-repeat url(../assets/logo.png) center/auto 50px;
}

.navbar_menu_login {
  border: 1px solid #FFF000;
}

.navbar_srch_filtros {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid #FFF;
}

.navbar_form {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0;
  margin: 0 6px;
}

.navbar_form .submit_btn,
.navbar_form .search_txt {
  border: none !important;
  height: 40px !important;
  margin: 0 !important;
}

.navbar_form .submit_btn {
  width: 60px;
  background: no-repeat url(../assets/lupa_ic.png) center/40px, #333;
  border-radius: 50px 0 0 50px
}

.navbar_form .search_txt {
  width: 220px !important;
  color: #FFF;
  font-size: 18px;
  padding: 0 8px !important;
  background: #333 !important;
  border-radius: 0 50px 50px 0 !important;
}

.navbar_filtros {
  border: 2px solid #00FF00;
  width: 300px;
}

.navbar_user_opt {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 1px solid #FFF;
}

.navbar_user_opt .navbar_user_opt_anchor {
  display: inline-block;
  margin: 0 5px 0 0;
  padding: 14px 8px 0 8px;
  border: 1px solid #FFF;
  height: 60px;
  min-width: 100px;
  text-align: center;
  box-sizing: border-box;
  text-transform: uppercase;
  text-decoration: none;
}

.navbar_user_opt .navbar_user_opt_anchor:last-child {
  margin: 0;
}

.navbar_user_opt .home {
  background: no-repeat url(../assets/nav_casa_ic.png) top center;
}

.navbar_user_opt .comunidad {
  background: no-repeat url(../assets/nav_comunidad_ic.png) top center;
}

.navbar_user_opt .negocios {
  background: no-repeat url(../assets/nav_CE_ic.png) top center;
}

.navbar_user_opt .mi_perfil {
  background: no-repeat url(../assets/nav_perfil_ic.png) top center;
}

input[type="submit"] {
    font-family: "FontAwesome";
}

#last-nav-border {
  padding: 0 5px;
}

.border-navbar {
  border-right: 1px solid;
  padding: 0 5px;
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

  }
}

</script>
