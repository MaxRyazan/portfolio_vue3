<template>
    <div class="__grid">
        <app-header class="__header"/>
        <app-navigation  class="__navigation"/>
        <app-personal  class="__personal"/>
        <app-skills  class="__skills"/>
        <app-footer  class="__footer"/>
    </div>
</template>

<script setup>
import AppNavigation from "@/components/AppNavigation";
import AppHeader from "@/components/AppHeader";
import AppPersonal from "@/components/AppPersonal";
import AppSkills from "@/components/AppSkills";
import AppFooter from "@/components/AppFooter";
</script>

<style scoped>

</style>