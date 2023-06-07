<template>
  <div class="left_content">
    <div>
      <h1>VK for mobile devices</h1>
      <p>
        Install our official mobile app and stay in touch with your friends
        anytime and anywhere.
      </p>
    </div>

    <div>
      <img
        src="https://sun9-52.userapi.com/09IqLEQ1F6S-NcynGI29HpxaA4eUPECZr9tybg/pYORDwKmdDI.png"
        alt=""
      />
    </div>
    <div class="app_shops">
      <button class="google_play">
        <icons-IconGooglePlay />
        Google play
      </button>
      <button class="ru_store">RuStore</button>
      <button class="app_store">App Store</button>
    </div>
    <div><a href="">All products</a></div>
  </div>
</template>

<style lang="scss" scoped>
p,
h1 {
  text-align: center;
}

.google_play,
.ru_store,
.app_store {
  height: 2rem;
  border: none;
  border-radius: 10px;
  width: 120px;
}
.app_shops {
  display: flex;
  align-items: center;
  gap: 20px;
}

svg {
  display: inline-block;
  transform: transalate(0, 5opx);
}
.left_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 10%;
}
</style>
