<template>
  <div class="right_content">
    <div>
      <div class="content">
        <br />
        <div class="vk_icon">
          <svg height="48" width="49">
            <path
              clip-rule="evenodd"
              d="M3.87 3.37C.5 6.75.5 12.17.5 23.04v1.92c0 10.86 0 16.3 3.37 19.67C7.25 48 12.67 48 23.54 48h1.92c10.86 0 16.3 0 19.67-3.37 3.37-3.38 3.37-8.8 3.37-19.67v-1.92c0-10.86 0-16.3-3.37-19.67C41.75 0 36.33 0 25.46 0h-1.92C12.68 0 7.24 0 3.87 3.37zm4.74 11.3c.25 12.48 6.82 20 17.65 20h.63v-7.15c3.95.4 6.89 3.35 8.09 7.15h5.69a15.8 15.8 0 0 0-8.03-10.03c2.48-1.49 6-5.09 6.83-9.97h-5.18c-1.08 3.97-4.31 7.57-7.4 7.91v-7.91h-5.26v13.85c-3.2-.8-7.37-4.68-7.54-13.85z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="VK_header">Вход ВКонтакте</div>
        <input type="text" class="VKid" placeholder="Телефон или почта" />
        <div class="entrance">
          <input type="checkbox" />
          Сохранить вход
        </div>
        <br />
        <button class="white">Войти</button>

        <p class="or">или</p>
        <button div class="QR">
          <span class="QR_Button"
            ><svg width="24" height="24" viewBox="0 0 24 24">
              <g width="1" fill="none" fill-rule="evenodd">
                <g id="qr_24__qr_24">
                  <path id="qr_24__Bounds" d="M0 0h24v24H0z"></path>
                  <path
                    d="M19.5 19H21c.28 0 .5.22.5.5V21a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-1.5c0-.28.22-.5.5-.5ZM14 19h1.5c.28 0 .5.22.5.5V21a.5.5 0 0 1-.5.5H14a.5.5 0 0 1-.5-.5v-1.5c0-.28.22-.5.5-.5Zm2.75-2.75h1.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-1.5c0-.28.22-.5.5-.5Zm2.75-2.75H21c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5V14c0-.28.22-.5.5-.5Zm-5.5 0h1.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H14a.5.5 0 0 1-.5-.5V14c0-.28.22-.5.5-.5ZM4.5 13h4a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 8.5 22h-4A2.5 2.5 0 0 1 2 19.5v-4A2.5 2.5 0 0 1 4.5 13Zm.25 1.75a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1h-3.5Zm1 1.5h1.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-1.5c0-.28.22-.5.5-.5ZM15.5 2h4A2.5 2.5 0 0 1 22 4.5v4a2.5 2.5 0 0 1-2.5 2.5h-4A2.5 2.5 0 0 1 13 8.5v-4A2.5 2.5 0 0 1 15.5 2Zm.25 1.75a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1h-3.5Zm1 1.5h1.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-1.5c0-.28.22-.5.5-.5ZM4.5 2h4A2.5 2.5 0 0 1 11 4.5v4A2.5 2.5 0 0 1 8.5 11h-4A2.5 2.5 0 0 1 2 8.5v-4A2.5 2.5 0 0 1 4.5 2Zm.25 1.75a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1h-3.5Zm1 1.5h1.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-1.5c0-.28.22-.5.5-.5Z"
                    id="qr_24__Mask"
                    fill="currentColor"
                  ></path>
                </g>
              </g></svg
          ></span>
          QR-код
        </button>
      </div>
    </div>
    <div class="registration">
      <button class="green">Зарегистрироваться</button>
      <div class="JoinForm">
        После регистрации вы получите доступ <br />
        ко всем возможностям VK ID <br />
        <a href="https://id.vk.com/promo" target="_blank"> Узнать больше </a>
      </div>
    </div>
  </div>
</template>

<style lnag="scss">
.bnav_a {
  padding: 2px 5px;
}
p,
h1,
body {
  font-weight: 500;
  text-align: center;
  font-family: Roboto, sans-serif;
}
.content,
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
.green,
.white,
.QR {
  height: 2rem;
  border: none;
  border-radius: 10px;
  display: flex;
  min-width: 250px;
  align-items: center;
  background: #272727;
  justify-content: center;
}
button:hover {
  background: #878f99;
  cursor: pointer;
}
.QR {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  flex-basis: length;
  gap: 30%;
  color: white;
}
.header {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.VKid {
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
.or {
  color: gray;
  font-size: 13px;
}
.VK_header {
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 20px;
  font-weight: 550;
}
.JoinForm {
  font-size: 12px;
  margin-top: 8px;
  color: gray;
}
.green {
  background: #52b652;
  margin-top: 15px;
  color: white;
}
.green:hover {
  background: #6cd97e;
}
.white {
  background: white;
  color: #141414;
}
.white:hover {
  background: #d7d8db;
}

.right_content {
  display: flex;

  flex-direction: column;
  gap: 1em;
  align-items: center;
  margin-top: 10%;
}
</style>
