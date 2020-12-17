<template>
  <component :is="elementType" :to="to" class="button" :class="{'button--orange': type === 'orange'}">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    type: {
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
    background: none;
    color: $black;
    letter-spacing: 2.4px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    padding: 4px;
    text-decoration: none;
    text-transform: uppercase;

    &--orange {
      color: $orange
    }
  }
</style>
