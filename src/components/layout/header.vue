<template>
  <div class="header">
    <icons-IconLogoBlue/>
    <input type="text" class="header_vk_id" placeholder="Поиск" />
  </div>
</template>
<style lnag="scss" scoped>
.header {
  position: fixed;
  left: 50px;
  right: 50px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
.header_vk_id{
  height: 2rem;
  border: none;
  border-radius: 10px;
  display: flex;
  min-width: 250px;
  align-items: center;
  background: #272727;
  padding-left: 20px;
}
</style>
