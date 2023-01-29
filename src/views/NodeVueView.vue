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
                    <div class="screenshots">
<!--Слайдер начало ------------------------------------------------------------------------->
                        <div class="slider__outer">
                            <div class="slider__inner" ref="slider">
            <!--Элемент-1 начало ----------------------------------------------------------->
                                <div class="slider__item">
                                    <div class="slide__image__container">
                                        <img src="../assets/images/structure.png" class="slider__image" alt="">
                                    </div>
                                    <div>
                                        <span>
                                            Модульный проект.
                                        </span>
                                        <ul>
                                            <li>
                                                backend - node.js
                                            </li>
                                            <li>
                                                frontend - vue3.js
                                            </li>
                                        </ul>
                                        <span>
                                            Присутствует файл docker-compose.yml с помощью которого можно запустить проект
                                            в режиме контейнеров. Тома для разработки отсутствуют, так как  проект завершен.
                                        </span>
                                    </div>
                                </div>
            <!--Элемент-1 конец ----------------------------------------------------------->
                                <div class="slider__item">
                                    <div class="slide__image__container">
                                        <img src="../assets/images/backend-prev.png" class="slider__image" alt="">
                                    </div>
                                    <div>
                                        <p>
                                            Логика проекта разбита на части, для лучшей читаемости кода, и простоты поддержки.
                                        </p>
                                    </div>
                                </div>
            <!--Элемент-2 конец ----------------------------------------------------------->
                                <div class="slider__item">
                                    <div class="slide__image__container">
                                        <img src="../assets/images/backend-controller.png" class="slider__image" alt="">
                                    </div>
                                    <div>
                                        <p>
                                            Экспортируемый класс, описывающий методы работы CRUD с базой данных.
                                            Логика работы программы не предполагает update - метода.
                                        </p>
                                        <p>
                                            Работает в связке с express router.
                                        </p>
                                    </div>
                                </div>
            <!--Элемент-3 конец ----------------------------------------------------------->
                                <div class="slider__item">
                                    <div class="slide__image__container">
                                        <img src="../assets/images/backend-router.png" class="slider__image" alt="">
                                    </div>
                                    <div>
                                        <p>
                                            Краткое и лаконичное описание роутинга бэкэнд сервиса)
                                        </p>
                                    </div>
                                </div>
            <!--Элемент-4 конец ----------------------------------------------------------->
                            </div>
                        </div>
<!--Слайдер конец ------------------------------------------------------------------------->
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
let count = 1

const show = (param) => {
    switch (param){
        case 'notebook' : {
            notebook.value = true
        }
            break;
    }
}


const slide = () => {
    let max_count = slider.value.children.length
    document.querySelector('.slider__inner').style.transform = `translate(-${slider.value.clientWidth * count}px)`
    count++
    if(count === max_count) {
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

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap');
</style>