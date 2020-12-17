<template>
  <header class="header">
    <div class="header__main">
      <div class="container wrapper">
        <nuxt-link to="/">
          <div class="header__logo" />
        </nuxt-link>

        <div class="header__main--right">
          <h1 class="header__title">
            {{ mainTitle }}
          </h1>
          <nav>
            <nuxt-link class="header__link" to="/podekovat">
              Napsat poděkování
            </nuxt-link>
            <nuxt-link class="header__link" to="/sbirka">
              Sbírka
            </nuxt-link>
            <nuxt-link class="header__link" to="/o-projektu">
              O projektu
            </nuxt-link>
          </nav>
        </div>
      </div>
    </div>
    <div class="container wrapper">
      <date-countdown :count-down-date="newYearDate" class="header__info" />
      <div class="header__info header__info--right">
        <div>Sdíleno <span>{{ totalThanks }} poděkování</span></div>
        <div>Darováno <span>{{ totalDonated }} Kč</span></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  async fetch () {
    await fetch('https://diky2020.noltio.com/welcome').then(res => res.json()).then((res) => {
      this.totalThanks = new Intl.NumberFormat('cs-CZ').format(res.data.totalThanks)
      this.totalDonated = new Intl.NumberFormat('cs-CZ').format(res.data.donated)
      this.newYearDate = new Date(res.data.eventEnd).getTime()
    })
  },
  data () {
    return {
      mainTitle: null,
      totalThanks: '---',
      totalDonated: '---',
      newYearDate: 0
    }
  },
  watch: {
    $route () {
      this.updateTitle()
    }
  },
  created () {
    this.updateTitle()
  },
  methods: {
    updateTitle () {
      this.mainTitle = this.$store.getters.getMainTitle
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 0;
}

.header {
  background: transparent linear-gradient(180deg, #FFF9EF 0%, #FFF9EF 29%, #fff9ef23 100%) 0% 0% no-repeat padding-box;
  padding-top: 4rem;
  padding-bottom: 3rem;
  box-shadow: 0 3rem 2rem 0rem #fff9ef23;
}

.header__main {
  padding-bottom: 5rem;

  &--right {
    text-align: right;
  }
}

.header__logo {
  width: 155px;
  height: 88px;
  background-image: url('/diky2020-logo-donio.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.wrapper {
  display: flex;
  justify-content: space-between;

  &--header {
    align-items: center;
  }
}

.header__link {
  color: $black;
  text-decoration: none;
  margin-left: 2rem;

  &.nuxt-link-active {
    font-weight: bold;
  }
}

.header__title {
  margin-bottom: 23px;
  font-size: 48px;
  font-family: $font-second;
}

.header__info {
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 1.25rem;
  font-weight: bold;

  span {
    color: $orange;
  }

  &--right {
    text-align: right;
  }
}
</style>
