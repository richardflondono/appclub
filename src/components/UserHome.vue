<template>

<div id="wrapper-user">
    <!-- Única fila -->

    <userInformation></userInformation><!-- Primer col -->

    <div class="container_2"><!-- Segunda col -->
      <div class="column-2-user">

            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#menu1">Mi Viaje</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#menu3">Cronograma</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#menu2">Equipo</a>
                </li>
            </ul>

            <div class="tab-content">

                <div id="menu1" class="container tab-pane active">
                    <h5 class="column_2_titulo">COACHING DIGITAL</h5>
                    <ul class="column_2_content">
                        <li class="column_2_elem">Hábitos para el éxito</li>
                        <li class="column_2_elem">Consejos</li>
                        <li class="column_2_elem">Organizacion</li>
                        <li class="column_2_elem">Recordatorios de entrenamiento</li>
                    </ul>
                </div>

                <div id="menu2" class="container tab-pane">
                    <h3>Equipo</h3>
                    <p>Pronto podras ver toda la informacion de tu equipo </p>
                </div>

                <div id="menu3" class="container tab-pane">
                    <h3>Cronograma</h3>
                    <p>Pronto podras ver tu cronograma de actividades</p>
                </div>

            </div>

        </div>
      </div><!-- .\Segunda col -->

      <div class="container_3"><!-- Tercera col -->
        <h6 class="column_3_titulo">Metas y compromisos</h6>
        <div class="column-3-user">
          <h6 class="column_3_subtitulo">Proximamente:</h6>
          <p class="column_3_p">Recordatorios de <span class="column_3_em">Metas,<br> compromisos, tareas.</span></p>
        </div>
      </div><!-- .\Tercera col -->

      <div class="container_4"><!-- Cuarta col -->

            <h5 class="column_4_titulo">Relaciones</h5>


            <div class="column_4_links">
                <span class="column_4_txt">Frecuente</span>
                <a href="#" class="column_4_anchor">
                  <div class="column_4_anchor_user"><!--- Img Usuario --></div>
                  Tom Herman
                  <div class="column_4_anchor_st"><!--- Est Usuario --></div>
                </a>

                <a href="#" class="column_4_anchor">
                  <div class="column_4_anchor_user"><!--- Img Usuario --></div>
                  Mike Herman
                  <div class="column_4_anchor_st"><!--- Est Usuario --></div>
                </a>

                <a href="#" class="column_4_anchor">
                  <div class="column_4_anchor_user"><!--- Img Usuario --></div>
                  Ali Cruise
                  <div class="column_4_anchor_st"><!--- Est Usuario --></div>
                </a>
                <hr class="column_4_separador">

                <span class="column_4_txt">Reciente</span>
                <a href="#" class="column_4_anchor">
                  <div class="column_4_anchor_user"><!--- Img Usuario --></div>
                  Tom Herman
                  <div class="column_4_anchor_st"><!--- Est Usuario --></div>
                </a>

                <a href="#" class="column_4_anchor">
                  <div class="column_4_anchor_user"><!--- Img Usuario --></div>
                  Mike Herman
                  <div class="column_4_anchor_st"><!--- Est Usuario --></div>
                </a>

                <a href="#" class="column_4_anchor">
                  <div class="column_4_anchor_user"><!--- Img Usuario --></div>
                  Ali Cruise
                  <div class="column_4_anchor_st"><!--- Est Usuario --></div>
                </a>
                <hr class="column_4_separador">

                <span class="column_4_txt">Promoción Elite</span>
                <a href="#" class="column_4_anchor">
                  <div class="column_4_anchor_user"><!--- Img Usuario --></div>
                  Tom Herman
                  <div class="column_4_anchor_st"><!--- Est Usuario --></div>
                </a>

                <a href="#" class="column_4_anchor">
                  <div class="column_4_anchor_user"><!--- Img Usuario --></div>
                  Mike Herman
                  <div class="column_4_anchor_st"><!--- Est Usuario --></div>
                </a>

                <a href="#" class="column_4_anchor">
                  <div class="column_4_anchor_user"><!--- Img Usuario --></div>
                  Ali Cruise
                  <div class="column_4_anchor_st"><!--- Est Usuario --></div>
                </a>
            </div>

    </div><!-- Cuarta col -->

    <!-- Única fila -->
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Fjalla+One|Source+Sans+Pro');

