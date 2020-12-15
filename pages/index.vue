<script>
export default {
  async fetch () {
    await fetch(this.apiBaseUrl + this.apiGetThanks).then(res => res.json()).then((res) => {
      this.thanksArray = this.thanksArray.concat(res.data.results)
      if (!res.data._last && res.data._next) {
        this.apiGetThanks = res.data._next
      } else {
        this.lastThanks = true
      }
    })
  },
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
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<template>
  <div v-show="thanksArray.length > 4" class="container">
    <div class="thanks__container">
      <thanks-card v-for="thanks in thanksArray.slice(0, 4)" :key="thanks.id" :data="thanks" class="thanks__item" />
    </div>
    <call-to-action />
    <div class="thanks__container">
      <thanks-card v-for="thanks in thanksArray.slice(4)" :key="thanks.id" :data="thanks" class="thanks__item" />
    </div>
    <div class="thanks__end">
      <div v-if="lastThanks">
        Žádná další poděkování
        <call-to-action />
      </div>
      <form-button v-else button-type="primary-outline" @click.native="$fetch">
        Další poděkování
      </form-button>
    </div>
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
  padding-bottom: 5rem;
}
</style>
