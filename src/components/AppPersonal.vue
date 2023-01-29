<template>
    <div class="grid">
        <div class="image_container">
            <img src="../assets/avatar.png" alt="" class="image">
        </div>
        <div class="description one">
            <p>
                Привет! Меня зовут Максим. По профессии я программист. Умею писать фронтэнд на Vue3.js (и, конечно,
                на ванильном js). Однако, вполне способен создать UI используя Spring MVC.
            </p>
            <p>
                А бэкэнд могу написать, используя Java или Node.js. Умею делать полное рест-общение фронта и бэка. Активно
                использую JPA Query в своих работах. На хорошем уровне владею SQL и могу ответить что такое 3NF
                для базы данных.
            </p>
            <p>
                Хорошо умею верстать сайты. В своих работах предпочитаю flexbox, однако, часто пользуюсь grid, когда необходимо
                манипулировать контейнерами с информацией. Способен запилить адаптив для страниц.
                Поверхностно знаком с веб-дизайном.
            </p>
        </div>
        <div class="description two">
            <p>
                Способен в одиночку написать полноценное микросервисное приложение, подключить его к базе данных (или нескольким),
                докеризовать и протестировать работу на уровне unit тестов.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppPersonal"
}
</script>
<style scoped lang="scss">
.grid{
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 20px;
}
.two{
    grid-column: 1 / 3;
}
.image{
    width: 100%;
    border-radius: 20px;
}
.image_container{
    display: grid;
    align-items: start;
}
.description{
    font-family: cursive;
    padding: 0 20px;
    text-align: center;
    &.two{
      padding: 0;
     }
}
@media (max-width: 1170px) {
  .image_container{
    align-items: center;
  }
}
@media (max-width: 1000px) {
  .grid{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .one{
    grid-row: 2 / -1;
  }
  .two{
    grid-row: 3 / -1;
    transform: translateY(-15%);
  }
  .image_container{
    width: 250px;
    margin: 0 auto;
  }
}
@media (max-width: 815px) {
  .two{
    transform: translateY(0);
  }
  .grid{
    grid-template-rows: 333px 1fr;
  }
}


@media (min-width: 1800px){
  .two{
    grid-column: 2 / 3;
    transform: translateY(-100%);
  }
}
@media (min-width: 2250px){
  .two{
    grid-column: 2 / 3;
    transform: translateY(-150%);
  }
  .one{
    transform: translateY(10%);
  }
}
@media (min-width: 2500px){
  .two{
    grid-column: 2 / 3;
    transform: translateY(-150%);
  }
  .one{
    transform: translateY(10%);
  }
}
</style>