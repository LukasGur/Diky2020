<script>
export default {
  async fetch () {
    try {
      await fetch('https://api.diky2020.cz/welcome').then(res => res.json()).then((res) => {
        this.totalThanks = new Intl.NumberFormat('cs-CZ').format(res.data.totalThanks)
        this.totalDonated = new Intl.NumberFormat('cs-CZ').format(res.data.donated)
        this.newYearDate = new Date(res.data.eventEnd).getTime()
      })
    } catch (error) {
      this.error = 'Chyba na naší straně, nebo špatné připojení k internetu.'
    }
  },
  fetchDelay: 0,
  fetchOnServer: false,
  data () {
    return {
      mainTitle: null,
      totalThanks: '---',
      totalDonated: '---',
      newYearDate: 1609455599999,
      error: null
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

<template>
  <header class="header">
    <div class="header__main">
      <div class="container wrapper wrapper-top">
        <nuxt-link to="/" aria-label="Logo">
          <div class="header__logo" />
        </nuxt-link>

        <div class="header__right">
          <h1 class="header__title">
            {{ mainTitle }}
          </h1>
          <nav class="header__nav">
            <nuxt-link class="header__link" to="/podekovat">
              Napiš poděkování
            </nuxt-link>
            <nuxt-link class="header__link" to="/pomahame">
              Pomáháme
            </nuxt-link>
            <nuxt-link class="header__link" to="/myslenka">
              Myšlenka
            </nuxt-link>
          </nav>
        </div>
      </div>
    </div>
    <error-msg v-if="error" :error="error" />
    <div class="container wrapper wrapper-bottom">
      <date-countdown :count-down-date="newYearDate" class="header__info" />
      <div class="header__info header__info--right">
        <div>Sdíleno <span>{{ totalThanks }} poděkování</span></div>
        <div>Darováno <span>{{ totalDonated }} Kč</span></div>
      </div>
    </div>
  </header>
</template>

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
  padding-bottom: 6rem;

  @include lg {
    padding-bottom: 4rem;
  }
}

.header__right {
  text-align: right;
}

.header__logo {
  width: 100px;
  height: 56.5px;
  background-image: url('/diky2020-logo-donio.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.5rem;
  position: relative;
  top: 0.2rem;
}

.wrapper {
  display: flex;
  justify-content: space-between;

  &--header {
    align-items: center;
  }
}

.wrapper-top {
  position: relative;
}

.wrapper-bottom {
  @include lg {
    flex-direction: column;
  }
}

.header__nav {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: -2rem;

  @include sm {
    text-align: center;
  }
}

.header__link {
  color: $black;
  text-decoration: none;
  margin-left: 2rem;
  display: inline-block;

  &:hover {
    text-shadow: -0.06ex 0 $black, 0.06ex 0 $black;
  }

  @include sm {
    margin-left: 0;
    &:nth-child(2){
      margin: 0 1rem;
    }
  }

  @include xs {
  }

  &.nuxt-link-active {
    text-shadow: -0.06ex 0 $black, 0.06ex 0 $black;
  }
}

.header__title {
  margin-bottom: 23px;
  font-size: 48px;
  font-family: $font-second;
  margin-left: auto;

  @include lg {
    font-size: 40px;
  }

  @include md {
    font-size: 48px;
    max-width: 366px;
  }

  @include sm {
    font-size: 30px;
    width: 236px;
  }

  @include xs {
    width: inherit;
    font-size: 24px;
    max-width: 200px;
  }
}

.header__info {
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.4em;

  @include sm {
    font-size: 0.95rem;
    letter-spacing: 2px;
  }

  @include xs {
    font-size: 0.8rem;
    letter-spacing: 2px;
  }

  span {
    color: $orange;
  }

  &--right {
    text-align: right;

    @include lg {
      text-align: inherit;
    }
  }
}

.error {
  color: $red;
  text-align: center;
}
</style>
