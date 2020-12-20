<template>
  <component
    :is="elementType"
    :to="to"
    class="button"
    :class="[type ? 'button--'+type : '', uppercase ? 'button--uppercase' : '']"
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
    },
    uppercase: {
      type: Boolean,
      required: false,
      default: true
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
  padding: 16px 44px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  letter-spacing: 2.4px;
  font-size: 12px;
  font-weight: bold;
  transition: 0.2s;
  text-align: center;
  text-transform: none;

  @include xs {
    padding: 16px 30px;
  }

  &:hover {
    background-color: $orange-dark;
  }

  &--uppercase {
    text-transform: uppercase;
  }
}

.button--primary-outline {
  color: $orange;
  background-color: $white;
  border: 1px solid $orange;

  &:hover {
    background-color: $orange-light-2;
  }
}
</style>
