<template>
  <div class="banner">
    <div class="banner__wrapper">
      <h2 class="banner__text">
        <span class="text-orange">Sdílej i ty</span> svoje poděkování za rok 2020.
      </h2>
      <form-button to="/podekovat">
        Poděkovat
      </form-button>
      <img class="banner__image" src="~/assets/images/objeti.svg" alt="objetí">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background-color: $orange-light;
  border-radius: 8px;
  padding: 1.5rem 3rem;
  position: relative;

  @media (max-width: 800px) {
    padding: 1.5rem 1.8rem;
  }
}

.banner__wrapper {
  margin-right: 10.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include xl {
    margin-right: 8rem;
  }

  @media (max-width: 1100px) {
    margin-right: 6rem;
  }

  @media (max-width: 1050px) {
    margin-right: 5rem;
  }

  @media (max-width: 999px) {
    margin-right: 0;
  }

  @media (max-width: 580px) {
    flex-direction: column;
  }
}

.banner__text {
  font-family: $font-second;
  font-size: 2rem;

  @media (max-width: 920px) {
    max-width: 350px;
  }

  @media (max-width: 670px) {
    font-size: 1.5rem;
    max-width: 250px;
  }

  @media (max-width: 580px) {
    margin-bottom: 1rem;
    text-align: center;
  }

  > span {
    font-family: $font-second;
  }
}

.banner__image {
  height: 90px;
  position: absolute;
  right: 3rem;
  bottom: 0;

  @media (max-width: 999px) {
    display: none;
  }
}

.text-orange {
  color: $orange;
}
</style>
