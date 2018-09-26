<template>
  <nav class="user-navbar">
    <router-link to="/" class="brand-logo"></router-link>

            <ul v-if="!isLoggedIn" class="navbar_menu_login">
              <li class="navbar_menu_login_elem"><a href="#" class="menu_login_a">Sobre nosotros</a></li>
              <li class="navbar_menu_login_elem"><a href="#" class="menu_login_a">Entrenamiento</a></li>
              <li class="navbar_menu_login_elem"><a href="#" class="menu_login_a">Beneficios</a></li>
              <li class="navbar_menu_login_elem"><a href="#" class="menu_login_a">Comunidad</a></li>
              <li class="navbar_menu_login_elem"><a href="#" class="menu_login_a">Negocios</a></li>
            </ul>

              <form v-if="isLoggedIn" action="#" method="post" class="navbar_form"> <!--- Búsqueda -->
                <input type="submit" value="" class="submit_btn">
                <input type="text" placeholder="Buscar" class="search_txt">
              </form> <!--- .\Búsqueda -->


              <ul v-if="isLoggedIn" class="navbar_filtros">
                <li class="navbar_filtros_elem"></li>
                <li class="navbar_filtros_elem">Ciudad
                  <ul class="navbar_filtros_submenu">
                    <li class="navbar_filtros_subelem">Elemento</li>
                    <li class="navbar_filtros_subelem">Elemento</li>
                    <li class="navbar_filtros_subelem">Elemento</li>
                  </ul>
                </li>
                <li class="navbar_filtros_elem">Prom</li>
                <li class="navbar_filtros_elem">Persona</li>
              </ul>

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
  height: 50px;
  width: 130px;
  background: no-repeat url(../assets/logo.png) center/auto 50px;
}

.user-navbar .navbar_menu_login {
  line-height: 1.4;
  float: none;
  margin-right: 200px;
  text-transform: uppercase;
}

.user-navbar .navbar_menu_login .navbar_menu_login_elem {
  display: inline;
  border-right: 2px solid #FFF;
}

.user-navbar .navbar_menu_login .navbar_menu_login_elem .menu_login_a {
  display: block;
  margin: 0;
  padding: 5px 10px 5px 32px;
}

.user-navbar .navbar_menu_login .navbar_menu_login_elem .menu_login_a:hover {
  text-decoration: none;
  color: #fbb829;
}

.user-navbar .navbar_menu_login .navbar_menu_login_elem:first-child {
  background: no-repeat url(../assets/nav_casa_ic.png) center left 5px/24px auto;
}

.user-navbar .navbar_menu_login .navbar_menu_login_elem:last-child {
  border: none;
  background: no-repeat url(../assets/nav_CE_ic.png) center left 5px/24px auto;
}

.user-navbar .navbar_menu_login .navbar_menu_login_elem:nth-last-child(2) {
  background: no-repeat url(../assets/nav_comunidad_ic.png) center left 5px/24px auto;
}

.user-navbar .navbar_menu_login .navbar_menu_login_elem:nth-last-child(3),
.user-navbar .navbar_menu_login .navbar_menu_login_elem:nth-last-child(4) {
  background: no-repeat url(../assets/nav_casa_ic.png) center left 5px/24px auto;
}

.navbar_form {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  height: auto;
  padding: 0;
  margin: 0 6px !important;
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
  background: #333;
  border-radius: 50px;
  margin: 0 !important;
}

.navbar_filtros,
.navbar_filtros .navbar_filtros_submenu {
  padding: 0 !important;
  line-height: normal;
}

.navbar_filtros .navbar_filtros_elem,
.navbar_filtros .navbar_filtros_submenu .navbar_filtros_subelem {
  float: left;
  display: initial;
  font-size: 16px;
  line-height: 2.4;
  width: 84px;
  text-align: center;
  margin: 0 10px;
}

.navbar_filtros .navbar_filtros_elem:first-child {
  width: 40px;
  height: 40px;
  background: no-repeat url(../assets/filtros_ic.png) center;
}

.navbar_filtros .navbar_filtros_submenu .navbar_filtros_subelem {
  float: none;
  margin: 0 !important;
  display: none;
  position: relative;
  background: #1a1a1a;
}

.navbar_filtros .navbar_filtros_submenu .navbar_filtros_subelem:hover {
  cursor: pointer;
  background: #f2f2f2;
}

.navbar_filtros .navbar_filtros_elem:hover .navbar_filtros_submenu {
  display: block;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 11px;
}

.navbar_filtros .navbar_filtros_elem:hover .navbar_filtros_submenu .navbar_filtros_subelem {
  display: block;
  top: 0;
  animation: navdrop 300ms forwards;
  box-shadow: 3px 3px 6px -1px #1a1a1a;
}

@keyframes navdrop {
  0% {
    opacity: 0;
    top: 6px;
  }

  100% {
    opacity: 1;
    top: 1px;
  }
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
  font-size: 12px;
  text-align: center;
  box-sizing: border-box;
  text-transform: uppercase;
  text-decoration: none;
}

.navbar_user_opt .navbar_user_opt_anchor:hover {
  color: #fbb829;
}

.navbar_user_opt .navbar_user_opt_anchor:active {
  color: #ffe045;
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
