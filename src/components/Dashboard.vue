<template>
  <div id="dashboard">
    <h3>Dashboard</h3>
    <form @submit="agregarUsuario">
      <p>muestrate</p>
      <formularioUser></formularioUser>
          <button type="submit">boton</button>
    </form>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
      
        <i class="fa fa-plus"></i>
      </router-link >
      
    </div>
  </div>
</template>

<script>
import {database} from './firebaseInit'
import formularioUser from './FormularioUser'
//import userDB from './userBD'
let userRef = database.ref('user/')

export default {
  name:'dashboard',
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
        imageUrl:'',
        contrato:''
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
      this.imageUrl='',
      this.contrato=''
      
    }
  },
  
  components:{
    formularioUser
  },

  created(){    
      console.log('antes de ');
    var usuariosRef = database.ref('user/');
    usuariosRef.once('value', function(snapshot) {
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
}


</script>
