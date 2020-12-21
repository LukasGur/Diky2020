<script>
export default {
  async asyncData ({ $content, store }) {
    const content = await $content('pomahame').fetch()
    store.commit('setNewMainTitle', content.title)
    return { content }
  },
  data () {
    return {
      fullUrl: null,
      url: null,
      thanksId: this.$route.query.id,
      thanksShortId: this.$route.query.shortId
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
      <div class="confirmation-link">
        Najdeš jej zde:
        <form-button :uppercase="false" class="thanks-link" type="primary-outline" :href="`${fullUrl}/${thanksShortId}`" :blank="true">
          {{ url }}/{{ thanksShortId }}
        </form-button>
      </div>
    </div>
    <donio-links :thanks-id="thanksId" class="donio-link" />
    <nuxt-content :document="content" />
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

  @include xl {
    flex-direction: column;
  }
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

  @include md {
    padding: 3rem 1.5rem;
  }

  @include xs {
    padding: 3rem 1rem;
  }
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

  @include xl {
    flex-basis: 100%;
    text-align: center;
  }

  @include md {
    text-align: left;

    &:first-child {
      text-align: right;
    }
  }

  @include sm {
    &:first-child {
      text-align: left;
    }
  }
}

.links__left {
  background-color: $orange-light;
  border-bottom-left-radius: 8px;

  @include xl {
    border-bottom-left-radius: 0;
  }
}

.links__right {
  background-color: $orange;
  color: $white;
  border-bottom-right-radius: 8px;

  @include xl {
    border-bottom-left-radius: 8px;
  }
}

.link__box {
  text-align: right;
  display: inline-block;

  @include xl {
    text-align: left;
  }

  &:last-child {
    margin-left: 8rem;

    @include xl {
      margin-left: 17rem;
    }

    @include md {
      margin-left: 0;
    }
  }
}

.links__image-right {
  position: absolute;
  right: 1rem;
  bottom: 30px;
  height: 181px;
  z-index: 0;
}

.links__image-left {
  position: absolute;
  left: 25px;
  bottom: 30px;
  width: 92px;
  height: 181px;
}

.links__image-right,
.links__image-left {
  @include sm {
    display: none;
  }
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
  text-align: center;
}

.icon--tick {
  background-image: url('/checkbox.svg');
}

.thanks-link {
  @include md {
    margin-top: 0.8rem;
  }
}

.donio-link {
  margin: 0;
}
</style>
