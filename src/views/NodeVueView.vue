<template>
    <div>
        <div class="container">
            <div class="nav">
                <h4>
                    <router-link to="/" class="href">Главная </router-link>
                    / Vue3 проекты:
                </h4>
                <button class="button" @click.stop="show('notebook')">
                    <img src="@/assets/images/vue.png" alt="" class="img">
                    <span class="notebook">Notebook</span>
                </button>
            </div>
            <div v-if="notebook">
                <div class="wrapper">
                    <div class="desc">
                        <p>
                            CRUD приложение, использующее Docker-image MySQL.
                        </p>
                        <p>
                            В качестве UI БД используется Docker image Adminer.
                        </p>
                        <p>
                            Проект можно полностью развернуть с помощью docker-compose.yml файла.
                            Настроен маппинг портов. Полностью настроено взаимодействие всех компонентов.
                            Есть возможность подключить тома для непрерывной разработки.
                        </p>
                        <p>
                            Приложение состоит из:
                        </p>
                        <ul>
                            <li>backend части ( node.js )</li>
                            <li>frontend части ( vue3.js )</li>
                            <li>MySQL image</li>
                            <li>Adminer image</li>
                        </ul>
                    </div>
                    <div class="screenshots test" ref="slider">
                        {{ slider.clientWidth }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, watch} from "vue";

const notebook = ref(false)
let slider = ref('')

const show = (param) => {
    switch (param){
        case 'notebook' : {
            notebook.value = true
        }
            break;
    }
}



watch(notebook, (newValue) => {
    if(newValue === true){
        document.querySelector('.notebook').style.color = 'green'
    } else {
        document.querySelector('.notebook').style.color = 'black'
    }
});
</script>

<style scoped>
.test{
    border: 1px solid red;
}
</style>