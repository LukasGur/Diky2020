<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      Tato stránka nebyla nalezena
    </h1>
    <h1 v-else>
      Vyskytla se chyba
    </h1>
    <form-button to="/">
      Zpět domů
    </form-button>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  asyncData ({ store }) {
    store.commit('setNewMainTitle', 'Tato stránka nebyla nalezena')
  }
}
</script>
