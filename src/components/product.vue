<template>
  <div class="body">


    <div :class="'product'+(index+1)" v-for="product, index in products"> 
      <img :src="product.img" imgfield="img" style="max-width: 150px; width: 150px;" alt=""> 
      <p>{{ product.name }}</p> 
    </div>

  

    <div class="logo">
   <img src="https://static.tildacdn.info/tild6431-3661-4430-b735-353863373435/11.svg" imgfield="img" style="max-width: 150px; width: 150px;" alt=""> 
  </div>
<div class="headline">Мы любим создавать особенные и уникальные вещи  <br/>для украшения вашей жизни и дома </div>
<div class= "content">
  <div class="product1"> 
 <img src="https://img.freepik.com/free-psd/white-soft-pillow_176382-1113.jpg?w=740&t=st=1681475029~exp=1681475629~hmac=ebf93ad34ab40976c0b135555496335203a0600d85da46ca22c8ed03dc057590" imgfield="img" style="max-width: 150px; width: 150px;" alt=""> 
<p>Подушка "Trema" 799 р.</p> </div>
   <div class="product2"> 
 <img src="https://img.freepik.com/premium-photo/ipad-case_744526-100.jpg?w=740" imgfield="img" style="max-width: 150px; width: 150px;" alt="">  
<p> Обложка для планшета "Carnet" 3999 p.</p> </div>
  <div class="product3"> 
 <img src="https://img.freepik.com/free-photo/elegant-watch-with-a-silver-and-golden-chain-isolated_181624-27080.jpg?w=740&t=st=1681479403~exp=1681480003~hmac=7970dc4897b0c50baa0cea1a01f8a9e74609fc7ec7baf8f1a021b8844651d825" imgfield="img" style="max-width: 150px; width: 150px;" alt="">  
<p>Часы "Kruka" 2799 р. </p> </div>
  <div class="product4"> 
 <img src="https://www.christies.com/img/LotImages/2011/CKS/2011_CKS_08009_0028_000(a_carved_marble_bust_of_the_apollo_belvedere_after_the_antique_italian).jpg" imgfield="img" style="max-width: 150px; width: 150px;" alt=""> 
  <p> Глиняный бюст 4999 p.</p></div>
   <div class="product5"> 
 <img src="https://img.freepik.com/free-photo/classic-alarm-clock_74190-5699.jpg?w=1060&t=st=1681480032~exp=1681480632~hmac=d15787415580562630eb0598979fb8b8342ae0dcddc21116f2154781f4201ed3" imgfield="img" style="max-width: 150px; width: 150px;" alt="">  
<p>Будильник "Alise" 1899 p.</p> </div>
  <div class="product6"> 
 <img src="https://img.freepik.com/premium-photo/pillows-on-white-background_93675-132548.jpg?w=1060" imgfield="img" style="max-width: 150px; width: 150px;" alt=""> 
   <p> Подушка "Rabbi" 799 p.</p> </div>
  <div class="product7"> 
 <img src="https://img.freepik.com/premium-photo/vintage-silver-teapot-on-an-isolated-white_322433-1463.jpg?w=1060" imgfield="img" style="max-width: 150px; width: 150px;" alt="">  
 <p>Кофейный чайник "Stuka" 1799 p.</p> </div>
  <div class="product8"> 
 <img src="https://img.freepik.com/free-vector/retro-camera-isolated_529539-148.jpg?w=740&t=st=1681481937~exp=1681482537~hmac=5964c1012c669ddf22be511490944f89dcb1cdcd6d7e04a2df38d3b1e2f2b9a3" imgfield="img" style="max-width: 150px; width: 150px;" alt="">  
  <p>Камера "Leica" 3999 p.</p></div>
    <div class="product9"> 
 <img src="https://cdn1.ozone.ru/multimedia/1027236017.jpg" imgfield="img" style="max-width: 150px; width: 150px;" alt="">  
