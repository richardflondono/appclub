<template>

<div id="wrapper-user">
    <!-- Única fila -->

    
    <userInformation></userInformation><!-- Primer col -->

    <div class="column-2-user"><!-- Segunda col -->
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#menu1"><!--Cap-->Mi Viaje<!--/Cap--></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#menu2">Equipo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#menu3">Cronograma</a>  
                </li>
            </ul>
            <div class="tab-content">
                <div id="menu1" class="container tab-pane active"><br>
                    <h3>COACHING DIGITAL</h3>
                    <ul>
                        <li> <p>Hábitos para el éxito</p>
                        </li>
                        <li> <p>Consejos</p>
                        </li>
                        <li> <p>Organizacion</p>
                        </li>
                        <li> <p>Recordatorios de entrenamiento</p>
                        </li>
                    </ul>
            
                </div>
                <div id="menu2" class="container tab-pane">
                    
                    <h3>Equipo</h3>
                    <p>Pronto podras ver toda la informacion de tu equipo </p>
                </div>
                <div id="menu3" class="container tab-pane"><br>
                
                    <h3>Cronograma</h3>
                    <p>Pronto podras ver tu cronograma de actividades</p>
                </div>
            
            </div>
        </div><!-- Segunda col -->

        <div class="column-3-user"><!-- Tercera col -->
            <div class="container block" style="background-color: #1A1A1A;">
                <h4 style="color:#fff; padding: 10px 0;">Metas y compromisos</h4>    
            </div>
        </div><!-- Tercera col -->

        <div class="column-4-user"><!-- Cuarta col -->

            <h4>Relaciones</h4>

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
                <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Third item</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Third item</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Third item</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Third item</a>
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
    grid-template-rows: 1fr;
    grid-template-columns: repeat(11, 1fr);
    grid-gap: 20px;
    padding: 20px 0 0 0;
}

.column-2-user {
    grid-column-start: 3;
    grid-column-end: 7;
    grid-row-start: 1;
    background: #FFF;
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

.column-3-user {
    grid-column-start: 7;
    grid-column-end: 10;
    grid-row-start: 1;
    background: #FFF;
}
.column-3-user > table > tbody > tr > td > h6 {
    color: #FBB829;
    text-transform: uppercase;
    font-size: 20px;
    margin-top: 5px;
}
.column-3-user > table > tbody > tr > td > a {
    color: #777;
}

.column-4-user {
    grid-column-start: 10;
    grid-column-end: 12;
    grid-row-start: 1;
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