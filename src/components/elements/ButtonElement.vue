<template>
    <button>{{ title }}</button>
</template>

<script setup>
import {defineProps} from 'vue'
defineProps({
    title: {
        type: String,
        required:true
    },
})
</script>

<style scoped lang="scss">
button {
  font-family: cursive;
    height: 30px;
    width: 150px;
    background-color: white;
    border: 1px solid blueviolet;
    border-radius: 10px;
    text-shadow: 1px 1px 2px gray;
  animation: button_animation 3s linear infinite;
  &:hover{
    color: darkgreen;
    font-size: 85%;
  }
}
    .nav_button{

    }
    .x_button{

    }
    .link_button{

    }
@keyframes button_animation {
  0% {
    background-color: rgba(blueviolet,0.1);
  }
  20% {
    background-color: rgba(blueviolet,0.2);
  }
  40% {
    background-color: rgba(blueviolet,0.3);
  }
  60% {
    background-color: rgba(blueviolet,0.5);
  }
  80% {
    background-color: rgba(blueviolet,0.25);
  }
  100% {
    background-color: rgba(blueviolet,0.1);
  }
}
</style>