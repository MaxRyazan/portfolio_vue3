<template>
    <div class="grid">
        <div class="item">
            <button-element :title="`Java+Spring`" @click="$router.push('/java-spring')"/>
        </div>
        <div class="item">
            <button-element :title="`Spring + Vue3`" @click="$router.push('/vue3')"/>
        </div>
        <div class="item">
            <button-element :title="`Node+Vue3`" @click="$router.push('/node-vue')"/>
        </div>
        <div class="item">
            <button-element :title="`Вёрстка`" @click="$router.push('/verstka')"/>
        </div>
        <div class="item">
            <button-element :title="`Blocks`" @click="$router.push('/blocks')"/>
        </div>
    </div>
</template>

<script setup>
import ButtonElement from '@/components/elements/ButtonElement'
</script>

<style scoped lang="scss">
    .grid{
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      margin: 20px;
      justify-items: center;
    }
    @media (max-width: 605px) {
      .grid{
        grid-template-columns: 1fr;
        justify-items: start;
        margin: 0;
        grid-gap: 10px;
      }
    }
</style>
