<template>
  <component :is="elementType" :to="to" class="button" :class="[buttonType ? 'button--'+buttonType : '']">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      required: false,
      default: null
    },
    to: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    elementType () {
      return this.to ? 'router-link' : 'button'
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  border: none;
  background-color: $orange;
  color: $white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2.4px;
  font-size: 1rem;
}

.button--primary-outline {
  color: $orange;
  background-color: $white;
  border: 1px solid $orange
}
</style>
