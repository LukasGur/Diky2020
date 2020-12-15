<template>
  <p v-if="$fetchState.pending">
    Fetching mountains...
  </p>
  <p v-else-if="$fetchState.error">
    An error occurred :(
  </p>
  <div v-else>
    <h1>Nuxt thanks</h1>
    <ul v-for="mountain in mountains.data.results" :key="mountain.id" style="margin-bottom: 1.5rem">
      <li v-for="(value, key) in mountain" :key="key">
        {{ key }}
        {{ value }}
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
      'https://diky2020.noltio.com/thanks/'
    ).then(res => res.json())
  },
  data () {
    return {
      mountains: []
    }
  }
}
</script>
