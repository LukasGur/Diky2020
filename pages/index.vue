<script>
export default {
  async fetch () {
    try {
      await fetch(this.apiBaseUrl + this.apiGetThanks).then(res => res.json()).then((res) => {
        this.thanksArray = this.thanksArray.concat(res.data.results)
        if (!res.data._last && res.data._next) {
          this.apiGetThanks = res.data._next
        } else {
          this.lastThanks = true
        }
      })
    } catch (error) {
      this.error = 'Vyskytla se chyba na naší straně a pokoušíme se ji co nejrychleji opravit.'
    }
  },
  fetchDelay: 0,
  fetchOnServer: false,
  async asyncData ({ $content, store, ssrContext }) {
    const content = await $content('index').only('title').fetch()
    store.commit('setNewMainTitle', content.title)
    return { content }
  },
  data () {
    return {
      title: null,
      thanksArray: [],
      error: null,
      apiBaseUrl: 'https://diky2020.noltio.com',
      apiGetThanks: '/thanks/',
      lastThanks: null
    }
  },
  head () {
    return {
      title: 'Poděkuj a šiř pozitivní náladu | Díky 2020',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Projekt vznikl na podporu samoživitelek. Šiř pozitivní náladu a podpoř samoživitelky v nouzi!'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <div v-show="thanksArray.length > 4">
      <div class="thanks__container">
        <thanks-card v-for="thanks in thanksArray.slice(0, 4)" :key="thanks.id" :data="thanks" class="thanks__item" />
      </div>
      <call-to-action />
      <div class="thanks__container">
        <thanks-card v-for="thanks in thanksArray.slice(4)" :key="thanks.id" :data="thanks" class="thanks__item" />
      </div>
      <div class="thanks__end">
        <div v-if="lastThanks">
          <span class="thanks__end-text">Žádná další poděkování.</span>
          <call-to-action />
        </div>
        <form-button v-else type="primary-outline" @click.native="$fetch">
          Další poděkování
        </form-button>
      </div>
    </div>
    <error-msg v-if="error" :error="error" />
  </div>
</template>

<style lang="scss" scoped>
.thanks__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 2rem;
}

.thanks__item {
  flex-basis: 48.5%;
  margin-bottom: 4rem;
}

.thanks__end {
  text-align: center;
  padding-top: 2rem;
}

.thanks__end-text {
  display: block;
  margin-bottom: 3rem;
  font-style: italic;
}

.error {
  color: $red;
  text-align: center;
  margin-top: 2.5rem;
}
</style>
