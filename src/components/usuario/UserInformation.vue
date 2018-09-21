<template>
    <div class="container_1"><!-- Primer col -->
     <div class="userinfo-1">

            <div class="userinfo_cont_img">
              <!-- Imagen de usuario -->
            </div>

            <p class="nombre_us">{{loggedUser.fName}} {{loggedUser.lName}}</p>

            <ul class="userinfo_datos">
                <li class="userinfo_datos_elem">
                  Status: {{loggedUser.rol}}
                </li>
                <li class="userinfo_datos_elem">
                  <a class="userinfo_datos_elem_a" href="#">Estadisticas</a>
                </li>
                <li class="userinfo_datos_elem">
                  <a class="userinfo_datos_elem_a" href="#">Socios</a>
                </li>
                <li class="userinfo_datos_elem">
                  <a class="userinfo_datos_elem_a" href="#">Empresas</a>
                </li>
                <li class="userinfo_datos_elem">
                  <a class="userinfo_datos_elem_a" href="#">Entrenadores</a>
                </li>
                <li class="userinfo_datos_elem">
                  <a class="userinfo_datos_elem_a" href="#">Configuracion</a>
                </li>
                <li class="userinfo_datos_elem">
                  <a class="userinfo_datos_elem_a" href="#">Seguridad</a>
                </li>
                <li class="userinfo_datos_elem">
                  <a class="userinfo_datos_elem_a" href="#" v-on:click="logout">Salir</a>
                </li>
            </ul>
      </div>
    </div>
</template>

<style>

.container_1 {
  grid-area: col_1;
  width: calc((100vw - 100px)/11 * 2);
}

.userinfo-1 {
  padding: 10px 0;
    background: #4D4D4D;
    color: #E6E6E6;
    font-size: 18px;
    border-radius: 15px;
}

.userinfo-1 .userinfo_cont_img {
  border-radius: 100px;
  border: 1px solid #333;
  margin: 10px auto;
  width: 170px;
  height: 170px;
  background: no-repeat url(../../assets/profile.jpeg) center/cover;
  box-shadow: 3px 3px 6px -1px #333;
}

.userinfo-1 .nombre_us {
  margin: 5px auto;
  padding-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  color: #fbb829;
  border-bottom: 2px solid #AAACB2;
}

.userinfo-1 .userinfo_datos {
  list-style: none;
  padding: 0;
  display: block;
  margin: 10px 20px;
}

.userinfo-1 .userinfo_datos .userinfo_datos_elem {
  /** Empty **/
}

.userinfo-1 .userinfo_datos .userinfo_datos_elem:first-child {
  text-transform: uppercase;
  font-size: 16px;
  padding-left: 10px;
  font-weight: 800;
}

.userinfo-1 .userinfo_datos .userinfo_datos_elem .userinfo_datos_elem_a {
  display: block;
  color: #FFF;
  text-decoration: none;
  padding: 2px 8px;
  border-left: 2px solid #fbb829;
}

.userinfo-1 .userinfo_datos .userinfo_datos_elem .userinfo_datos_elem_a:hover {
  color: #fbb829;
  border-left-color: #fff;
}
</style>

<script>
import {database} from '../firebaseInit'
import firebase from 'firebase'
//import userDB from './userBD'
let userRef = database.ref('user/')

export default {
    name:'userInformation',

    data(){
        return {
      loggedUser:{
            fName:'' ,
            lName:'' ,
            nickname:'' ,
            date:'' ,
            phone:'' ,
            document:'' ,
            gender:'' ,
            addres:'' ,
            city:'' ,
            country:'' ,
            email:'' ,
            password:'' ,
            rol:'' ,
            profesion:'' ,
            description:'' ,
            rAlimenticias:'' ,
            cEspeciales:'' ,
            sCuantico:'' ,
            angel:'' ,
            estatus:'' ,
            imageUrl:'',
            contrato:'',
            image: null
      },
      registered:''
    }
  },
  methods:{
    logout: function(){
      console.log("prueba");
      firebase.auth().signOut().then(() =>{
        this.$router.go({path: this.$router.path});
      });
    }
    },
    created(){
    var este = this;
            console.log(' primero ');
        if(firebase.auth().currentUser){
            this.currentUser = firebase.auth().currentUser.email;

            userRef.orderByChild("email").equalTo(this.currentUser).on("child_added",gotData);
            console.log(' tercero ');
            function gotData (snapshot) {
                este.loggedUser = snapshot.val();
                console.log(' quinto ',este.loggedUser);
                }
        }
    }
}
</script>
