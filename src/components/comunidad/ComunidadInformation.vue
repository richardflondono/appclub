<template>
    <div class="column-1"><!-- Primer col -->
 <!--<span>{{loggedUser.rol}}</span>-->

        <div>
            <img src="../../assets/profile.jpeg">

            <p class="nombre_us">{{loggedUser.fName}} {{loggedUser.lName}}</p>
            
            
            <ul>
                <li><strong>Status: {{loggedUser.rol}}</strong></li>
                <li>Estadisticas</li>
                <li>Socios</li>
                <li>Empresas</li>
                <li>Entrenadores</li>
                <li>Configuracion</li>
                <li>Seguridad</li>
            </ul>
        </div>
    <div>
        <div class="content">
            <h4 class="center" style="color: #000;">¡Ahora somos más!</h4>
            
            <p style="font-size: 20px; " class="center">865</p>
            
            <h4 class="center" style="color:#000;">Usuarios</h4>

            <p class="center" style="color: #808080">La tercer sociedad más grande de la actualidad, junto a Mazones e Iluminatus.
                
            </p>
            <h4 class="center" style="color: #FBB829;">¡Vamos por el mundo!</h4>
        </div>

    </div>

</div>    
</template>

<style>

.column-1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    background: #4D4D4D;
    color: #E6E6E6;
    font-size: 18px;
}



.column-1 img {
    margin: 10px auto;
    width: 100%;
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

.column-1 div {
    display: block;
    margin: 12px;
    padding: 10px;
    border: 1px solid #808080;
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
    name:'ComunidadInformation',
    
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
      
    },
    created(){
    var este = this;
        if(firebase.auth().currentUser){
            this.currentUser = firebase.auth().currentUser.email;

            userRef.orderByChild("email").equalTo(this.currentUser).on("child_added",gotData);
            function gotData (snapshot) {
                este.loggedUser = snapshot.val();
                }
        }
    }
}
</script>