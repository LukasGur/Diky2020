<template>
  <div class="banner">
    <div class="banner__wrapper">
      <h2 class="banner__text">
        <span class="text-orange">Sdílej i ty</span> svoje poděkování za rok 2020.
      </h2>
      <form-button to="/podekovat">
        Poděkovat
      </form-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background-color: $orange-light;
  border-radius: 8px;
  padding: 1.5rem 2.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background-image: url("/giving-gift.png");
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    transform: rotateY(180deg);
    height: 84px;
    width: 75px;
    bottom: 0;
    right: 4rem;
  }
}

.banner__wrapper {
  margin-right: 10rem;
  display: flex;
  justify-content: space-between;
}

.banner__text {
  font-family: $font-second;
  font-size: 2rem;

  > span {
    font-family: $font-second;
  }
}

.text-orange {
  color: $orange;
}
</style>
