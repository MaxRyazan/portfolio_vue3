<template>
    <div class="container">
        <div class="nav">
            <h4>
                <router-link to="/" class="href">Главная </router-link>
                / Java-spring проекты:</h4>
            <button class="button" @click.stop="show('showBank')">
                <img src="@/assets/images/cup_of_java.png" alt="" class="img">
                <span class="showBank">BankOfRyazan</span>
            </button>
            <button class="button" @click="show('showTerminal')">
                <img src="@/assets/images/cup_of_java.png" alt="" class="img">
                <span class="showTerminal">BankTerminal</span>
            </button>
            <button id="showCRM" class="button" @click="show('showCRM')">
                <img src="@/assets/images/cup_of_java.png" alt="" class="img">
                <span class="showCRM">Bank CRM</span>
            </button>
            <button id="rest" class="button" @click="show('rest')">
                <img src="@/assets/images/cup_of_java.png" alt="" class="img">
                <span class="rest">RestApi</span>
            </button>
        </div>
        <div v-if="showBank">
            <div class="wrapper">
                <div class="desc">
                    <p>
                        Мой первый крупный проект. Написан на Spring MVC, java 11. За отображение
                        отвечает чистый html, с примесью bootstrap5 и всё это сдобрено изрядной порцией шаблонизатора thymeleaf.
                    </p>
                    <p>
                        За авторизацию отвечает spring security, в своём базовом виде - вход по паролю и номеру телефона.
                    </p>
                    <p>
                        Тестирование работы методов производилось с помощью jUnit5 и Mockito.
                    </p>
                    <ul>
                        <li>
                            В проекте присутствует полная имитация работы банка - можно пополнять счет (через
                            доп. программу-терминал), делать переводы, брать кредиты и платить по ним.
                        </li>
                        <li>
                            Так же можно покупать валюту - доллары и евро. Доступны вклады и инвестиции в драг. металлы.
                            Актуальные курсы валют и стоимость металлов приходят с бесплатных API. Динамика изменения
                            цен сохраняется в базе данных, поэтому есть возможность следить за волатильностью.
                        </li>
                        <li>
                            В одном из последних обновлений на данный момент, я прикрутил возможность оформлять в банке
                            ОСАГО. Мок-данные по рейтингу аварийности я беру с другого своего API.
                        </li>
                        <li>
                            Так же есть настройки - в настроящее время из нескольких пунктов - подтверждение перевода, если
                            сумма выше какого то порога и смена пароля с отправкой проверочного кода на почту.
                        </li>
                    </ul>
                        <p>
                            Может быть фронт проекта будет переписан на Vue.js, но на данный момент конкретных планов - нет.
                        </p>
                </div>
                <div class="screenshots">
                    <button class="btn_left"> &lt;= </button>
                    <button class="btn_right"> =&gt; </button>
                    <div class="wrapper_for_screen">
                        <div class="screen">
                            <img src="@/assets/images/client.png" alt="11" class="screen_img">
                        </div>
                        <div class="screen_text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aut beatae, culpa dolore doloremque enim error est, e
                                xercitationem explicabo hic iusto nobis numquam obcaecati q
                                uam quas soluta ullam veniam veritatis voluptatem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showTerminal">
            <div class="wrapper">
                <h3>Terminal</h3>
            </div>
        </div>
        <div v-if="showCRM">
            <div class="wrapper">
                <h3>CRM</h3>
            </div>
        </div>
        <div v-if="rest">
            <div class="wrapper">
                <h3>REST API</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";

const showBank = ref(false)
const showTerminal = ref(false)
const showCRM = ref(false)
const rest = ref(false)

const show = (param) => {
    switch (param){
        case 'showBank' : {
            showBank.value = true
            showTerminal.value = false
            showCRM.value = false
            rest.value = false
        }
        break;
            case 'showTerminal' : {
            showBank.value = false
            showTerminal.value = true
            showCRM.value = false
            rest.value = false
        }
        break;
            case 'showCRM' : {
            showBank.value = false
            showTerminal.value = false
            showCRM.value = true
            rest.value = false
        }
        break;
            case 'rest' : {
            showBank.value = false
            showTerminal.value = false
            showCRM.value = false
            rest.value = true
        }

    }
}

watch(showBank, (newValue) => {
    if(newValue === true){
        document.querySelector('.showBank').style.color = 'green'
    } else {
        document.querySelector('.showBank').style.color = 'black'
    }
});
watch(showTerminal, (newValue) => {
    if(newValue === true){
        document.querySelector('.showTerminal').style.color = 'green'
    } else {
        document.querySelector('.showTerminal').style.color = 'black'
    }
});
watch(showCRM, (newValue) => {
    if(newValue === true){
        document.querySelector('.showCRM').style.color = 'green'
    } else {
        document.querySelector('.showCRM').style.color = 'black'
    }
});
watch(rest, (newValue) => {
    if(newValue === true){
        document.querySelector('.rest').style.color = 'green'
    } else {
        document.querySelector('.rest').style.color = 'black'
    }
});

</script>

<style scoped lang="scss">

</style>