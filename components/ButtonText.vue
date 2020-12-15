<template>
  <button class="button" :class="{'button--orange': type === 'orange'}">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: null
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

    &--orange {
      color: $orange
    }
  }
</style>
