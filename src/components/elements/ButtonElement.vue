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
    height: 30px;
    width: 100px;
    background-color: white;
    border: 1px solid black;
  &:hover{
    color: blueviolet;
    font-size: 92%;
    border-radius: 8px;
  }
}
    .nav_button{

    }
    .x_button{

    }
    .link_button{

    }
@media (max-width: 350px) {
  button{
    width: 95px;
  }
}
</style>