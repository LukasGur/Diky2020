<script>
export default {
  props: {
    show: {
      type: Boolean,
      deafult: false
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<template>
  <div v-if="show" class="background">
    <div class="c-modal">
      <h2 class="c-modal__title">
        Upozornění
      </h2>
      <p class="c-modal__text">
        Tento web slouží už jen jako reference.
      </p>
      <form-button @click.native="close">
        Ok
      </form-button>
      <button class="c-modal__btn-close" @click="close">
        &#10007;
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.c-modal {
  position: absolute;
  background-color: $yellow-light;
  border: 1px solid $orange;
  max-width: 80%;
  top: 150px;
  left:0;
  right:0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50px;
  text-align: center;
  padding: 2.5rem;

  @include sm {
    padding: 2rem 1.5rem;
  }
}
.c-modal__title {
  color: $orange;
  margin-bottom: 2rem;
  font-size: 2rem;
}
.c-modal__text {
  color: $black;
  margin: 1.5rem 0;
  font-size: 1.2rem;
}
.c-modal__btn-close {
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background-color: $orange;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  color: $white;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: $orange-dark;
  }

  @include sm {
    display: none;
  }
}
</style>
