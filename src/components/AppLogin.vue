<template>
  <div class="applogin_contenedor"> <!--- Contenido -->
    <div class="applogin_col_prin">
      <div class="applogin_col_prin-cuadro">
        <p class="applogin_titulo">Bienvenid@s</p>

        <p class="applogin_p">Esta es tu plataforma de transformación, creación y progreso.<br>
        <span class="resaltador">¿Que meta extraordinaria vas a cumplir hoy?</span></p>
        <form v-on:submit.prevent="noop">
          <input class="applogin_input_login" type="text" v-model="email" placeholder="| Codigo de Usuario">
          <a href="" class="applogin_a">Otras formas de ingreso</a>

          <input class="applogin_input_login" type="password" v-model="password" v-on:keyup.enter="login" placeholder="| Pín de Elite">
          <a href="" class="applogin_a">Olvide mi contraseña</a>

          <p class="applogin_p resaltador" style="text-transform: uppercase; border-bottom:1px solid #FFE045;">Ir directo a:</p>

          <div class="applogin_btn_div">
            <button type="button" v-on:click="login" class="applogin_btn_login">Inicio</button>
            <div class="applogin_btn_side">
              <button type="button" v-on:click="login" class="applogin_btn_login">Comunidad</button>
              <button type="button" v-on:click="login" class="applogin_btn_login">Negocios</button>
            </div>
          </div>
        </form>
      </div>

    </div>

    <div class="applogin_col_sec">
      <p class="applogin_titulo">Este es un mensaje muy poderoso de invitación a ser parte de la comunidad más
      poderosa del mundo desde el <span class="resaltador">amor</span> y el <span class="resaltador">compromiso</span>.</p>

      <div class="applogin_col_sec_last">
        <p class="applogin_titulo">¿Aún no eres parte?</p>

        <p class="applogin_p">Somos una comunidad comprometida con crear un mundo más amoroso, justo y poderoso.<br>
        <span class="resaltador">¿Listo para crear metas extraordínarias</span></p>
        <button type="button" class="applogin_btn_login">Iniciar mi Entrenamiento</button>
        </div>
      </div>
    </div>

  </div> <!--- .\ Contenido -->
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Fjalla+One|Source+Sans+Pro');

body{
    font-family: 'Source Sans Pro', Arial, sans-serif;
    background: no-repeat url("../assets/pexels-photo-450035.jpeg") center;
}

.applogin_contenedor {
    color: #FFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.applogin_col_prin {
  margin: 10px;
  max-width: 410px;
  border: 2px solid #FF0000;
}

.applogin_col_prin .applogin_col_prin-cuadro {
    margin: 0;
    padding: 20px;
    background: rgba(26 , 26 , 26 , 0.8);
    border: 2px solid #AAA;
}

.applogin_col_sec {
  margin: 10px;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #00FF00;
}

.applogin_input_login {
    color: #FFF;
    border-radius: 400px !important;
    border: 1px solid #4d4d4d !important;
    background: #4d4d4d !important;
    padding: 0 0 0 20px !important;
    margin: 6px auto !important;
    height: 35px !important;
    width: 92% !important;
}

.applogin_input_login:focus,
.applogin_input_login:active {
    border: 1px solid #FBB829 !important;
    box-shadow: 0 1px 0 0 #FBB829 !important;
}

.applogin_btn_div {
  margin: -10px auto 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.applogin_btn_div .applogin_btn_side {
  margin: 0;
  width: calc(100%/2 - 2px);
}

.applogin_btn_div .applogin_btn_login {
  opacity: .8;
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
  font-size: 16px;
  font-weight: 800;
  color: #1A1A1A;
  border: 2px solid #f2f2f2 !important;
}

.applogin_btn_div .applogin_btn_login {
  height: 170px;
  width: calc(100%/2 - 2px);
  background: no-repeat url(../assets/home_login_ic.png) center, #FBB829;
  padding: 100px 0 0 0 !important;
  margin: 0 4px 0 0 !important;
}

.applogin_btn_div .applogin_btn_side .applogin_btn_login {
  height: 83px;
  width: 100%;
  background: no-repeat url(../assets/nav_casa_ic.png) center top 10px, #e6e6e6;
  padding: 30px 0 0 0 !important;
  margin: 0 0 4px 0 !important;
}

.applogin_btn_div .applogin_btn_side .applogin_btn_login:last-child {
  margin: 0 !important;
}

.applogin_btn_login:hover,
.applogin_btn_login:active,
.applogin_btn_login:focus{
    background: #f7931e !important;
}

.applogin_a,
.applogin_a:active,
.applogin_a:visited {
    font-size: 14px;
    text-decoration: underline;
    color:#FFF;
    margin: 4px auto 4px 22px;
}

.applogin_a:hover {
    text-decoration: none;
}

.applogin_p {
    font-size: 18px;
    text-align: center;
    margin: 14px 0;
}

.resaltador {
    color: #FBB829;
}

.applogin_titulo {
    font-size: 32px;
    font-family: 'Fjalla One', Arial, sans-serif;
    text-align: center;
    margin: 5px auto;
    text-transform: uppercase;
}

.applogin_col_sec .applogin_col_sec_last {
  background: rgba(26 , 26 , 26 , 0.8);
  border-radius: 200px;
  padding: 10px 40px;
}

.applogin_col_sec .applogin_col_sec_last .applogin_btn_login {
  display: block;
  margin: 10px auto;
  width: auto;

}

</style>

<script>
import {database} from './firebaseInit'
import formularioUser from './FormularioUser'
import firebase from 'firebase'
//import userDB from './userBD'
let userRef = database.ref('user/')

export default {
  name:'login-user',
  data: function() {
        return{
            email: '',
            password: ''
        };
    },
    methods:{
        login: function (e) {
            firebase.auth().signInWithEmailAndPassword(this.email,this.password)
            .then(
                user => {
                    this.$router.go({path: this.$router.path});
                },
                err => {
                    alert(err.message);
                }
            );
            e.preventDefault();
        }
    }
}
</script>
