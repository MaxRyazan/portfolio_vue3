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
                    <div class="screenshots test">
                        <div class="slider__outer">
                            <div class="slider__inner" ref="slider">
                                <img src="../assets/images/cup_of_java.png" class="slider__image" alt="">
                                <img src="../assets/images/vue.png" class="slider__image" alt="">
                                <img src="../assets/images/client.png" class="slider__image" alt="">
                                <img src="../assets/images/cup_of_java.png" class="slider__image" alt="">
                            </div>
                        </div>
                        <button @click="slide">вперед</button>
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
let count = 0

const show = (param) => {
    switch (param){
        case 'notebook' : {
            notebook.value = true
        }
            break;
    }
}


const slide = () => {
    count++
    let max_count = slider.value.children.length
    document.querySelector('.slider__inner').style.transform = `translate(-${slider.value.clientWidth * count}px)`
    if(count === max_count - 1) {
        count = 0
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
.slider__outer{
    max-width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
}
.__slider_image_container{
    width: 100%;
    height: 300px;
    border: 1px solid green;
    position: absolute;
    top: 0;
    left: 0;

}
.slider__inner{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 300px;
    border: 1px solid red;
}
.slider__image{
    border: 1px solid black;
    min-width: 100%;
}
</style>