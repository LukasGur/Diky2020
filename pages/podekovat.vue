<template>
  <div class="container">
    <form class="form" @:submit.prevent="handleSubmit">
      <div class="form__line form__group">
        <form-input v-model="name" placeholder="František" label="Jmenuji se" :required="true" />
        <form-input v-model="addressee" placeholder="Petrovi, taťkovi, zdravotníkům..." label="a chci poděkovat" :required="true" />
        <form-upload-file />
      </div>
      <form-textarea v-model="text" class="form__line" placeholder="Brácho, díky moc, že jsi se mnou po celý rok byl a že jsi mi pomohl vše zvládnout! Fanda" label="(tvoje poděkování)" :required="true" />
      <span v-if="error" class="form__error-msg">{{ error }}</span>
      <div class="form__line form__footer">
        <button-text to="/sbirka" class="form__footer-item" type="orange">
          Chci pouze podpořit sbírku
        </button-text>
        <form-button class="form__footer-item">
          Odeslat poděkování
        </form-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, store }) {
    const content = await $content('podekovat').only('title').fetch()
    store.commit('setNewMainTitle', content.title)
    return { content }
  },
  data () {
    return {
      name: '',
      addressee: '',
      text: '',
      error: null
    }
  },
  methods: {
    handleSubmit () {
      // eslint-disable-next-line no-console
      console.log('values')
    }
  }
}
</script>

<style lang="scss" scoped>
  .form {
    border: 1px solid $gray;
    padding: 3.7rem;
    box-shadow: 0px 4px 8px #0000000A;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

    > * {
      flex-basis: 30%;
    }
  }

  .form__footer {
    text-align: right;

    > * {
      width: 30%;
    }
  }

  .form__footer-item {
    width: 30%;
    margin-right: 5%;

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
</style>
