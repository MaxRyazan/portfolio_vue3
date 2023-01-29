<template>
    <div class="container">
        <div class="nav">
            <h4>
                <router-link to="/" class="href">Главная </router-link>
                / Vue3 проекты:</h4>
            <button class="button" @click.stop="show('crm')">
                <img src="@/assets/images/vue.png" alt="" class="img">
                <span class="crm">CRM auto</span>
            </button>
            <button class="button" @click="show('e_shop')">
                <img src="@/assets/images/vue.png" alt="" class="img">
                <span class="e_shop">Online shop</span>
            </button>
        </div>
        <div v-if="crm">
            <div class="wrapper">
                <h3>CRM auto</h3>
            </div>
        </div>
        <div v-if="e_shop">
            <div class="wrapper">
                <h3>Online shop</h3>
            </div>
        </div>
    </div>
</template>

<script setup>

import {ref, watch} from "vue";

const crm = ref(false)
const e_shop = ref(false)

const show = (param) => {
    switch (param){
        case 'crm' : {
            crm.value = true
            e_shop.value = false
        }
            break;
        case 'e_shop' : {
            crm.value = false
            e_shop.value = true
        }
            break;
        case 'elex_job' : {
            crm.value = false
            e_shop.value = false
        }
    }
}
watch(crm, (newValue) => {
    if(newValue === true){
        document.querySelector('.crm').style.color = 'green'
    } else {
        document.querySelector('.crm').style.color = 'black'
    }
});
watch(e_shop, (newValue) => {
    if(newValue === true){
        document.querySelector('.e_shop').style.color = 'green'
    } else {
        document.querySelector('.e_shop').style.color = 'black'
    }
});
</script>

<style scoped>

</style>