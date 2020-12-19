<script>
export default {
  async fetch () {
    try {
      await fetch('https://api.diky2020.cz/thanks/' + this.shortId).then(res => res.json()).then((res) => {
        if (res.status === 'ERR') {
          this.error = 'Omlouváme se, ale tato děkovací kartička pravděpodobně neexistuje'
        } else if (res.status === 'OK') {
          this.thanks = res.data
        }
      })
    } catch (err) {
      this.error = 'Vyskytla se chyba na naší straně a pokoušíme se ji co nejrychleji opravit.'
    }
  },
  fetchDelay: 0,
  fetchOnServer: false,
  asyncData ({ store }) {
    store.commit('setNewMainTitle', 'Poděkuj a šiř pozitivní náladu')
  },
  data () {
    return {
      error: null,
      thanks: null,
      fullUrl: null,
      url: null,
      shortId: this.$route.query.id
    }
  },
  mounted () {
    this.getUrl()
  },
  methods: {
    getUrl () {
      const splitUrl = window.location.href.split('/')
      this.fullUrl = splitUrl[0] + '//' + splitUrl[2]
      this.url = splitUrl[2]
    }
  }
}
</script>

<template>
  <div class="container">
    <error-msg v-if="error" :refresh="false" :error="error" />
    <div v-else-if="thanks">
      <div class="wrapper">
        <thanks-card class="thanks-card" :detail-link="false" :summarize="false" :data="thanks" />
        <img v-if="thanks.image" :src="thanks.image" alt="Obrázek přiložený k přáníčku" class="image">
      </div>
      <div class="thanks-link">
        <span class="thanks-link__text">Sdílej poděkování:</span>
        <form-button :href="fullUrl + '/t?id=' + shortId" type="primary-outline" :blank="true">
          {{ url }}/t?id={{ shortId }}
        </form-button>
      </div>
      <call-to-action />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;

  @include sm {
    flex-direction: column-reverse;
  }
}

.image {
  border-radius: 8px;
  flex-basis: 48%;
  width: 48%;
  height: 100%;

  @include lg {
    width: 28%;
    flex-basis: 28%;
  }

  @include sm {
    width: 100%;
    flex-basis: 100%;
    margin-bottom: 1.5rem;
  }
}

.thanks-card {
  flex-basis: 48%;

  @include lg {
    flex-basis: 68%;
  }
}

.thanks-link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 2.4px;
  font-weight: bold;
  margin: 2.5rem 0;

  @include sm {
    flex-direction: column;
  }
}

.thanks-link__text {
  margin-right: 1rem;

  @include sm {
    margin-bottom: 1rem;
    margin-right: 0;
  }
}
</style>
