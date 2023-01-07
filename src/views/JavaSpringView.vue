<template>
    <div class="telek">
        <img src="../assets/telek.png" alt="">
        <div class="video">
            <app-skills />
        </div>
    </div>
</template>

<script>
import AppSkills from "@/components/AppSkills";
export default {
    components: {AppSkills}
}
</script>

<style scoped>
.video{
    display: grid;
    align-items: center;
    position: absolute;
    width: 64.3%;
    height: 66.8%;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-65%, -58.3%);
    border-radius: 12px;
    object-fit: fill;

}

.telek{
    position: relative;
    width: 100%;
    height: 98.4vh;
    margin: 0 auto;
}
img{
    width: 100%;
    height: 100%;
    position: relative;
}
</style>