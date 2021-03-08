<script>
import data from '@/assets/data.json'

export default {
  asyncData ({ store }) {
    store.commit('setNewMainTitle', 'Poděkuj a šiř pozitivní náladu')
  },
  data () {
    return {
      id: this.$route.params.slug,
      fullUrl: null,
      url: null
    }
  },
  computed: {
    thanks () {
      return data.filter(x => x.id === this.id)[0]
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
    },
    async copyToClipboard (url) {
      await this.$copyText(url)
      const btn = document.getElementById('copy')
      btn.style.width = `${btn.offsetWidth}px`
      btn.innerHTML = 'Zkopírováno'
      btn.classList.remove('button--primary-outline')
      btn.disabled = true
      setTimeout(() => {
        btn.classList.add('button--primary-outline')
        btn.innerHTML = `${this.url}/${this.id}`
        btn.disabled = false
      }, 1000)
    }
  }
}
</script>

<template>
  <div class="container">
    <div>
      <div class="wrapper">
        <thanks-card class="thanks-card" :detail-link="false" :summarize="false" :data="thanks" />
        <img v-if="thanks.image" :src="thanks.image" alt="Obrázek přiložený k přáníčku" class="image">
      </div>
      <div class="thanks-link">
        <span class="thanks-link__text">Sdílej poděkování:</span>
        <form-button id="copy" :uppercase="false" type="primary-outline" @click.prevent.native="copyToClipboard(fullUrl + '/' + id)">
          <span class="uppercase">{{ url }}</span>/{{ id }}
        </form-button>
      </div>
      <div class="share-links">
        <ShareNetwork
          network="Facebook"
          :url="`${fullUrl}/${id}`"
          title="Díky 2020"
          tag="a"
          class="share-links__item"
          @click.prevent.native=""
        >
          <i class="icon icon--facebook" />
        </ShareNetwork>
        <ShareNetwork
          network="Twitter"
          :url="`${fullUrl}/${id}`"
          title="Díky 2020"
          class="share-links__item"
          @click.prevent.native=""
        >
          <i class="icon icon--twitter" />
        </ShareNetwork>
        <ShareNetwork
          network="SMS"
          :url="`${fullUrl}/${id}`"
          title="Díky 2020"
          class="share-links__item"
          @click.prevent.native=""
        >
          <i class="icon icon--sms" />
        </ShareNetwork>
        <ShareNetwork
          network="Email"
          :url="`${fullUrl}/${id}`"
          title="Díky 2020"
          class="share-links__item"
          @click.prevent.native=""
        >
          <i class="icon icon--email" />
        </ShareNetwork>
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
    margin-top: auto;
    margin-bottom: auto;
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

.share-links {
  display: flex;
  justify-content: center;
}

.uppercase {
  text-transform: uppercase;
}

.share-links__item {
  border: none;
  background: none;
  font-size: 2.5rem;
  cursor: pointer;
  margin: 0 1rem;
  margin-bottom: 2rem;

  @media (max-width: 400px) {
    font-size: 2.3rem;
    margin: 0 0.6rem;
    margin-bottom: 2rem;
  }
}

.icon--facebook {
  background-image: url('/share-icons/facebook.svg');
}

.icon--twitter {
  background-image: url('/share-icons/twitter.svg');
}

.icon--email {
  background-image: url('/share-icons/email.svg');
}

.icon--sms {
  background-image: url('/share-icons/sms.svg');
}
</style>
