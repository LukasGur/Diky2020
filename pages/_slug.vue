<template>
  <div class="container">
    <h1>this is thanks detail</h1>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, store }) {
    const content = await $content('thanks-detail').only('title').fetch()
    store.commit('setNewMainTitle', content.title)
  }
}
</script>

<style>

</style>
