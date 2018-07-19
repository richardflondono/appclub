<template>

        <div class="col-sm-3 tamaño">
                <div class="container" style="background-color: #ffffff">
            <div class="form-group">
                    <table class="table table-borderless menu1">
            <tbody>
            <tr>
                <td style="color: #FBB829">Foto de Perfil:</td>
                <td> <input type="file" class="form-control-file" placeholder="Subir"></td>
            </tr>
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
                <td><input type="text" class="form-control form-control borde" v-model="newUser.email" placeholder="Agregar"></td>
            </tr>
            <tr>
                <td style="color: #FBB829">Cédula:</td>
                <td><input type="text" class="form-control form-control borde" v-model="newUser.document" placeholder="Agregar"></td>
            </tr>
            <tr>
                <td style="color: #FBB829">Dirección:</td>
                <td><input type="text" class="form-control form-control borde" v-model="newUser.addres" placeholder="Agregar"></td>
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
            </tbody>
        </table>
        <p>Lorem ipsum dolor sit amet, co nsectetuer adipiscing elit, minim veniam</p>
        <table class="table table-borderless menu1">
            <tbody>
            <tr>
                <td style="color: #FBB829">Ángel:</td>
                <td><input type="text" class="form-control form-control borde" v-model="newUser.angel" placeholder="Agregar"></td>
            </tr>
            <tr>
                <td style="color: #FBB829">Salto Cuántico:</td>
                <td><input type="text" class="form-control form-control borde" v-model="newUser.sCuantico" placeholder="Agregar"></td>
            </tr>
            <tr>
                <td style="color: #FBB829">profesión:</td>
                <td><input type="text" class="form-control form-control borde" v-model="newUser.sCuantico" placeholder="Agregar"></td>
            </tr>
            <tr>
                <td style="color: #FBB829">rol:</td>
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
        <h6 style="color: #FBB829">Estado de Registro</h6>
        <input type="text" class="form-control form-control borde" v-model="newUser.estatus" placeholder="Agregar"><hr>
        <h6 style="color: #FBB829">Contrato:</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at massa eros. Nullam a vulputate dolor. Quisque a metus ut quam eleifend aliquet non non urna.</p>
                <button type="button" class="btn btn-warning btn-block">Registrar</button>
              </div>
                </div>
            </div>
</template>


<script>

export default {
     name:'formularioUser',

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
            imageUrl:''
      }
    }
  },
  methods:{


  }
}
</script>
