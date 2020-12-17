<script>
export default {
  async asyncData ({ $content, store }) {
    const content = await $content('sbirka').only('title').fetch()
    store.commit('setNewMainTitle', content.title)
    return { content }
  },
  data () {
    return {
      fullUrl: null,
      url: null
    }
  },
  mounted () {
    this.getUrl()
  },
  methods: {
    getUrl () {
      const splitUrl = window.location.href.split('/')
      this.fullUrl = splitUrl[0] + '//' + splitUrl[2]
      this.url = splitUrl[2]
    }
  }
}
</script>

<template>
  <div class="container wrapper">
    <p class="text">
      Prosíme, šiř radost dál a podpoř libovolným finančním darem seniory nebo samoživitelky, pro které byl rok 2020 obzvláště náročný.
    </p>
    <div class="confirmation-box">
      <span class="confirmation-msg">
        <i class="icon icon--tick" />
        Poděkování odesláno
      </span>
      <div class="">
        Najdeš jej zde:
        <form-button type="primary-outline" :href="fullUrl + '/R5XYQ'" :blank="true">
          <!-- {{ url }}/R5XYQ -->
          Diky2020.cz/R5XYQ
        </form-button>
      </div>
    </div>
    <div class="links__wrapper">
      <div class="links__left">
        <img class="links__image-left" src="/hp-banner-illustration-left.png" alt="">
        <div class="link__box">
          <h3 class="links__title">
            Rád podpořím seniory.
          </h3>
          <form-button href="https://www.donio.cz/" :blank="true">
            Podpořit
          </form-button>
        </div>
      </div>
      <div class="links__right">
        <div class="link__box">
          <h3 class="links__title">
            Rád podpořím samoživitelky.
          </h3>
          <form-button href="https://www.donio.cz/" :blank="true" type="primary-outline">
            Podpořit
          </form-button>
        </div>
        <img class="links__image-right" src="/hp-banner-illustration-right.png" alt="">
      </div>
    </div>
    <p class="signature">
      Pro zaslání finančního příspěvku budete přesměrování na web Donio.cz
    </p>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.links__wrapper {
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
}

.confirmation-box {
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid $gray;
  padding: 3rem;
  width: 100%;
  text-align: center;
  border-radius: 8px 8px 0px 0px;
  letter-spacing: 3.2px;
  margin-top: 1.2rem;
}

.confirmation-msg {
  display: block;
  margin-bottom: 1rem;
}

.links__left,
.links__right {
  flex-basis: 50%;
  width: 100%;
  padding: 2rem;
  position: relative;
}

.links__left {
  background-color: $orange-light;
  border-bottom-left-radius: 8px;
}

.links__right {
  background-color: $orange;
  color: $white;
  border-bottom-right-radius: 8px;
}

.link__box {
  text-align: right;
  display: inline-block;

  &:last-child {
    margin-left: 8rem;
  }
}

.links__image-right {
  position: absolute;
  right: 25px;
  bottom: 30px;
  width: 92px;
  height: 181px;
}

.links__image-left {
  position: absolute;
  left: 25px;
  bottom: 30px;
  width: 92px;
  height: 181px;
}

.links__title {
  font-family: $font-second;
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.text {
  max-width: 500px;
  text-align: center;
}

.signature {
  font-size: 12px;
}

.icon--tick {
  background-image: url('/checkbox.svg');
}
</style>
