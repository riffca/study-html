<template>
  <div class="right_content">
      <div class="right_content_body">
        <div class="right_content_icon">
         <icons-IconLogoGrey/>
        </div>
        <div class="vk_header">Вход ВКонтакте</div>
        <input type="text" class="right_content_id" placeholder="Телефон или почта" />
        <div class="entrance">
          <input type="checkbox" />
          Сохранить вход
        </div>
        <br />
        <button class="enter_button">Войти</button>

        <div class="right_content_or">или</div>
        <button div class="right_content_qr">
          <icons-IconQR/>
          QR-код
        </button>
      </div>
    <div class="registration">
      <button class="register_button">Зарегистрироваться</button>
      <div class="join_form">
        После регистрации вы получите доступ <br />
        ко всем возможностям VK ID <br />
        <a href="https://id.vk.com/promo" target="_blank"> Узнать больше </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.right_content_body,
.registration {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333333;
  padding-bottom: 1.5em;
  padding-top: 0.5em;
  margin-top: 1em;
  width: 300px;
  border-radius: 10px;
  
}
.register_button,
.enter_button,
.right_content_qr {
  height: 2rem;
  border: none;
  border-radius: 10px;
  display: flex;
  min-width: 250px;
  align-items: center;
  background: #272727;
  justify-content: center;
}

.right_content_qr {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  flex-basis: length;
  gap: 30%;
  color: white;
}

.right_content_id {
  border: 0;
  -webkit-box-sizing: border-box;
  width: 250px;
  border-radius: 8px;
  height: 32px;
  margin: 0;
  padding-left: 15px;
}
.entrance {
  color: gray;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 250px;
  padding-top: 10px;
  gap: 5px;
  font-size: 13px;
}
.right_content_or {
  color: gray;
  font-size: 13px;
  padding: 10px 0 10px 0;
}
.vk_header {
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 20px;
  font-weight: 550;
}
.join_form {
  font-size: 12px;
  margin-top: 8px;
  color: gray;
}

.register_button {
  background: #52b652;
  margin-top: 15px;
  color: white;
  &:hover {
   background: #6cd97e;
  }
}
.enter_button {
  background: white;
  color: #141414;
  &:hover {background: #d7d8db;
  }
}
.registration {
  text-align: center;
}
.right_content {
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  margin-top: 10%;

  &_icon {
    padding-top: 15px;
  }
}
</style>
