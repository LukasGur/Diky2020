<template>
  <div>
    {{ blogContent.title }}
    <nuxt-content :document="blogContent" />
    <ul>
      <li v-for="article in articles" :key="article.id">
        <NuxtLink :to="`/blog/${article.slug}`">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, store }) {
    const articles = await $content('articles').only(['slug', 'title']).fetch()
    const blogContent = await $content('blog').fetch()
    store.commit('setNewMainTitle', blogContent.title)
    return { articles, blogContent }
  }
}
</script>

<style>

</style>
