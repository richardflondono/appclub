<template>
    <div class="col-xl-12 fondo">
        <div class="row">
            <div class="col-md-4">
                <div class="my-container text_whitte contenedor_bienvenidos">
                    <p class="titulo_login">Bienvenid@s</p>

                    <p class="appLogin_p">Esta es tu plataforma de transformación, creación y progreso.<br>
                    <span>¿Que meta extraordinario vas a cumplir hoy?</span></p>
                    <form v-on:submit.prevent="noop">
                        <input class="input_login" type="text" v-model="email" placeholder="Codigo de Usuario">
                        <a href="" class="a_appLoggin">Otras formas de ingreso</a>

                        <input class="input_login" type="password" v-model="password" v-on:keyup.enter="login" placeholder="Pín de Elite">
                        <a href="" class="a_appLoggin">Olvide mi contraseña</a>

                        <p class="appLogin_p" style="text-transform: uppercase; border-bottom:1px solid #FFE045;"><span>Ir directo a:</span></p>

                        <div style="width: 95%;">
                            <button type="button" v-on:click="login" class="btn_login">Inicio</button>
                            <button type="button" v-on:click="login" class="btn_login_c">Comunidad</button>
                            <button type="button" v-on:click="login" class="btn_login_c">Negocios</button>
                        </div>
                    </form>
                </div>

                <div class="my-container text_whitte contenedor_bienvenidos">
                    <p class="titulo_login">¿Aún no eres parte?</p>

                    <p class="appLogin_p">Somos una comunidad comprometida con crear un mundo más amoroso, justo y poderoso.<br>
                    <span>¿Listo para crear metas extraordínarias</span></p>

                    <div style="width: 95%;">
                    <button type="button" class="btn_login">Iniciar mi Entrenamiento</button>
                    </div>
                </div>

            </div>

            <div class="col-md-7 text_whitte">
                <span class="titulo_login" style="text-weight:500;">Este es un mensaje muy poderoso de invitación a ser parte de la comunidad más
                poderosa del mundo desde el <span class="resaltador">amor</span> y el <span class="resaltador">compromiso</span></span>.
            </div>
        </div>

    </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Fjalla+One|Source+Sans+Pro');

body{
    font-family: 'Source Sans Pro', Arial, sans-serif;
    background: no-repeat url("../assets/pexels-photo-450035.jpeg");
}

.fondo{
    background: no-repeat url(/static/img/pexels-photo-450035.ee06817.jpeg);
}

.text_whitte{
    color: #FFF;
}

.input_login {
    color: #FFF!important;
    border-radius: 400px!important;
    border: 1px solid #4d4d4d!important;
    background: #4d4d4d!important;
    padding: 0 0 0 20px!important;
    height: 35px!important;
    width: 92%!important;
    margin: 14px 0!important;
}

.contenedor_bienvenidos{
    margin: 15px auto;
    padding: 20px 40px;
    width: 100%;
    background: rgba(26 , 26 , 26 , 0.8);
    border: 1px solid #AAA;
}

.my-container div {
    margin: 0 auto;
    text-align: center;
}

.col-md-4 {
    max-width: 27.333333%;
    margin: 0 0 0 15px;
    float: left;
    overflow: auto;
}

.btn_login {
    border-radius: 400px 400px;
    background: #FBB829;
    font-size: 16px;
    font-weight: 800;
    color: #1A1A1A;
    border: 0!important;
    padding: 6px 18px!important;
    margin: 7px 5px!important;
}

.btn_login:hover, .btn_login:active{
    background: #f7931e!important;
}

.btn_login_c {
    border-radius: 400px 400px;
    background: #B3B3B3;
    font-size: 16px;
    font-weight: 800;
    color: #1A1A1A;
    border: 0!important;
    padding: 6px 18px!important;
    margin: 7px 5px!important;
}

.btn_login_c:hover, .btn_login_c:active{
    background: #797B7F!important;
}

.a_appLoggin, .a_appLoggin:active, .a_appLoggin:visited {
    font-size: 16px;
    text-decoration: underline;
}

.a_appLoggin {
    font-size: 16px;
    text-decoration: underline;
    color:#FFF;
}

.a_appLoggin:hover {
    color:#FFF;
    text-decoration: none;
}

.appLogin_p {
    font-size: 18px;
    text-align: center;
    margin: 20px 0;
}

.appLogin_p span {
    color: #FFE045;
}

.titulo_login{
    font-size: 32px;
    font-family: 'Fjalla One', Arial, sans-serif;
    text-align: center;
    margin: 5px auto;
    text-transform: uppercase;
}

.col-md-7 {
    /** No style **/
    float: right;
    width: 60%;
    margin: 0 15px 0 0;
    padding: 60px;
}

.resaltador{
    color: #FBB829;
    font-family: 'Fjalla One', Arial, sans-serif;
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
