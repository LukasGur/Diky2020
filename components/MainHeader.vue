<template>
  <div>
    <header class="header">
      <div class="container wrapper">
        <div class="logo" />

        <div>
          <h1>{{ mainTitle }}</h1>
          <nav>
            <nuxt-link to="/podekovat">
              neco
            </nuxt-link>
            <nuxt-link to="/sbirka">
              Sbírka
            </nuxt-link>
            <nuxt-link to="/o-projektu">
              O projektu
            </nuxt-link>
          </nav>
        </div>
      </div>
    </header>
    <div class="container wrapper">
      <div>
        Zbývá <span>5</span> dnů <span>23</span> hodin a&nbsp;<span>15</span> minut
      </div>
      <div>
        <div>Sdíleno 15 429 poděkování</div>
        <div>Darováno 1 534 300 Kč</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainTitle: null
    }
  },
  created () {
    this.mainTitle = this.$store.getters.getMainTitle
  }
}
</script>

<style lang="scss" scoped>
.nuxt-link-active {
  color: red;
}

.logo {
  width: 122px;
  height: 100px;
  background-image: url('/logo.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.header {
  background: $orange;
  box-shadow: 0px 64px 74px 36px $orange;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
