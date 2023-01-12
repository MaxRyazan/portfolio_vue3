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
                <h3>Bank</h3>
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
import {ref, watch} from "vue";

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
.container{
    width: 100%;
    height: calc(100vh + 65px);
    position: relative;
}
.nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
  & h4{
    font-family: cursive;
  }
}
.button{
    width: 150px;
    height: 30px;
    position: relative;
    background-color: white;
    border-radius: 4px;
    font-family: cursive;
    &:hover{
      cursor: pointer;
      box-shadow: 0 0 4px black;
    }
    &:active{
      box-shadow: none;
    }
}
.img{
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
}
.wrapper{
  width: 90%;
  padding: 10px;
  margin: 0 auto;
  height: 100vh;
  box-shadow: 0 0 6px;
  border-radius: 6px;
}
.href{
  text-decoration: none;
  color: #648eff;
}
</style>