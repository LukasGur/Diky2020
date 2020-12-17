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
  max-width: 1055px;
  width: 85%;
  padding-bottom: 5rem;
}

.icon {
  position: relative;
  top: 3px;
  left: -3px;
  width: 1.3em;
  height: 1.3em;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
