<template>
  <div class="header">
    <icons-IconLogo />
    <input type="text" placeholder="Поиск по сайту" />
  </div>
  <slot> </slot>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 50px;
  right: 50px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