body {
    font-family: 'Source Sans Pro', Arial, sans-serif;
    background: #AAACB2;
}

#wrapper-user {
    display: grid;
    grid-template-areas: "col_1 col_2 col_3 col_4";
    grid-gap: 20px;
    padding: 20px 20px 0 20px;
}

.container_2 {
  grid-area: col_2;
  width: calc((100vw - 100px)/11 * 4);
}

.column-2-user {
  border-radius: 15px;
    background: #FFF;
}

.column-2-user .column_2_titulo {
  text-transform: uppercase;
  text-align: center;
  color: #b3b3b3;
  margin: 20px auto 4px auto;
}

.column-2-user .column_2_content {
  text-transform: uppercase;
  color: #ccc;
  list-style: circle !important;
  padding: 0 0 0 20px;
  display: block;
  margin: 0 20px;
}

.column-2-user .nav {
  margin: 0 auto;
  padding-left: 30px;
}

.column-2-user .nav .nav-link {
  text-transform: uppercase;
}

#grid-II-user {
    display: grid;
    grid-template-columns: 2;
    grid-template-rows: auto;
    grid-gap: 8px;
    padding: 0 8px 8px 8px;
    height: 680px;
    overflow-y: scroll;
}

#grid-II-user > div {
    padding: 14px;
    border: 1px solid #797B7F;
}

#grid-II-user > div:hover {
    background: #AAACB2;
}

#grid-II-user > :nth-of-type(2n + 1) {
    grid-column: 1;
    grid-row: auto;
}

#grid-II-user > :nth-of-type(2n) {
    grid-column: 2;
    grid-row: auto;
}

#grid-II-user > div img {
    border: 1px solid #797B7F;
    width: 50%;
    margin-right: 10px;
    float: left;
}

#grid-II-user > div h6 {
    color: #FBB829;
    text-transform: uppercase;
    font-size: 20px;
    margin-top: 5px;
}

#grid-II-user > div p {
    color: #777;
}

.container_3 {
  grid-area: col_3;
  width: calc((100vw - 100px)/11 * 3);
}

.column-3-user {
    background: #FFF;
    border-radius: 0 0 15px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    color: #333;
}

.column_3_titulo {
  text-transform: uppercase;
  background: #000;
  margin: 0;
  padding: 14px;
  border-radius: 15px 15px 0 0;
  color: #FFF;
}

.column-3-user .column_3_subtitulo {
  margin: 60px 0 0 0;
}

.column-3-user .column_3_p {
  text-align: center;
  margin: 5px auto 60px auto;
}

.column-3-user .column_3_p .column_3_em {
  text-transform: uppercase;
  font-weight: 600;
}

.container_4 {
  grid-area: col_4;
  width: calc((100vw - 100px)/11 * 2);
}

.column_4_titulo {
  background: #e6e6e6;
  border-radius: 15px 15px 0 0;
  margin: 0;
  padding: 8px 0;
  border-radius: 15px 15px 0 0;
  color: #1a1a1a;
  font-weight: 600;
  text-align: center;
}

.column_4_links {
  background: #FFF;
  border-radius: 0 0 15px 15px;
  padding-bottom: 10px;
}

.column_4_links .column_4_anchor {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 8px 26px;
  color: #333;
}

.column_4_links .column_4_anchor:hover {
  text-decoration: none;
  color: #1a1a1a;
  background: #e6e6e6;
}

.column_4_links .column_4_anchor .column_4_anchor_user {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: no-repeat url(../assets/user_ic.png) center/cover;
  margin: 0;
}

.column_4_links .column_4_anchor .column_4_anchor_st {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #FF0000;
  margin: 0;
}

.column_4_links .column_4_txt {
  display: block;
  margin: 0 auto;
  padding: 10px 26px;
  font-weight: 600;
}

.column_4_links .column_4_separador {
  margin: 0 16px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #ccc;
}

#sub-menu1{
    padding: 0px;
}

#sub-menu2{
    padding: 0px;
}

</style>
<script>

import userInformation from'./usuario/UserInformation'

export default {
    name:'user-home',

  components:{
    userInformation
  }

}
</script>
