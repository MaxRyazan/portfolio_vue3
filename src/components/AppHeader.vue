<template>
    <div class="telek">
        <img src="../assets/telek.png" alt="">
        <video class="video" autoplay muted preload="metadata" loop src="../assets/matrix.mp4"></video>
    </div>
</template>

<script>
</script>

<style scoped>
.video{
    position: absolute;
    width: 125px;
    height: 94px;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-66%, -61.5%);
    border-radius: 12px;
    object-fit: fill;
}

.telek{
    position: relative;
    width: 200px;
    height: 150px;
    overflow: hidden;
    margin: 0 auto;
}
img{
    width: 100%;
    position: relative;
}
</style>