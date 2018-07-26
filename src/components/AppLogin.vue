<template>
    <div class="col-xl-12">
        <div class="row">
            <div class="col-md-4">
                <div class="my-container">
                    <h2>Bienvenid@s</h2>

                    <p>Esta es tu plataforma de transformación, creación y progreso.<br>
                    <span>¿Que meta extraordinario vas a cumplir hoy?</span></p>

                    <input type="text" v-model="email" placeholder="Codigo de Usuario">
                    <a href="">Otras formas de ingreso</a>

                    <input type="password" v-model="password" placeholder="Pín de Elite">
                    <a href="">Olvide mi contraseña</a>

                    <p style="text-transform: uppercase; border-bottom:1px solid #FFE045;"><span>Ir directo a:</span></p>

                    <div style="width: 95%;">

                    <button type="button" v-on:click="login" class="btn">Inicio</button>
                    <button type="button" v-on:click="login" class="btn">Comunidad</button>
                    <button type="button" v-on:click="login" class="btn">Negocios</button>

                    </div>
                </div>

                <div class="my-container">
                    <h2>¿Aún no eres parte?</h2>

                    <p>Somos una comunidad comprometida con crear un mundo más amoroso, justo y poderoso.<br>
                    <span>¿Listo para crear metas extraordínarias</span></p>

                    <div style="width: 95%;">
                    <button type="button" class="btn">Iniciar mi Entrenamiento</button>
                    </div>
                </div>

            </div>

            <div class="col-md-7">
                <h2 style="text-weight:500;">Este es un mensaje muy poderoso de invitación a ser parte de la comunidad más
                poderosa del mundo desde el <span>amor</span> y el <span>compromiso</span></h2>.
            </div>
        </div>

    </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Fjalla+One|Source+Sans+Pro');

body{
    font-family: 'Source Sans Pro', Arial, sans-serif;
    background: no-repeat url("../assets/pexels-photo-450035.jpeg");
    color: #FFF;
}

input {
    color: #FFF;
}

.my-container {
    width: 100%;
    padding: 25px 45px;
    margin: 40px auto;
    background: rgba(61, 62, 66, 0.8);
    border: 2px solid #AAA;
}

.my-container div {
    margin: 0 auto;
    text-align: center;
}

.col-md-4 {
    width: 470px;
    margin: 0 0 0 20px;
    float: left;
    overflow: auto;
}

.btn {
    background: #FBB829;
    font-size: 16px;
    font-weight: 800;
    color: #1A1A1A
}

a, a:active, a:visited {
    color: #FFF;
    font-size: 18px;
    text-decoration: underline;
}

a:hover {
    text-decoration: none;
}

p {
    font-size: 20px;
    text-align: center;
    margin: 20px 0;
}

p span {
    color: #FFE045;
}

h2 span {
    color: #FBB829;
}

h2 {
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
