<template>
  <div class="container">
    <article>
      <nuxt-content :document="content" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, store }) {
    const content = await $content('o-projektu').fetch()
    store.commit('setNewMainTitle', content.title)
    return { content }
  }
}
</script>
