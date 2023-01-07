<template>
    <div class="grid">
        <div class="item">
            <button-element :title="`Java/Spring`" @click="$router.push('/java-spring')"/>
        </div>
        <div class="item">
            <button-element :title="`Vue3 / Js`" />
        </div>
        <div class="item">
            <button-element :title="`Integrations`" />
        </div>
        <div class="item">
            <button-element :title="`Flex / Grid`" />
        </div>
        <div class="item">
            <button-element :title="`Blocks`" />
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
    @media (max-width: 565px) {
      .grid{
        grid-template-columns: 1fr;
        justify-items: start;
        margin: 0;
        grid-gap: 10px;
      }
    }
</style>
