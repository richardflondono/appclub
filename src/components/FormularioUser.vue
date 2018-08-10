<template>
    <form @submit.prevent="agregarUsuario">
        <div class="col-sm-12 tamaño">
                <div class="container" style="background-color: #ffffff">
            <div class="form-group">
                    <table class="table table-borderless menu1">
            <tbody>
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
            <tr>
                
                <td style="color: #FBB829">Nombre:</td>
                <td><input type="text" class="form-control form-control borde" v-model="newUser.fName" placeholder="Agregar"></td>
            </tr>
            <tr>

                <td style="color: #FBB829">Apellidos:</td>
                <td><input type="text" class="form-control form-control borde" v-model="newUser.lName" placeholder="Agregar"></td>
            </tr>
            <tr>
                <td style="color: #FBB829">Escarapela:</td>
                <td><input type="text" class="form-control form-control borde" v-model="newUser.nickname" placeholder="Agregar"></td>
            </tr>
            <tr>
                <td style="color: #FBB829">E-mail:</td>
                <td><input type="email"  class="form-control form-control borde" v-model="newUser.email" placeholder="Agregar"></td>
            </tr>
            <tr>
                <td style="color: #FBB829">Cédula:</td>
                <td><input type="text" class="form-control form-control borde" v-model="newUser.document" placeholder="Agregar"></td>
            </tr>
            <tr>
                <td style="color: #FBB829">País:</td>
                <td><div class="form-group">
                <select class="form-control borde" v-model="newUser.country" id="sel1">
                    <option>Elegir</option>
                    <option>Colombia</option>
                </select>
                </div></td>
            </tr>
            <tr>
                <td style="color: #FBB829">Ciudad:</td>
                <td><div class="form-group">
                <select class="form-control borde" v-model="newUser.city" id="sel1">
                    <option>Elegir</option>
                    <option>Cali</option>
                    <option>Bogota</option>
                </select>
                </div></td>
            </tr>
            <tr>
                <td style="color: #FBB829">Celular:</td>
                <td><input type="text" class="form-control form-control borde" v-model="newUser.phone" placeholder="Agregar"></td>
            </tr>

            <tr>
                <td style="color: #FBB829">Género:</td>
                <td>
                    <div class="form-group">
                        <select class="form-control borde" v-model="newUser.gender" id="sel1">
                        <option>Elegir</option>
                        <option>Masculino</option>
                        <option>Femenino</option>
                        </select>
                    </div>
                </td>
            </tr>

            <tr>
                <td style="color: #FBB829">Alimentación:</td>
                <td><input type="text" class="form-control form-control borde" v-model="newUser.rAlimenticias" placeholder="Agregar"></td>
            </tr>
            <tr>
                <td style="color: #FBB829">Cuidados:</td>
                <td><input type="text" class="form-control form-control borde" v-model="newUser.cEspeciales" placeholder="Agregar"></td>
            </tr>
            <tr>
                <td style="color: #FBB829">Ángel:</td>
                <td><input type="text" class="form-control form-control borde" v-model="newUser.angel" placeholder="Agregar"></td>
            </tr>
            
            <tr>
                <td style="color: #FBB829">Rol:</td>
                <td>
                    <div class="form-group">
                    <select class="form-control borde" v-model="newUser.rol" id="sel1">
                        <option>Elegir</option>
                        <option value="ADMIN">Administrador</option>
                        <option value="USER">Usuario</option>
                    </select>
                    </div>
                </td>
            </tr>

            </tbody>
        </table>
        <hr>
            
            <button type="submit" class="btn btn-warning btn-block">Registrar</button>
            </div>
        </div>
    </div>
</form>
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

