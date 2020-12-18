<template>
  <p>o projektu</p>
</template>

<script>
export default {
  async asyncData ({ $content, store }) {
    const content = await $content('o-projektu').only('title').fetch()
    store.commit('setNewMainTitle', content.title)
  }
}
</script>
