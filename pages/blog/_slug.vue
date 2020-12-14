<template>
  <div>
    <p>{{ article.title }}</p>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  }
}
</script>

<style>

</style>
