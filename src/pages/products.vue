

<template>
  <div class="products_page">
    <div class="products_page--logo">
      <img
        src="https://static.tildacdn.info/tild6431-3661-4430-b735-353863373435/11.svg"
        imgfield="img"
        style="max-width: 150px; width: 150px"
        alt=""
   />
    </div>
    <div class="headline">
      Мы любим создавать особенные и уникальные вещи <br />для украшения вашей
      жизни и дома
    </div>

    <products-list :products="products"/>
    
    

    <div class="delivery">
      ИНФОРМАЦИЯ О ДОСТАВКЕ
      <div class="delivery_info">
        Мы находимся в Москве. Вы можете самостоятельно забрать покупку из точки
        самовывоза или заказать доставку курьером по Москве и Московской
        области. Также доступна доставка почтой по всей России.
      </div>
    </div>
    <div class="contacts_opportunities">
      <div class="contacts">
        <a href="tel:+1 123 456 78 90" style="">+1 123 456 78 90</a> <br />
        shetuka@store.com
      </div>
      <div class="contacts_info">
        По любым вопросам и для заказа свяжитесь с нами по телефону, почте и в
        соцсетях.
      </div>
    </div>

    <div class="media">
      <icons-IconTwitter/>

      <icons-IconVk/>

      <a
        href="/"
        target="_blank"
        rel="nofollow"
        style="width: 48px; height: 48px">
       <icons-IconTelegram/>
      </a>
    </div>
  </div>
</template>

<script setup lang ="ts">
import type { Product } from '@/stores/product';
const products: Product[] =[
  {
    img: "https://img.freepik.com/free-psd/white-soft-pillow_176382-1113.jpg?w=740&t=st=1681475029~exp=1681475629~hmac=ebf93ad34ab40976c0b135555496335203a0600d85da46ca22c8ed03dc057590",
    price: 799,
    name: "Pillow",
  },
  {
    img: "https://img.freepik.com/premium-photo/ipad-case_744526-100.jpg?w=740",
    price: 3999,
    name: "Case",
  },
  {
    img: "https://img.freepik.com/free-photo/elegant-watch-with-a-silver-and-golden-chain-isolated_181624-27080.jpg?w=740&t=st=1681479403~exp=1681480003~hmac=7970dc4897b0c50baa0cea1a01f8a9e74609fc7ec7baf8f1a021b8844651d825",
    price: 2799,
    name: "Watch",
  },
  {
    img: "https://www.christies.com/img/LotImages/2011/CKS/2011_CKS_08009_0028_000(a_carved_marble_bust_of_the_apollo_belvedere_after_the_antique_italian).jpg",
    price: 4999,
    name: "Clay bust",
  },
  {
    img: "https://img.freepik.com/free-photo/classic-alarm-clock_74190-5699.jpg?w=1060&t=st=1681480032~exp=1681480632~hmac=d15787415580562630eb0598979fb8b8342ae0dcddc21116f2154781f4201ed3",
    price: 1899,
    name: "Alarm clock",
  },
  {
    img: "https://img.freepik.com/premium-photo/pillows-on-white-background_93675-132548.jpg?w=1060",
    price: 899,
    name: "Pillow",
  },
  {
    img: "https://img.freepik.com/premium-photo/vintage-silver-teapot-on-an-isolated-white_322433-1463.jpg?w=1060",
    price: 1799,
    name: "Coffee kettle",
  },
  {
    img: "https://img.freepik.com/free-vector/retro-camera-isolated_529539-148.jpg?w=740&t=st=1681481937~exp=1681482537~hmac=5964c1012c669ddf22be511490944f89dcb1cdcd6d7e04a2df38d3b1e2f2b9a3",
    price: 3999,
    name: "Camera",
  },
  {
    img: "https://cdn1.ozone.ru/multimedia/1027236017.jpg",
    price: 4999,
    name: "Silver bust",
  },
];

</script>

<style lang="scss" scoped>

.headline {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 50px 0 50px 0;
  font-size: 28px;
  opacity: 1;
}
.content {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-evenly;
  text-align: center;
  align-items: baseline;
  padding: 40px calc((100% - (350px * 2)) / 2);
}
.delivery {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #f0f0f0;
  text-align: center;
}
.delivery_info {
  margin-top: 50px;
  font-size: 28px;
  width: 26em;
  margin-left: auto;
  margin-right: auto;
}
.contacts_opportunities {
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
}
.contacts {
  font-size: 18px;
}
.contacts_info {
  width: 23em;
  margin: 30px auto 0 auto;
}
.media {
  margin-bottom: 40px;
  text-align: center;
}
.products_page {
  display: flex;
  flex-direction: column;

  &--logo {
    text-align: center;
  margin-top: 30px;
  }
}
  

</style>
