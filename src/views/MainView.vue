<template>
    <div class="__grid">
        <div class="__header">
            <app-header/>
        </div>
        <div class="__navigation">
            <app-navigation/>
        </div>
        <div class="__personal">
            <app-personal/>
        </div>
        <div class="__skills">
            <app-skills/>
        </div>
        <div class="__footer">
            <app-footer/>
        </div>
    </div>
</template>

<script setup>
import AppNavigation from "@/components/AppNavigation";
import AppHeader from "@/components/AppHeader";
import AppPersonal from "@/components/AppPersonal";
import AppSkills from "@/components/AppSkills";
import AppFooter from "@/components/AppFooter";
</script>

<style scoped lang="scss">
    .__grid{
      grid-gap: 20px;
      grid-template-areas:
      "head head head"
      "nav nav nav"
      "pers skill skill"
      "foot foot foot";
      grid-template-rows: 17% 80px 1fr 10%;
      grid-template-columns: 1.3fr 1fr;
    }
@media (max-width: 1000px) {
  .__grid{
    grid-template-rows: 12% 80px 1.5fr 10%;
  }
  .__header{
    margin-top: 0;
  }
}
@media (max-width: 605px) {
  .__grid {
    grid-template-areas:
      "nav head head"
      ". . ."
      "pers pers pers"
      "skill skill skill"
      "foot foot foot";
      grid-template-rows: 7% 0 1fr 1.9fr auto;
  }
  .__header{
    transform: translate(-40%, 20%);
  }
}
    @media (max-width: 400px) {
      .__header{
        display: none;
      }
      .__navigation{
        grid-column: 1/3;
        margin: 0 auto;
      }
    }
</style>