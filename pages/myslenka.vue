<script>
export default {
  async asyncData ({ $content, store }) {
    const content = await $content('myslenka').fetch()
    store.commit('setNewMainTitle', content.title)
    return { content }
  }
}
</script>

<template>
  <div class="container">
    <div class="content">
      <nuxt-content :document="content" />
    </div>
    <call-to-action />
  </div>
</template>

<style lang="scss" scoped>
.content {
  margin-bottom: 2.5rem;
}
</style>
