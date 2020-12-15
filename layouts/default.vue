<template>
  <div id="web">
    <MainHeader />
    <Nuxt />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: $font-primary
}

#web {
  color: $black;
}

.container {
  margin: 0 auto;
  max-width: 1000px;
  width: 85%;
}
</style>
