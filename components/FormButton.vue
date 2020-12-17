<template>
  <component
    :is="elementType"
    :to="to"
    class="button"
    :class="[type ? 'button--'+type : '']"
    :target="blank ? '_blank' : ''"
    :href="href"
  >
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
    },
    href: {
      type: String,
      required: false,
      default: null
    },
    blank: {
      type: Boolean,
      required: false,
      default: null
    }
  },
  computed: {
    elementType () {
      if (this.to) {
        return 'router-link'
      } else if (this.href) {
        return 'a'
      } else {
        return 'button'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  border: none;
  background-color: $orange;
  color: $white;
  padding: 1rem 2.8rem;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2.4px;
  font-size: 12px;
  font-weight: bold;
}

.button--primary-outline {
  color: $orange;
  background-color: $white;
  border: 1px solid $orange
}
</style>
