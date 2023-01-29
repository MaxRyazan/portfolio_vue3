<template>
    <div class="footer">
        <div class="footer_wrapper">
            <div class="footer_item one">
                <img src="../assets/svg/github.png" alt="" class="icon">
                <a href="https://github.com/MaxRyazan" target="_blank">github</a>
            </div>
            <div class="footer_item two">
                <img src="../assets/svg/discord.png" alt="" class="icon">
                <a href="https://discordapp.com/users/514719364059234324/" target="_blank">discord</a>
            </div>
            <div class="footer_item three">
                <img src="../assets/svg/email.png" alt="" class="icon">
                <a href="mailto:no4ta87@mail.ru">no4ta87@mail.ru</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppFooter"
}
</script>

<style scoped lang="scss">
.footer{
    position: relative;
}
.footer_wrapper {
  transform: translateY(-100px);
  display: flex;
  gap: 50px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
}
.footer_item{
  display: flex;
  transform: translateY(60px);
    & a {
      display: block;
      margin: 0 auto;
      text-decoration: none;
      font-size: 120%;
      color: blueviolet;
      letter-spacing: 0.6px;
      &:hover {
        color: rgba(blueviolet, 0.55);
      }
    }
    & img{
      margin-right: 5px;
      border-radius: 50%;
    }
}
</style>