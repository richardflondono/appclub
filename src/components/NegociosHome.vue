<template>

<div id="wrapper-negocios">
    <!-- Única fila -->


    <userInformation></userInformation><!-- Primer col -->

    <div class="column-2-negocios"><!-- Segunda col -->
            <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#menu1">Comercio</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu2">Cronograma</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu3">Empresas</a>
            </li>
             <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu4">Starters</a>
            </li>
             <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu5">Negocios</a>
            </li>
             <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu6">Beneficios</a>
            </li>
             <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu7">Mapa</a>
            </li>
            </ul>

            <!-- Contenido Tab Noticias -->
            <div class="tab-content">
            <div id="menu1" class="container tab-pane active">

                        <div id="grid-II-negocios">
                        <div>
                            <div class="card text-center">
                            <div class="card-header">
                                Nombre del Restaurante
                            </div>
                            <div class="card-body">
                                <img src="../assets/team.jpg">
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                            </div>
                            <div class="card-footer text-muted">
                                2 days ago
                            </div>
                            </div>
                        </div>

                        <div>
                            <div class="card text-center">
                            <div class="card-header">
                                Nombre del Spa
                            </div>
                            <div class="card-body">
                                <img src="../assets/team.jpg">
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                            </div>
                            <div class="card-footer text-muted">
                                2 days ago
                            </div>
                            </div>

                        </div>



                        </div>

                </div>

            <!-- Contenido Tab Eventos -->
            <div id="menu2" class="container tab-pane">
                <h3>Cronograma</h3>
                <p>Pronto podras ver tu cronograma</p>
            </div>

            <!-- Contenido Tab Socios -->
            <div id="menu3" class="container tab-pane">
                <h3>Empresas</h3>
                <p>Pronto podras ver la infomación de tus empresas</p>
            </div>

            <!-- Contenido Tab Beneficios -->
            <div id="menu4" class="container tab-pane">
                <h3>Starters</h3>
                <p>Pronto tendras mas infomación acerca de los Starters</p>
            </div>

            <!--Contenido Tab Mapa -->
            <div id="menu5" class="container tab-pane">
                <h3>Negocios</h3>
                <p>Pronto tendras mas infomación acerca de los Negocios</p>
            </div>

            <!--Contenido Tab Mapa -->
            <div id="menu6" class="container tab-pane">
                <h3>Beneficios</h3>
                <p>Pronto tendras mas infomación acerca de tus Beneficios</p>

             </div>

            <!--Contenido Tab Mapa -->
            <div id="menu7" class="container tab-pane">
                <h3>Mapa</h3>
                <p>Pronto podras ver el mapa de tu ciudad </p>
            </div>



            </div>
        </div><!-- Segunda col -->

    <div class="column-3-negocios"><!-- Tercera col -->
                            <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
                            <div class="card-header">Nombre del servicio</div>
                            <div class="card-body">
                                <h5 class="card-title">$4'750.000</h5>

                                <p class="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            </div>

                             <div class="card text-center">
                            <div class="card-header">
                                Noticias del Club
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            <div class="card-footer text-muted">
                                2 days ago
                            </div>
                            </div>


    </div><!-- Tercera col -->



    <!-- Única fila -->
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Fjalla+One|Source+Sans+Pro');

body {
    font-family: 'Source Sans Pro', Arial, sans-serif;
    background: #AAACB2;
}

#wrapper-negocios {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(11, 1fr);
    grid-gap: 20px;
    padding: 20px 0;
}


.column-2-negocios {
    grid-column-start: 3;
    grid-column-end: 9;
    grid-row-start: 1;
    background: #FFF;
}

#grid-II-negocios {
    display: grid;
    grid-template-columns: 2;
    grid-template-rows: auto;
    grid-gap: 8px;
    padding: 0 8px 8px 8px;
    height: 680px;
    overflow-y: scroll;
}

#grid-II-negocios > div {
    padding: 14px;
    border: 1px solid #797B7F;
}

#grid-II-negocios > div:hover {
    background: #AAACB2;
}

#grid-II-negocios > :nth-of-type(4n + 1) {
    grid-column: 1;
    grid-row: auto;
}

#grid-II-negocios > :nth-of-type(4n) {
    grid-column: 4;
    grid-row: auto;
}

#grid-II-negocios > div img {
    border: 1px solid #797B7F;
    width: 50%;
    margin-right: 10px;
    float: left;
}

#grid-II-negocios > div h6 {
    color: #FBB829;
    text-transform: uppercase;
    font-size: 20px;
    margin-top: 5px;
}

#grid-II-negocios > div p {
    color: #777;
}

.column-3-negocios {
    grid-column-start: 9;
    grid-column-end: 12;
    grid-row-start: 1;
    background: #FFF;
}
.column-3-negocios > table > tbody > tr > td > h6 {
    color: #FBB829;
    text-transform: uppercase;
    font-size: 20px;
    margin-top: 5px;
}
.column-3-negocios > table > tbody > tr > td > a {
    color: #777;
}


.col-sm {
    border: 1px solid #1A1A1A;
}
</style>
<script>
import {database} from './firebaseInit'
import formularioUser from './FormularioUser'
import userInformation from'./usuario/UserInformation'
//import userDB from './userBD'
let userRef = database.ref('user/')




export default {
  name:'negocios-home',
  firebase:{
    usuarios: userRef
  },
  data(){
    return {
      users: [],
      newUser:{
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
        imageUrl:''
      }
    }
  },
  methods:{
    agregarUsuario() {
      //console.log(this.newUser);
      userRef.push(this.newUser);
      this.fName='' ,
      this.lName='' ,
      this.nickname='' ,
      this.date='' ,
      this.phone='' ,
      this.document='' ,
      this.gender='' ,
      this.addres='' ,
      this.city='' ,
      this.country='' ,
      this.email='' ,
      this.password='' ,
      this.rol='' ,
      this.profesion='' ,
      this.description='' ,
      this.rAlimenticias='' ,
      this.cEspeciales='' ,
      this.sCuantico='' ,
      this.angel='' ,
      this.estatus='' ,
      this.imageUrl=''

    }
  },

  components:{
    formularioUser,
    userInformation
  },

  created(){
      console.log('antes de ');
    var starCountRef = database.ref('user/');
    starCountRef.once('value', function(snapshot) {
     // console.log(snapshot.val());

      snapshot.forEach( function ( childSnapshot ) {
        const data ={
          'fName': childSnapshot.val().fName,
          'lName': childSnapshot.val().lName,
          'telefono': childSnapshot.val().telefono,
          'cedula': childSnapshot.val().cedula
        }
        //console.log(childSnapshot.val());
      //  this.users.push(data)
     // console.log(this.users[0]);
      })
    });
   // console.log(starCountRef)
  }
}


</script>
