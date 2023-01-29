<template>
    <div class="grid">
        <div class="element" @click.stop="$router.push('/java-vue')">
            <span>Java</span>  Collections, Stream API, Exceptions, Testing(jUnit, Mockito), JSON
        </div>
        <div class="element">
            <span>Database</span> MySql, Postgres, H2  <p>3 NF, many-to-one, many-to-many, one-to-many, one-to-one</p>
        </div>
        <div class="element" @click="$router.push('/java-spring')">
            <span>Spring</span> Boot, Data, Security, MVC, REST, Exceptions, Hibernate, Redis, Swagger, Liquibase
        </div>
        <div class="element">
            <span>Html5 /Css / Scss</span> FlexBox, Grid, adaptive, animations, media / mixins, extends, variables
        </div>
        <div class="element">
            <span>JavaScript / Node.js</span> Arrays, Async/await, fetch
        </div>
        <div class="element">
            <span>Sql</span> select, join, order by, insert, update, delete
        </div>
        <div class="element" @click="$router.push('/vue3')">
            <span>Vue3</span> Composition / Option API, Actions, Getters, Watchers, Mutations
        </div>
        <div class="element">
            <span>Rest Api</span> Spring boot + Vue3/ Node.js + Vue3.
            <p>Full Rest API integration (backend + frontend)</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.grid{
    display: grid;
    grid-template-rows: repeat(4, minmax(40px, 150px));
    grid-template-columns: repeat(2, minmax(150px, 1fr));
    grid-gap: 2%
}
span{
    font-weight: bold;
    color: blueviolet;
}
.element{
    cursor: pointer;
    display: grid;
    font-family: cursive;
    font-size: 95%;
    box-shadow:
            inset 0 -3em 3em rgba(blueviolet,0.1),
            0 0  0 2px rgb(255,255,255),
            0.3em 0.3em 1em rgba(0,0,0,0.3);
    text-align: center;
    align-items: center;
    &:hover{
      box-shadow:
              inset 0 -3em 3em rgba(blueviolet,0.2),
              0 0  0 2px rgb(255,255,255),
              0.3em 0.3em 1em rgba(0,0,0,0.1);
    }
}
@media (max-width: 1000px){
  .grid{
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 150px);
    grid-auto-rows: 150px;
  }
}
</style>