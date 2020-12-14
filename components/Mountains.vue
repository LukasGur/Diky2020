<template>
  <p v-if="$fetchState.pending">
    Fetching mountains...
  </p>
  <p v-else-if="$fetchState.error">
    An error occurred :(
  </p>
  <div v-else>
    <h1>Nuxt Mountains</h1>
    <ul>
      <li v-for="mountain in mountains" :key="mountain.title">
        {{ mountain.title }}
      </li>
    </ul>
    <button @click="$fetch">
      Refresh
    </button>
  </div>
</template>

<script>
export default {
  async fetch () {
    this.mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then(res => res.json())
  },
  data () {
    return {
      mountains: []
    }
  }
}
</script>