<p> Бюст серебристый 4999 p.</p></div>
  
</div> <!-- end content--->

<div class="delivery">
  ИНФОРМАЦИЯ О ДОСТАВКЕ
  <div class="delivery_info">Мы находимся в Москве. Вы можете самостоятельно забрать покупку из точки самовывоза или заказать доставку курьером по Москве и Московской области. Также доступна доставка почтой по всей России. </div>
  </div>
<div class="contacts_opportunities">
  <div class="contacts">
    <a href="tel:+1 123 456 78 90" style="">+1 123 456 78 90</a> <br> shetuka@store.com 
  </div>
  <div class="contacts_info">
    По любым вопросам и для заказа свяжитесь с нами по телефону, почте и в соцсетях. </div>
    </div>

 

  <div class="media"> 
 
    <svg class="twitter" width="48px" height="48px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm19.091-63.636c2.046-.227 4.09-.682 5.909-1.591-1.364 2.045-2.954 3.863-5.228 5v1.364c0 13.636-10.227 29.09-29.09 29.09-5.909 0-11.137-1.59-15.682-4.545.909.227 1.59.227 2.5.227 4.773 0 9.318-1.59 12.727-4.318-4.545 0-8.181-2.955-9.545-7.046.455.227 1.137.227 1.818.227.907 0 1.814-.226 2.72-.453l.008-.002c-4.772-.909-8.182-5-8.182-10v-.227a8.196 8.196 0 0 0 4.546 1.364c-2.727-1.819-4.546-4.773-4.546-8.41 0-2.045.455-3.636 1.364-5.226 5.227 6.136 12.727 10.227 21.136 10.682-.227-.682-.227-1.364-.227-2.273A10.184 10.184 0 0 1 59.546 30c2.954 0 5.681 1.136 7.5 3.181 2.5-.454 4.545-1.362 6.59-2.5-.909 2.501-2.5 4.319-4.545 5.683Z" fill="#000000"></path></svg>
    
   <svg class="t-sociallinks__svg" width="48px" height="48px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z" fill="#000000"></path></svg>
    
    <a href="/" target="_blank" rel="nofollow" style="width: 48px; height: 48px;"><svg class="telegram" width="48px" height="48px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z" fill="#000000"></path></svg></a>
    
   </div>
</div>
</template>

<script setup lang="ts">

type Product =  {
  img: string
  price: number
  name: string
}

type Products = Product[]


const products: Products = [
  {
    img: 'https://static.tildacdn.info/tild6431-3661-4430-b735-353863373435/11.svg',
    price: 30,
    name: 'Red nose'
  },
  {
    img: 'https://static.tildacdn.info/tild6431-3661-4430-b735-353863373435/11.svg',
    price: 30,
    name: 'Red nose'
  },
  {
    img: 'https://static.tildacdn.info/tild6431-3661-4430-b735-353863373435/11.svg',
    price: 30,
    name: 'Red nose'
  }
]

</script>

<style lnag="scss">
.logo{
  text-align:center;
  margin-top:30px;
}
.headline {
   display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
  margin: 50px 0 50px 0;
  font-size:28px;
  opacity:1;
}
.content{
 display:flex;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-evenly;
  text-align:center;
  align-items: baseline;
  padding: 40px calc((100% - (350px * 2)) / 2);
  
}
.delivery {
  padding-top:100px;
  padding-bottom:100px;
  background-color:#f0f0f0;
  text-align:center;
}
.delivery_info{
  margin-top: 50px;
  font-size:28px;
    width: 26em;
margin-left: auto;
margin-right: auto;
}
.contacts_opportunities{
   padding-top:100px;
  padding-bottom:100px;
  text-align:center;
}
.contacts{
  font-size:18px;
}
.contacts_info{
  width: 23em;
  margin: 30px auto 0 auto;
}
.media{
  margin-bottom:40px;
  text-align: center;
}
.body{
  display: flex;
  flex-direction: column;
}

</style>