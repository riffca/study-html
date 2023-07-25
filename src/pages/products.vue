<template>
  <layout-header><CartStore /> </layout-header>
  <div class="products_page">
    <div class="products_page--logo">
      <img
        src="https://static.tildacdn.info/tild6431-3661-4430-b735-353863373435/11.svg"
        style="max-width: 150px; width: 150px"
        alt=""
      />
    </div>
    <div class="headline">
      Мы любим создавать особенные и уникальные вещи <br />для украшения вашей
      жизни и дома
    </div>
<SearchByCategory> </SearchByCategory>
    <products-list :products="productsWithIds" />

    <ProductItem :product="products" />

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
      <icons-IconTwitter />

      <icons-IconVk />

      <a
        href="/"
        target="_blank"
        rel="nofollow"
        style="width: 48px; height: 48px"
      >
        <icons-IconTelegram />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchByCategory from "@/components/searchByCategory.vue";
import type { Product } from "@/stores/product";
import {products} from "@/stores/product";


products.forEach((item, index) => {
  item.id = index;
});
const productsWithIds: Product[] = products;

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
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #f0f0f0;
  text-align: center;
  color: black;
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
  margin: 20px 0;

  &--logo {
    text-align: center;
    margin-top: 60px;
  }
}
</style>
