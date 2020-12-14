<template>
  <div>
    <Mountains />
    <p v-for="(item, i) in myArray" :key="i">
      {{ item }}
    </p>
    <div style="border: 1px solid red">
      <div v-for="(item, i) in content" :key="i">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, store }) {
    const content = await $content('home').only('title').fetch()
    store.commit('setNewMainTitle', content.title)
    return { content }
  },
  data () {
    return {
      myArray: [
        'ahoj',
        'hello',
        'joujou'
      ]
    }
  },
  mounted () {
  }
}
</script>
