<script>
export default {
  asyncData ({ store }) {
    store.commit('setNewMainTitle', 'Sdílej své poděkování')
  },
  data () {
    return {
      name: '',
      addressee: '',
      text: '',
      image: null,
      error: null,
      maxTextLength: 600,
      loading: false
    }
  },
  mounted () {
    this.image = new File([''], '')
  },
  methods: {
    onError (error) {
      // eslint-disable-next-line no-console
      console.log('Error happened:', error)
      this.loading = false
      this.error = error
    },
    async onSubmit () {
      this.error = null
      this.loading = true

      try {
        await this.$recaptcha.getResponse()
        await this.$recaptcha.reset()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Login error:', error)
        this.loading = false
        this.error = error
      }
    },
    async onSuccess (token) {
      const formData = new FormData()

      if (this.image.size > 1024 * 1024 * 8) {
        this.error = 'Nahraný obrázek má více jak 8MB. Vyberte jiný nebo zmenšete velikost aktuálního.'
        return
      }

      formData.append('name', this.name)
      formData.append('addressee', this.addressee)
      formData.append('text', this.text)
      formData.append('image', this.image)
      formData.append('g-recaptcha-response', token)

      const requestOptions = {
        method: 'POST',
        body: formData
      }
      const response = await fetch('https://api.diky2020.cz/thanks/', requestOptions)
      const data = await response.json()
      if (data.status === 'ERR') {
        this.loading = false
        this.error = data.msg
        return
      }

      this.$router.push(`/pomahame/odeslano?shortId=${data.data.shortId}&id=${data.data.id}`)
      this.loading = false
    }
  }
}
</script>

<template>
  <div class="container">
    <form
      id="form"
      ref="form"
      class="form"
      method="POST"
      enctype="multipart/form-data"
      @submit.prevent="onSubmit"
    >
      <div class="form__line form__group">
        <form-input v-model="name" placeholder="František" label="Jmenuji se" :required="true" />
        <form-input v-model="addressee" placeholder="Petrovi, taťkovi, zdravotníkům..." label="a chci poděkovat" :required="true" />
        <form-upload-file v-model="image" />
      </div>
      <form-textarea
        v-model="text"
        :max-characters="maxTextLength"
        class="form__line"
        placeholder="Brácho, díky moc, že jsi se mnou po celý rok byl a že jsi mi pomohl vše zvládnout! Fanda"
        label="(Tvoje poděkování)"
        :required="true"
      />
      <span v-if="error" class="form__error-msg">{{ error }}</span>
      <small class="form__recaptcha-terms">Stránku chrání reCAPTCHA. Platí <a href="https://policies.google.com/privacy" target="_blank">Ochrana soukromí</a> a&nbsp;<a href="https://policies.google.com/terms" target="_blank">Podmínky používání</a> Google.</small>
      <div class="form__line form__footer">
        <recaptcha @error="onError" @success="onSuccess" />
        <button-text to="/pomahame" class="form__footer-item" type="orange">
          Chci pouze podpořit sbírku
        </button-text>
        <form-button class="form__footer-item">
          <span v-if="loading">
            Nahrávání...
          </span>
          <span v-else>
            Odeslat poděkování
          </span>
        </form-button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form {
  border: 1px solid $gray;
  padding: 3.7rem;
  box-shadow: 0px 4px 8px #0000000A;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include sm {
    padding: 2rem;
  }

  @include xs {
    padding: 0;
    border: none;
    box-shadow: none;
  }
}

.form__line {
  margin-bottom: 1.8rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.form__group {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @include lg {
    flex-direction: column;
  }

  > * {
    flex-basis: 30%;

    @include lg {
      flex-basis: 100%;
      margin-bottom: 1.8rem;

      &:last-child {
        margin-bottom: 0rem;
      }
    }
  }
}

.form__footer {
  text-align: right;

  @include md {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }
}

.form__footer-item {
  width: 30%;
  margin-right: 5%;

  @include lg {
    width: 50%;
  }

  @include md {
    width: 100%;
    margin-bottom: 1.8rem;

    &:first-child {
      margin-bottom: 0;
    }
  }

  &:last-child {
    margin-right: 0;
  }
}

.form__error-msg {
  color: $red;
  margin-left: auto;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.form__recaptcha-terms {
  color: $gray;
  margin-left: auto;
  margin-bottom: 1.3rem;

  a {
    color: $gray;
    transition: 0.2s;

    &:hover {
      color: $orange;
    }
  }
}
</style>
