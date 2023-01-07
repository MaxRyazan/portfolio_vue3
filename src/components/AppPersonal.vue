<template>
    <div class="grid">
        <div class="image_container">
            <img src="../assets/avatar.png" alt="" class="image">
        </div>
        <div class="description one">
            <p>Привет! Меня зовут Максим. По профессии я программист. Начинал учить бэкэнд - java,
            однако, быстро понял, что помимо сугубо логики, мне так же интересно отображение! Поэтому, освоил
            javascript. Но, жажда знаний толкает меня всегда вперед, и, меньше чем за год, я научился
            писать еще и на Vue js.</p>
            <p>Так же в моей копилке есть Spring. Умею делать полное рест-общение фронта и бэка. Активно
            использую JPA Query в своих работах. На хорошем уровне владею SQL, и могу ответить что такое 3NF
            для базы данных.</p>
        </div>
        <div class="description two">
            <p>Считаю, что программист не должен останавливаться, и посему, несмотря на сложности с поиском
            работы, продолжаю расширять свою географию знаний.</p>
            <p>В числе своих интересов, я, внезапно обнаружил вёрстку. Выстраивать контент в правильные блоки,
            менять структуру проекта в зависимости от разрешения экрана - это творчество!</p>
            <p>В будущем, если у меня появится шанс, я уверен, что стану грамотным фул-стек разработчиком.
            Есть знания, цель и упорство, нехватает только возможности.</p>
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
    border: 1px solid red;
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