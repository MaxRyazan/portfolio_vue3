<template>
    <div class="grid">
        <div class="item">
            <button-element :title="`Java / Spring`" />
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
.item{
  display: grid;
  justify-content: center;
}
.grid{
    display: grid;
    grid-template-columns: repeat(5, 100px);
    justify-content: space-around;
    align-items: center;
}

@media (max-width: 800px) {
    .grid{
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 5px;
        grid-template-rows: 1fr 1fr;
      & div:nth-child(5){
        transform: translate(50%);
      }
      & div:nth-child(4){
        transform: translate(50%);
      }
    }
}
</style>
