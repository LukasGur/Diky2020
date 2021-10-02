<script>
import data from '@/assets/data.json'

export default {
  asyncData ({ store }) {
    store.commit('setNewMainTitle', 'Poděkuj a šiř pozitivní náladu')
  },
  data () {
    return {
      showModal: false,
      maxShowThanks: 8
    }
  },
  computed: {
    thanksArray () {
      return data
    }
  },
  mounted () {
    this.showModal = !window.localStorage.getItem('modalShown')
  },
  methods: {
    closeModal () {
      window.localStorage.setItem('modalShown', true)
      this.showModal = false
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="thanks__container">
      <thanks-card v-for="thanks in thanksArray.slice(0, 4)" :key="thanks.id" :data="thanks" class="thanks__item" />
    </div>
    <call-to-action v-show="thanksArray.length > 4" />
    <div class="thanks__container">
      <thanks-card v-for="thanks in thanksArray.slice(4, maxShowThanks)" :key="thanks.id" :data="thanks" class="thanks__item" />
    </div>
    <div class="thanks__end">
      <form-button v-if="thanksArray.length > maxShowThanks" type="primary-outline" @click.native="maxShowThanks += 4">
        Další poděkování
      </form-button>
      <div v-else>
        <span class="thanks__end-text">Žádná další poděkování.</span>
        <call-to-action />
      </div>
    </div>
    <reference-modal :show="showModal" @close="closeModal" />
  </div>
</template>

<style lang="scss" scoped>
.thanks__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 2rem;
}

.thanks__item {
  flex-basis: 48.5%;
  margin-bottom: 4rem;

  @include lg {
    flex-basis: 100%;
    margin-bottom: 2.5rem;
  }
}

.thanks__end {
  text-align: center;
  padding-top: 2rem;
}

.thanks__end-text {
  display: block;
  margin-bottom: 3rem;
  font-style: italic;
}

.error {
  color: $red;
  text-align: center;
  margin-top: 2.5rem;
}
</style>
