<template >


<div class="col-xl-12" style="padding: 20px 0 0 0">
    <div class="row">
    <!-- Primer Columna -->
    <div class="col-sm-2 tamaño">
        <div class="container" style="background-color: #FBB829">
            <h2>Administrador</h2>
        </div>
        <div class="container" style="background-color: #616266">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <ul>
                <li>{{principal}}</li>
                <li>Socios</li>
                <li>Empresas</li>
                <li>Entrenadores</li>
            </ul>
            <br>
            <br>
            <br>
            <br>
            <br>
            <ul>
                <li>Configuracion</li>
                <li>Seguridad</li>
            </ul>
            <br>
        </div>
    </div>
    <div class="col-sm-5 tamaño">
        <div class="container" style="background-color: #ffffff">
        <div class="row">
        <div class="col-sm-4">
            <div class="container" style="background-color: #000000">
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>

            </div>
        </div>
        <div class="col-sm-8">
            <h5 style="color: #FBB829">N0MBRE DEL EQUIPO</h5>
            <h6>Cali Colombia</h6>
            <h6>Elite #</h6>
             <p>Vision:</p>
             <p>Not supported in HTML5.
Specifies that a  element should render in one solid color (noshaded), instead of a shaded color</p>
<table class="table table-borderless">
    <tbody>
      <tr>
        <td style="color: #FBB829">Coordinador:</td>
        <td>July</td>
        <td>july@example.com</td>
      </tr>
      <tr>
         <td style="color: #FBB829">Capitan:</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>

        <td style="color: #FBB829">Estado:</td>
        <td>Dooley</td>
        <td>dooley@example.com</td>
      </tr>
    </tbody>
  </table>
        </div>
        </div>
        </div>
        <br>
         <div class="container" style="background-color: #ffffff">
            <h4 style="color: #FBB829">10 Miembros registrados</h4><hr>
            <table class="table table-borderless">
            <tbody>
            <tr>
            <td>
           <div class="row">
               <div class="col-sm-2">
                <div class="container" style="background-color: #000000; padding-right: 20px">
                </div>
               </div>
               <div class="col-sm-8">

                   <h6 style="color: #FBB829">Nombre del usuario</h6>
                   <p>Estado del registro</p>
                   <p  style="color: #808080">Cel: 3005069812</p>

               </div>
           </div>
        </td>
        <td>
            <div class="row">
               <div class="col-sm-2">
                <div class="container" style="background-color: #000000; padding-right: 20px">
                </div>
               </div>
               <div class="col-sm-8">

                   <h6 style="color: #FBB829">Nombre del usuario</h6>
                   <p>Estado del registro</p>
                   <p  style="color: #808080">Cel: 3005069812</p>

               </div>
           </div>
        </td>

      </tr>
      <tr>
         <td>
             <div class="row">
               <div class="col-sm-2">
                <div class="container" style="background-color: #000000; padding-right: 20px">
                </div>
               </div>
               <div class="col-sm-8">

                   <h6 style="color: #FBB829">Nombre del usuario</h6>
                   <p>Estado del registro</p>
                   <p  style="color: #808080">Cel: 3005069812</p>

               </div>
           </div>
         </td>
        <td>
            <div class="row" >
               <div class="col-sm-2">
                <div class="container" style="background-color: #000000; padding-right: 20px">
                </div>
               </div>
               <div class="col-sm-8">

                   <h6 style="color: #FBB829">Nombre del usuario</h6>
                   <p>Estado del registro</p>
                   <p  style="color: #808080">Cel: 3005069812</p>

               </div>
           </div>
        </td>

      </tr>

    </tbody>
  </table>
        </div>
    </div>
    <div class="col-sm-3 tamaño" id="inscripcion">
        <div class="container" id="label-formulario" style="background-color: #ffffff">
    
      <formularioUser></formularioUser>
        <button type="button" class="btn btn-warning btn-block">Registrar</button>
        </div>
    </div>
    <div class="col-sm-2 tamaño">
        <div class="container" style="background-color: #808080">

            <h4>Novedades</h4>

        </div>

            <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action list-group-item-dark">First item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Second item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Third item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Third item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Third item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Third item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Third item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Third item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Third item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Third item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Third item</a>
            </div>

    </div>
    </div>

</div>

</template>

<style>
body {
    background-color: #AAACB2;
}

li{
    color: #ffffff;
}
table[class~="menu1"] td{
        padding : 0.2rem;
}
div[class~="tamaño"]{
    padding:6px;
}
input[class~="borde"]{
    border: none;
}
select[class~="borde"]{
    border: none;
}
a{
    color: #666666;
}
#inscripcion{
    overflow-y: scroll;
    height: 850px;
}
#label-formulario{
    padding: 50px 0px;
}
</style>

<script>
import formularioUser from'./FormularioUser'
import firebase from 'firebase';
import {database} from './firebaseInit'
let userRef = database.ref('user/')

export default {
    name:'admin-home',
    data (){
        return {
            currentUser:false,
            principal:'',
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
                contrato:''
            } 
        }
    },
    methods:{
        escucharFormularioUser (){
        console.log('mensaje de formularioUser recibido')
        }
    },
    components:{
        formularioUser
    },
    created(){
  

    var este = this;
    if(firebase.auth().currentUser){
    console.log(' priemro');
        this.currentUser = firebase.auth().currentUser.email;
    console.log(' segundo ');
        userRef.orderByChild("email").equalTo(this.currentUser).on("child_added",gotData);
    console.log(' tercero ');
        function gotData (snapshot) {
    console.log(' cuarto ',snapshot.val().fName);
            este.loggedUser = snapshot.val();
    console.log(' quinto ',este.loggedUser);
        }


    }
}
}
/*
//TRAE UN ARREGLO CON TODOS LOS USUARIOS
  created(){
      console.log('antes de ');
   // var usuariosRef = database.ref('user/');
    userRef.once('value', function(snapshot) {
     // console.log(snapshot.val());

      snapshot.forEach( function ( childSnapshot ) {
        const data ={
          'fName': childSnapshot.val().fName,
          'lName': childSnapshot.val().lName,
          'telefono': childSnapshot.val().telefono,
          'cedula': childSnapshot.val().cedula
        }
        console.log(childSnapshot.val());
      //  this.users.push(data)
     // console.log(this.users[0]);
      })
    });
   // console.log(starCountRef)
  }
}*/



</script>
