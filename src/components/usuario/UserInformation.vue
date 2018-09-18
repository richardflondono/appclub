<template>
    <div class="userinfo-1"><!-- Primer col -->
 <!--<span>{{loggedUser.rol}}</span>-->

            <div class="userinfo_cont_img">
              <!-- Imagen de usuario -->
            </div>
            <p class="nombre_us">{{loggedUser.fName}} {{loggedUser.lName}}</p>

            <ul>
                <li style="margin: 0px"><strong>Status : {{loggedUser.rol}}</strong></li>
               <!-- <li style="margin: 0px"><strong></strong></li>-->
                <li>Estadisticas</li>
                <li>Socios</li>
                <li>Empresas</li>
                <li>Entrenadores</li>
                <li>Configuracion</li>
                <li>Seguridad</li>
                <li v-on:click="logout">Salir</li>
            </ul>

    </div>
</template>

<style>

.userinfo-1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    background: #4D4D4D;
    color: #E6E6E6;
    font-size: 18px;
}

.userinfo-1 .userinfo_cont_img {
  border-radius: 100px;
  border: 1px solid #333;
  margin: 10px auto 0 auto;
  width: 160px;
  height: 160px;
  background: no-repeat url(../../assets/profile.jpeg) center/cover;
}

.column-1 p {
    padding: 0 24px;
    margin: 10px auto;
    line-height: 16pt;
}

.nombre_us {
    text-transform: uppercase;
    color: #FBB829;
    font-weight: 700;
    font-size: 18px;
}

.column-1 p strong {
    font-weight: 700;
}

.column-1 ul {
    width: 70%;
    margin: 20px auto;
}

.column-1 ul li {
    margin: 3px auto;
}

.column-1 span {
    font: 40px 'Fjalla One', Arial, sans-serif;
    display: block;
    color: #1A1A1A;
    padding: 30px 0;
    text-transform: uppercase;
    text-align: center;
    background: #FBB829;
}

ul {
    padding: 0;
    list-style-type: none;
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
