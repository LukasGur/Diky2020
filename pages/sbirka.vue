<template>
  <p>sbirka</p>
</template>

<script>
export default {
  async asyncData ({ $content, store }) {
    const content = await $content('sbirka').only('title').fetch()
    store.commit('setNewMainTitle', content.title)
    return { content }
  }
}
</script>
