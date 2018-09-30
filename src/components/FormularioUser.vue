<template>

  <div class="col-sm-12">
    <form @submit.prevent="agregarUsuario">

            <!--tr>
                <td style="color: #FBB829">Foto de Perfil:</td>
                <td>
                    <button raised class="btn" @click="onPickFile"> Cargar Imagen </button>
                    <input
                    type="file"
                    class="form-control-file"
                    style="display: none"
                    ref="fileInput"
                    accept="image/*"
                    @change="onFilePicked"></td>
            </tr-->
            <div>
                <span>Nombre:</span>
                <input type="text" class="form-control form-control borde" v-model="newUser.fName" placeholder="Nombre">
            </div>

            <div>
                <span>Apellidos:</span>
                <input type="text" class="form-control form-control borde" v-model="newUser.lName" placeholder="Apellidos">
            </div>

            <div>
                <span>Escarapela:</span>
                <input type="text" class="form-control form-control borde" v-model="newUser.nickname" placeholder="Escarapela">
            </div>

            <div>
                <span>E-mail:</span>
                <input type="email"  class="form-control form-control borde" v-model="newUser.email" placeholder="E-mail">
            </div>

            <div>
                <span>Cédula:</span>
                <input type="text" class="form-control form-control borde" v-model="newUser.document" placeholder="Cédula">
            </div>

            <div>
                <span>País:</span>
                <select class="form-control borde" v-model="newUser.country" id="sel1">
                    <option selected>Colombia</option>
                    <option>Puerto Rico</option>
                    <option>El Salvador</option>
                    <option>Honduras</option>
                </select>
            </div>

            <div>
                <span>Ciudad:</span>
                <select class="form-control borde" v-model="newUser.city" id="sel1">
                    <option selected>Cali</option>
                    <option>Bogota</option>
                    <option>Medellín</option>
                </select>
            </div>

            <div>
                <span>Celular:</span>
                <input type="text" class="form-control form-control borde" v-model="newUser.phone" placeholder="Celular">
            </div>

            <div>
                <span>Género:</span>
                <select class="form-control borde" v-model="newUser.gender" id="sel1">
                  <option selected>Masculino</option>
                  <option>Femenino</option>
                </select>
            </div>

            <div>
                <span>Alimentación:</span>
                <input type="text" class="form-control form-control borde" v-model="newUser.rAlimenticias" placeholder="Alimentación">
            </div>

            <div>
                <span>Cuidados:</span>
                <input type="text" class="form-control form-control borde" v-model="newUser.cEspeciales" placeholder="Cuidados">
            </div>

            <div>
                <span>Ángel:</span>
                <input type="text" class="form-control form-control borde" v-model="newUser.angel" placeholder="Ángel">
            </div>

            <div>
                <span>Rol:</span>
                <select class="form-control borde" v-model="newUser.rol" id="sel1">
                  <option value="USER" selected>Usuario</option>
                  <option value="ADMIN">Administrador</option>
                </select>
            </div>

        <hr>

            <button type="submit" class="btn btn-warning btn-block">Registrar</button>

        </form>
    </div>

</template>


<script>
import {database} from './firebaseInit'
//import userDB from './userBD'
let userRef = database.ref('user/')
import firebase from 'firebase'

export default {
    name:'formularioUser',
    firebase:{
        usuarios: userRef
    },
    data(){
        return {
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
                contrato:'',
                image: null
            },
    }
  },
  methods:{
    agregarUsuario() {
      console.log(this.newUser);
      console.log(this.newUser.email);
      console.log(this.newUser.password);
      this.newUser.password = this.newUser.document;
        firebase.auth().createUserWithEmailAndPassword(this.newUser.email, this.newUser.password)
        .then(user => {
            alert('usuario creado correctamente')

      console.log(this.newUser);
      userRef.push(this.newUser);
      this.newUser.fName='' ,
      this.newUser.lName='' ,
      this.newUser.nickname='' ,
      this.newUser.date='' ,
      this.newUser.phone='' ,
      this.newUser.document='' ,
      this.newUser.gender='' ,
      this.newUser.addres='' ,
      this.newUser.city='' ,
      this.newUser.country='' ,
      this.newUser.email='' ,
      this.newUser.password='' ,
      this.newUser.rol='' ,
      this.newUser.profesion='' ,
      this.newUser.description='' ,
      this.newUser.rAlimenticias='' ,
      this.newUser.cEspeciales='' ,
      this.newUser.sCuantico='' ,
      this.newUser.angel='' ,
      this.newUser.estatus='' ,
      this.newUser.imageUrl='',
      this.newUser.contrato=''
      })
    },
    emitirEventoFormularioUser(){
        this.$emit('formularioUser:change')
    },
    createUser(){
        if(!this.formIsValid){

        }
    },
    onPickFile(){
        this.$refs.fileInput.click()
    },
    onFilePicked(event){
        const files = event.target.files
        let filename = files[0].name;
        if (filename.lastIndexOf('.') <= 0){
            return alert('Please add a valid file')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
            this.imageUrl = fileReader.result
            console.log(this.imageUrl)
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
    }
  }
}
</script>

<style>
.btn {
    background: #FBB829;
    font-size: 16px;
    font-weight: 600;
    color: #1A1A1A
}
</style>
